<script>
  import { page } from "$app/state";
  import { base } from "$app/paths";

  const articoli = {
    "1": {
      titolo: "Articolo 1",
      testo: `Democrazia vuol dire che il potere di prendere decisioni spetta al popolo, che lo esercita affidando tali decisioni ad alcune persone scelte con libere elezioni, all’interno del Parlamento, dei consigli regionali, provinciali e comunali e del Parlamento europeo.

Si parla di democrazia indiretta.`,
      immagine: `${base}/art1.png`,
    },

    "2": {
      titolo: "Articolo 2",
      testo: `L’articolo 2 riconosce i fondamentali diritti umani degli individui, definiti “inviolabili”, diritti che, durante il periodo fascista, erano stati fortemente limitati.

Si tratta di alcuni diritti considerati talmente importanti che non possono essere violati da nessuno, e che devono essere riconosciuti a chiunque, non solo ai cittadini italiani, ma a tutti coloro che si trovano sul territorio nazionale.`,
      immagine: `${base}/costituzione/art2.png`,
    },

    "3": {
      titolo: "Articolo 3",
      testo: `Con il principio di uguaglianza si afferma che tutti i cittadini sono uguali davanti alla legge, senza differenze di alcun tipo, e che lo Stato deve fare tutto il possibile per eliminare le eventuali disuguaglianze esistenti.

Il principio di uguaglianza, che può sembrare scontato per molti, è in realtà uno dei valori fondamentali delle società moderne e sulla base di esso si vietano tutte le forme di discriminazione tra le persone, per cercare di realizzare un benessere generale diffuso.`,
    },

    "4": {
      titolo: "Articolo 4",
      testo: `La Costituzione indica, tra i principi fondamentali, quello della tutela del lavoro, di cui si trova riferimento sia nell’articolo 1 che nell’articolo 4.

Mentre nell’articolo 1 si evidenzia l’importanza del lavoro posto come fondamento della Repubblica, nell’articolo 4 si evidenzia come il lavoro sia da intendere come diritto per tutti i cittadini di poter esercitare una attività lavorativa, ma anche come dovere, nel senso che ogni individuo è tenuto a lavorare, secondo le proprie possibilità e la propria scelta, per contribuire al progresso della società.`,
   immagine: `${base}/art1.png`,
    },

    "5-9": {
      titolo: "Articoli 5-9",
      testo: `Tra i principali fondamentali della Costituzione ritroviamo un’idea costante di tutela del pluralismo, ovvero che idee, opinioni, interessi e organizzazioni diverse abbiano tutte pari dignità e valore di fronte alla legge.`,
   
    immagine: `${base}/art1.png`, },

    "10": {
      titolo: "Articolo 10",
      testo: `L’Italia si riconosce come soggetto attivo e aperto in un contesto internazionale di cui accetta le regole, garantendo diritto di asilo agli stranieri a cui sia impedito l’esercizio dei propri diritti nei paesi di origine.`,
    immagine: `${base}/art1.png`,
   },

    "11": {
      titolo: "Articolo 11",
      testo: `L’Italia ripudia la guerra come strumento di risoluzione dei conflitti internazionali (la guerra resta consentita come strumento di difesa, per proteggere il popolo e il suo territorio) e promuove organizzazioni internazionali che operano per assicurare la pace e la giustizia tra le nazioni.`,
    immagine: `${base}/art1.png`,
   },

    "12": {
      titolo: "Articolo 12",
      testo: `Si stabilisce la tipologia di bandiera che contraddistingue lo Stato italiano, caratterizzata dal tricolore verde, bianco e rosso a bande verticali.`,
     immagine: `${base}/art1.png`,
    },
  };

  const listaId = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  let articolo = $derived(articoli[page.params.id]);
</script>

{#if articolo}
  <div class="article-container">
    <a href="/2025-2026" class="back-btn-top"> ← Torna alla Home </a>

    <div class="content-layout">
      <div class="image-col">
        <img src={articolo.immagine} alt={articolo.titolo} class="art-img" />
      </div>

      <div class="text-col">
        <h1>{articolo.titolo}</h1>
        <p>{articolo.testo}</p>
      </div>
    </div>

    <div class="navigation-footer">
      <h3>Esplora altri articoli</h3>
      <div class="mini-grid">
        {#each listaId as id}
          <a
            href="/2025-2026/costituzione/{id}"
            class="mini-btn {id === page.params.id ? 'active' : ''}"
          >
            {id}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .article-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .back-btn-top {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: white;
    background-color: #4a3728;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }

  .back-btn-top:hover {
    background-color: #8b5e3c;
    transform: translateX(-5px);
  }

  .content-layout {
    display: flex;
    gap: 50px;
    align-items: center;
    margin-bottom: 60px;
  }

  .image-col {
    flex: 1;
  }

  .art-img {
    width: 100%;
    max-height: 450px;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .text-col {
    flex: 1.5;
  }

  h1 {
    font-size: 48px;
    color: #4a3728;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    color: #333;
  }

  .navigation-footer {
    border-top: 2px solid #eee;
    padding-top: 40px;
  }

  .mini-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  .mini-btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
    color: #4a3728;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s;
  }

  .mini-btn:hover,
  .mini-btn.active {
    background: #4a3728;
    color: white;
  }

  @media (max-width: 768px) {
    .content-layout {
      flex-direction: column;
      gap: 30px;
    }

    h1 {
      font-size: 36px;
    }
  }
</style>
