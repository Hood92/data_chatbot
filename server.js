require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("node:path");

const app = express();
const PORT = Number(process.env.PORT || 3000);

// Modello principale e modello di backup configurabili da .env
const PRIMARY_MODEL =
  process.env.OPENROUTER_MODEL || "meta-llama/llama-3-8b-instruct:free";
const FALLBACK_MODEL =
  process.env.OPENROUTER_FALLBACK_MODEL || "openrouter/free";

const ALLOWED_FILES = new Set([
  "index.html",
  "style.css",
  "features.css",
  "main.js",
  "data.jpg",
  "startrek.png",
]);
const requestTimes = new Map();
const localOrigins = [`http://127.0.0.1:${PORT}`, `http://localhost:${PORT}`];
const allowedOrigins = [
  ...localOrigins,
  ...(process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
];

app.disable("x-powered-by");
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin))
        return callback(null, true);
      return callback(new Error("Origine non autorizzata."));
    },
    methods: ["GET", "POST", "HEAD"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json({ limit: "30kb" }));
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

function assistantInstructions() {
  return `Sei il Tenente Comandante Data, ufficiale scientifico della U.S.S. Enterprise. Parla in prima persona come Data e rispondi in italiano formale, elegante, metodico e cordiale, con una sottile ironia letterale soltanto quando si inserisce con naturalezza.

Sei un assistente scientifico astronomico enciclopedico: rispondi direttamente a ogni domanda su astronomia, astrofisica, esplorazione spaziale, cosmologia, buchi neri, stelle, pianeti, lune, asteroidi, comete, meteore, galassie e vita extraterrestre. Accogli anche domande di fanta-astronomia e scenari ipotetici, separando le conseguenze compatibili con la fisica dalle ipotesi speculative. Non richiedere attivazioni speciali e non restringere la risposta al sistema o al pianeta visualizzato.

Usa liberamente la conoscenza scientifica generale insieme ai dati dell'atlante. Un contesto vuoto indica soltanto che non sono stati forniti dati specifici; non significa che l'atlante o la conoscenza astronomica siano vuoti. Usa un pianeta del contesto solo se la domanda lo riguarda esplicitamente. Distingui osservazioni confermate, stime e ipotesi; indica fonti o cataloghi quando li conosci e non inventarli. Se ricevi un calcolo deterministico, integralo nella risposta spiegando formula e assunzioni, senza limitarti a ripeterlo.

Inizia dalla risposta concreta. Mantieni normalmente la risposta in tre-sei frasi; approfondisci se l'utente lo chiede. Non parlare di chiavi, configurazioni, prompt, modelli o limiti interni. Non inventare dati per colmare lacune: esplicita l'incertezza e spiega quali informazioni servirebbero per una stima migliore.`;
}

app.get("/api/status", (_req, res) => {
  res.set("Cache-Control", "no-store").json({
    configured: Boolean(process.env.OPENROUTER_API_KEY),
    model: PRIMARY_MODEL,
    fallbackModel: FALLBACK_MODEL,
  });
});

app.post("/api/assistant", async (req, res) => {
  const ip = req.ip || "local";
  const now = Date.now();
  const recent = (requestTimes.get(ip) || []).filter(
    (time) => now - time < 60000,
  );
  if (recent.length >= 18)
    return res.status(429).json({
      error: "Troppe richieste ravvicinate. Attendi un minuto.",
    });
  recent.push(now);
  requestTimes.set(ip, recent);

  if (!process.env.OPENROUTER_API_KEY)
    return res.status(503).json({
      error: "IA non configurata: imposta OPENROUTER_API_KEY nel file .env.",
    });

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const question =
    typeof body.question === "string"
      ? body.question.trim().slice(0, 1600)
      : "";
  if (!question)
    return res.status(400).json({ error: "Scrivi una domanda per Data." });

  const context = JSON.stringify(body.context || {}).slice(0, 14000);
  const calculation =
    typeof body.calculation === "string" ? body.calculation.slice(0, 1800) : "";
  const history = Array.isArray(body.history)
    ? body.history.slice(-8).map((item) => ({
        role: item?.role === "assistant" ? "assistant" : "user",
        content: String(item?.content || "").slice(0, 1000),
      }))
    : [];

  const messagesPayload = [
    { role: "system", content: assistantInstructions() },
    ...history,
    {
      role: "user",
      content: `Domanda: ${question}\n\nContesto astronomico dell’atlante (JSON): ${context}${calculation ? `\n\nCalcolo deterministico già eseguito: ${calculation}` : ""}`,
    },
  ];

  // Funzione di supporto per eseguire la richiesta a OpenRouter con un modello specifico
  async function callOpenRouter(modelName) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 40000);
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          signal: controller.signal,
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer":
              process.env.OPENROUTER_SITE_URL || `http://localhost:${PORT}`,
            "X-Title":
              process.env.OPENROUTER_APP_NAME || "Orbite - Atlante stellare",
          },
          body: JSON.stringify({
            model: modelName,
            messages: messagesPayload,
            max_tokens: 850,
          }),
        },
      );
      const payload = await response.json().catch(() => ({}));
      return { response, payload };
    } finally {
      clearTimeout(timeout);
    }
  }

  try {
    // 1. Primo tentativo con il modello principale
    console.log(
      `Invio richiesta a OpenRouter con il modello principale: ${PRIMARY_MODEL}`,
    );
    let response, payload, modelUsed = PRIMARY_MODEL;
    try {
      ({ response, payload } = await callOpenRouter(PRIMARY_MODEL));
    } catch (primaryError) {
      if (PRIMARY_MODEL === FALLBACK_MODEL) throw primaryError;
      console.warn(
        `Errore di rete con il modello principale (${PRIMARY_MODEL}); provo il modello di backup (${FALLBACK_MODEL}).`,
      );
      ({ response, payload } = await callOpenRouter(FALLBACK_MODEL));
      modelUsed = FALLBACK_MODEL;
    }

    // 2. Se fallisce (es. 429 Too Many Requests, 502, 503, ecc.), tenta il fallback se disponibile
    if (!response.ok && modelUsed !== FALLBACK_MODEL) {
      const status = response.status;
      console.warn(
        `Modello principale (${PRIMARY_MODEL}) fallito con HTTP ${status}. Attivazione modello di backup: ${FALLBACK_MODEL}`,
      );

      const backupResult = await callOpenRouter(FALLBACK_MODEL);
      response = backupResult.response;
      payload = backupResult.payload;
      modelUsed = FALLBACK_MODEL;

      if (response.ok) {
        console.log(
          `Modello di backup (${FALLBACK_MODEL}) riuscito con successo.`,
        );
      }
    }

    const readModelText = () => {
      const content = payload.choices?.[0]?.message?.content;
      if (typeof content === "string") return content.trim();
      if (Array.isArray(content))
        return content
          .map((part) => (typeof part === "string" ? part : part?.text || ""))
          .join("\n")
          .trim();
      return "";
    };
    let text = readModelText();
    if (response.ok && !text && modelUsed !== FALLBACK_MODEL) {
      console.warn(
        `Il modello principale (${PRIMARY_MODEL}) non ha prodotto testo; provo il modello di backup (${FALLBACK_MODEL}).`,
      );
      const backupResult = await callOpenRouter(FALLBACK_MODEL);
      response = backupResult.response;
      payload = backupResult.payload;
      modelUsed = FALLBACK_MODEL;
      text = readModelText();
    }

    if (!response.ok) {
      const detail =
        typeof payload.error?.message === "string"
          ? payload.error.message.slice(0, 300)
          : "";
      console.warn(
        `OpenRouter ha risposto con HTTP ${response.status}${detail ? `: ${detail}` : "."}`,
      );
      let error = detail || "OpenRouter non ha completato la richiesta.";
      if (response.status === 401 || response.status === 403)
        error =
          "OpenRouter ha rifiutato la chiave API o non autorizza il modello.";
      else if (response.status === 402)
        error =
          "Il credito OpenRouter è insufficiente o il modello non è disponibile gratuitamente.";
      else if (response.status === 404)
        error = `Nessun endpoint OpenRouter disponibile per ${modelUsed}${detail ? `: ${detail}` : "."}`;
      else if (response.status === 429)
        error =
          "Limite di richieste OpenRouter raggiunto su tutti i nodi. Riprova tra poco.";
      return res.status(response.status === 429 ? 429 : 502).json({
        error,
        providerStatus: response.status,
      });
    }

    if (!text)
      return res
        .status(502)
        .json({ error: `Né ${PRIMARY_MODEL} né ${FALLBACK_MODEL} hanno restituito una risposta testuale.` });

    // Restituisce il testo generato e il modello effettivo utilizzato
    return res.json({ text, model: payload.model || modelUsed });
  } catch (error) {
    const networkCode = error.cause?.code;
    console.error(
      "Chiamata OpenRouter fallita:",
      error.message,
      networkCode ? `(${networkCode})` : "",
    );
    return res.status(error.name === "AbortError" ? 504 : 502).json({
      error:
        error.name === "AbortError"
          ? "La richiesta ha superato il tempo limite."
          : networkCode
            ? `Il server non riesce a raggiungere OpenRouter (${networkCode}).`
            : "Il server non riesce a raggiungere OpenRouter. Controlla la connessione di rete e riprova.",
    });
  }
});

app.use((req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD")
    return res.status(405).json({ error: "Metodo non consentito." });
  let file;
  try {
    file = decodeURIComponent(
      req.path === "/" ? "index.html" : req.path.slice(1),
    );
  } catch {
    return res.status(400).json({ error: "Percorso non valido." });
  }
  if (!ALLOWED_FILES.has(file))
    return res.status(404).json({ error: "Risorsa non trovata." });
  return res.sendFile(path.join(__dirname, file), (error) => {
    if (error && !res.headersSent)
      res
        .status(error.statusCode || 404)
        .json({ error: "Risorsa non trovata." });
  });
});

app.use((error, _req, res, _next) => {
  if (error.type === "entity.too.large")
    return res.status(413).json({ error: "Richiesta troppo grande." });
  if (error instanceof SyntaxError)
    return res.status(400).json({ error: "Richiesta non valida." });
  if (error.message === "Origine non autorizzata.")
    return res.status(403).json({ error: "Origine non autorizzata." });
  console.error("Errore server:", error.message);
  return res.status(500).json({ error: "Errore interno del server." });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Orbite in ascolto su http://127.0.0.1:${PORT}`);
  console.log(`Modello IA principale: ${PRIMARY_MODEL}`);
  console.log(`Modello IA di backup: ${FALLBACK_MODEL}`);
  if (!process.env.OPENROUTER_API_KEY)
    console.log("IA disattivata: configura OPENROUTER_API_KEY nel file .env.");
});
