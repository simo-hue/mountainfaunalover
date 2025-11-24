# TO SIMO DO

Questo file contiene le istruzioni per le azioni manuali che devi compiere per completare la configurazione del sito e mantenerlo aggiornato.

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

## 3. Gestione Immagini
Ho organizzato le immagini in cartelle specifiche per mantenere tutto ordinato. Quando aggiungi nuove foto, segui questa struttura in `public/images/`:

-   `branding/`: Loghi e icone del brand (es. `logo.jpg`).
-   `home/`: Immagini per la homepage (es. `background.jpg`).
-   `blog/`: Immagini per gli articoli del blog.
-   `social/`: Immagini per la pagina social.
-   `partners/`: Loghi dei partner.
-   `founder/`: Foto per la pagina Founder.

**Esempio:** Se aggiungi una foto per un nuovo articolo, mettila in `public/images/blog/cervo.jpg` e nel file `posts.js` scrivi:
`image: "/images/blog/cervo.jpg"`