# Orbite — atlante stellare

## Avvio

Richiede Node.js 18 o successivo. Dalla cartella del progetto:

```powershell
npm start
```

Apri `http://127.0.0.1:3000` nel browser. Non servono pacchetti npm aggiuntivi.

## Assistente LLM

La mappa, i calcoli locali, il filtro, il modello 3D e la cronologia delle missioni funzionano anche senza una chiave API. Per abilitare le risposte LLM di Data, imposta la chiave nell’ambiente del server prima di avviarlo:

```powershell
$env:OPENAI_API_KEY = "la-tua-chiave"
npm start
```

La chiave resta sul server e non viene inviata al browser. Facoltativamente, imposta `OPENAI_MODEL` per usare un modello diverso dal valore predefinito. Il backend usa l’API Responses e può usare la ricerca web per controllare informazioni aggiornate.

Per ottenere una chiave API, consulta la [documentazione ufficiale OpenAI](https://developers.openai.com/api/docs/quickstart).

Le distanze e i dati dei corpi planetari sono un archivio statico. Gli elementi della cronologia delle missioni sono eventi storici, non telemetria in diretta. Le distanze Terra–pianeta del Sistema Solare sono intervalli approssimati con orbite circolari; quelle degli esopianeti sono stime dalla distanza del sistema e dall’orbita.
