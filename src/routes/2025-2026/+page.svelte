<script>
  import { base } from "$app/paths";


  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "FASCISMO E NAZISMO", id: "fascismo-e-nazismo" },
    { label: "LA PRIGIONE DOMESTICA", id: "la-prigione-domestica" },
    { label: "PROGETTO 1522", id: "progetto-1522" },
    { label: "IL MOVIMENTO DEL 68", id: "il-movimento-del-68" },
    { label: "LA COSTITUZIONE", id: "la-costituzione" },
    { label: "LAGER", id: "il-lager" },
    { label: "OPERAZIONE T4/LEBENSBORN", id: "operazione" },
  ];

  function scrollToSection(id) {
    if (id === "home") {
      window.location.href = `${base}/`;
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  const listaId = ["1", "2", "3", "4", "5-9", "10", "11", "12"];
  const sections = [
    {
      id: "fascismo-e-nazismo",
      title: "STORIA",
      image: `${base}/storia.png`,
      topic: "FASCISMO E NAZISMO",
      text1:
        "Il libro denuncia il silenzio, la paura e le complicità che hanno favorito la mafia, mostrando una realtà storica dura e concreta. Nel corso del 2026 in storia abbiamo studiato il fascismo e il nazismo, analizzando le caratteristiche dei regimi totalitari, la propaganda, la limitazione delle libertà e le persecuzioni avvenute durante quel periodo storico.",
    },

    {
      id: "la-prigione-domestica",
      title: "ITALIANO",
      image: `${base}/help.png`,
      topic: "LA PRIGIONE DOMESTICA",
      text1:
        "Percorso dedicato all’analisi della violenza domestica e di genere attraverso dati, aspetti psicologici, conseguenze sociali e riferimenti al diritto e alla tutela delle vittime.",
    },

    {
      id: "progetto-1522",
      title: "INFORMATICA",
      image: `${base}/1522.png`,
      topic: "PROGETTO 1522",
      text1:
        "Ho realizzato il progetto 1522 in quinta informatica utilizzando Python e Django. Si tratta di una piattaforma web pensata per fornire informazioni e supporto sul tema della violenza. Il sito permette all’utente di consultare diverse sezioni, inviare richieste di aiuto e accedere a contenuti utili.",
    },

    {
      id: "la-costituzione",
      title: "LA COSTITUZIONE",
      image: `${base}/costituzione.png`,
      topic: "LA COSTITUZIONE",
      text1:
        "La Costituzione italiana è composta da 139 articoli e 18 disposizioni transitorie e finali. I primi dodici articoli contengono i principi fondamentali, cioè i valori più importanti a cui si ispira tutta la struttura della Costituzione e gli obiettivi a cui lo Stato deve tendere.",
    },

    {
      id: "il-movimento-del-68",
      title: "IL MOVIMENTO DEL 68",
      image: `${base}/68.png`,
      topic: "IL MOVIMENTO DEL 68",
      text1:
        "Il movimento del ’68 fu un vasto movimento di contestazione contro il capitalismo e la società borghese. Coinvolse studenti, operai nelle fabbriche e anche detenuti nelle carceri, con richieste di maggiore libertà, uguaglianza e diritti sociali.",
    },

    {
      id: "il-lager",
      title: "LAGER",
      image: `${base}/LAGER.png`,
      topic: "LAGER",
      text1:
        "Il termine 'Lager' significa letteralmente 'campo' o 'deposito' (magazzino). La scelta di questa parola non è casuale: il sistema fu progettato per “stoccare” esseri umani degradati a semplici pezzi da lavoro, privandoli di ogni dignità e di ogni status umano.",
    },

    {
      id: "operazione",
      title: "OPERAZIONE T4/LEBENSBORN",
      image: `${base}/operazione.png`,
      topic: "OPERAZIONE T4/LEBENSBORN",
      text1:
        "L’Operazione T4 e il progetto Lebensborn furono due programmi sviluppati dal regime nazista basati sull’ideologia della “purezza della razza”. L’Operazione T4 prevedeva l’eliminazione delle persone considerate malate o disabili, ritenute “inutili” per la società, mentre il progetto Lebensborn aveva l’obiettivo di favorire la nascita di bambini con caratteristiche considerate “ariane”. Entrambi mostrano come il nazismo controllasse la vita delle persone attraverso discriminazione, violenza e selezione umana.",
    },
  ];
</script>

<header class="header">
  <div class="top-bar">
    <h1 class="logo">2025 - 2026</h1>
  </div>

  <nav class="nav-links">
    {#each navLinks as link}
      <button type="button" on:click={() => scrollToSection(link.id)}>
        {link.label}
      </button>
    {/each}
  </nav>
</header>

<main class="wrapper">
  {#each sections as section, i}
    <section
      id={section.id}
      class="subject-section {i % 2 === 0 ? 'bg-white' : 'bg-sea-blue'}"
    >
      <div class="container">
        <div class="image-column">
          <div class="image-wrapper">
            <img src={section.image} alt={section.topic} class="profile-img" />

            <div class="topic-tag">
              {section.topic}
            </div>
          </div>
        </div>

        <div class="text-column">
          <h2 class="section-title">{section.title}</h2>

          <div class="text-content">
            <p>{section.text1}</p>

            {#if section.id === "la-costituzione"}
              <div class="articles-grid">
                {#each listaId as id}
                  <a
                    class="article-btn"
                    href="{base}/2025-2026/costituzione/{id}"
                  >
                    {id}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </section>
  {/each}
</main>

<style>
  /* Reset globale per pulizia totale */
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: white !important;
    color: #333;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  /* Header fisso */
  .header {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #eee;
    padding: 15px 0;
  }
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 35px;
  }

  .article-btn {
    background: #4a3728;
    color: white;
    text-decoration: none;
    padding: 14px;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .article-btn:hover {
    background: #6b4e3b;
    transform: translateY(-4px);
  }

  @media (max-width: 700px) {
    .articles-grid {
      grid-template-columns: 1fr;
    }
  }
  .logo {
    text-align: center;
    color: #4a3728;
    font-size: 20px;
    letter-spacing: 3px;
    margin: 0 0 10px 0;
    font-weight: 800;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .nav-links button {
    background: none;
    border: none;
    font-weight: 700;
    font-size: 11px;
    color: #888;
    cursor: pointer;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  .nav-links button:hover {
    color: #4a3728;
  }

  /* Main content */
  .wrapper {
    margin-top: 100px;
    background-color: white;
  }

  .subject-section {
    padding: 100px 0;
    min-height: 75vh;
    display: flex;
    align-items: center;
  }

  .bg-white {
    background-color: #ffffff;
  }
  .bg-sea-blue {
    background-color: #f2f9fb;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 40px;
  }

  .image-column {
    flex: 1;
  }

  .image-wrapper {
    position: relative;
    z-index: 1;
  }

  .profile-img {
    width: 100%;
    max-width: 420px;
    /* Forma ritagliata come da foto */
    border-bottom-left-radius: 150px 50px;
    border-bottom-right-radius: 150px 50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    display: block;
    /* Animazione fluida */
    transition:
      transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      box-shadow 0.4s ease;
  }

  /* EFFETTO ZOOM E SOLLEVAMENTO */
  .image-wrapper:hover .profile-img {
    transform: scale(1.06) translateY(-12px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
  }

  .topic-tag {
    position: absolute;
    bottom: 20px;
    right: -10px;
    background: #4a3728;
    color: white;
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    pointer-events: none; /* Non blocca l'hover dell'immagine */
  }

  .text-column {
    flex: 1.2;
  }

  .section-title {
    font-size: 45px;
    color: #4a3728;
    margin-bottom: 25px;
    font-weight: 800;
  }

  .text-content p {
    font-size: 18px;
    line-height: 1.7;
    color: #444;
  }

  /* Mobile */
  @media (max-width: 850px) {
    .container {
      flex-direction: column;
      text-align: center;
      padding: 60px 20px;
    }
    .topic-tag {
      position: relative;
      right: 0;
      margin-top: 20px;
      display: inline-block;
    }
    .section-title {
      font-size: 32px;
    }
  }
</style>
