# TO SIMO DO

Questo file contiene le istruzioni per le azioni manuali che devi compiere per completare la configurazione del sito e mantenerlo aggiornato.

## 1. Configurazione API Social (Importante!)
Per far sì che le statistiche (iscritti, visualizzazioni) si aggiornino automaticamente, devi ottenere le chiavi API dalle piattaforme e inserirle nel progetto.

### Passo A: Crea il file delle variabili d'ambiente
1.  Nella cartella principale del progetto, crea un file chiamato `.env.local`.
2.  Incolla il seguente contenuto (dovrai sostituire i valori dopo l'uguale):

```env
# YouTube Data API v3
YOUTUBE_API_KEY=la_tua_chiave_youtube_qui
YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxxx

# Instagram (Opzionale - richiede setup complesso)
INSTAGRAM_ACCESS_TOKEN=il_tuo_token_instagram
```

### Passo B: Ottenere la YouTube API Key
1.  Vai su [Google Cloud Console](https://console.cloud.google.com/).
2.  Crea un nuovo progetto.
3.  Cerca "YouTube Data API v3" nella libreria e abilitala.
4.  Vai su "Credenziali" -> "Crea Credenziali" -> "Chiave API".
5.  Copia la chiave e incollala in `.env.local` al posto di `la_tua_chiave_youtube_qui`.
6.  Trova il tuo Channel ID (lo trovi nell'URL del tuo canale o nelle impostazioni avanzate di YouTube) e incollalo in `YOUTUBE_CHANNEL_ID`.

## 2. Gestione Blog
Per aggiungere nuovi articoli al blog:
1.  Apri il file `src/data/posts.js`.
2.  Aggiungi un nuovo oggetto all'array `posts` seguendo lo schema esistente:
    ```javascript
    {
      slug: "titolo-del-tuo-articolo", // Deve essere unico e senza spazi (usa i trattini)
      title: "Il Titolo Del Tuo Articolo",
      excerpt: "Una breve descrizione che appare nell'anteprima...",
      date: "2024-11-25", // Data in formato AAAA-MM-GG
      image: "/tua-immagine.jpg", // Assicurati che l'immagine sia nella cartella 'public'
      category: "Fauna", // Scegli tra: Fauna, Trekking, Tech & Gear, Offroad
      content: "Il testo completo del tuo articolo..."
    },
    ```
3.  Salva il file. Il sito si aggiornerà automaticamente.

## 3. Immagini
Quando aggiungi nuove immagini:
1.  Mettile nella cartella `public`.
2.  Usa nomi semplici e senza spazi (es. `cervo-neve.jpg` invece di `IMG 1234.jpg`).
3.  Riferisciti a loro nel codice iniziando con `/` (es. `/cervo-neve.jpg`).
