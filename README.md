# Orbite — atlante stellare

## Avvio

Richiede Node.js 18 o successivo. Dalla cartella del progetto:

```powershell
npm start
```

Apri `http://127.0.0.1:3000` nel browser. Per lo sviluppo con riavvio automatico del server quando modifichi i file:

```powershell
npm run dev
```

## Assistente LLM

La mappa, i calcoli locali, il filtro, il modello 3D e la cronologia delle missioni funzionano anche senza una chiave API. Copia `.env.example` in `.env` e incolla la tua chiave OpenRouter in `OPENROUTER_API_KEY`:

```powershell
Copy-Item .env.example .env
npm run dev
```

La chiave resta sul server e non viene inviata al browser. Puoi scegliere il modello con `OPENROUTER_MODEL`. Per un frontend separato, configura `CORS_ORIGIN` con le origini autorizzate, separate da virgola. Se frontend e backend sono serviti insieme, lascialo vuoto.

Per ottenere una chiave API, consulta [OpenRouter](https://openrouter.ai/keys).

Le distanze e i dati dei corpi planetari sono un archivio statico. Gli elementi della cronologia delle missioni sono eventi storici, non telemetria in diretta. Le distanze Terra–pianeta del Sistema Solare sono intervalli approssimati con orbite circolari; quelle degli esopianeti sono stime dalla distanza del sistema e dall’orbita.
