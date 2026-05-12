<script>
  import { base } from "$app/paths";

  const navLinks = [
    "HOME",
    "ITALIANO",
    "TELECOMUNICAZIONI",
    "INFORMATICA",
  ];

  function scrollToSection(link) {
    if (link === "HOME") {
      // Reindirizzamento alla pagina principale
      window.location.href = `${base}/`;
      return;
    }

    const id = link.toLowerCase().replace(/ /g, "-");
    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  const sections = [
    {
      id: "italiano",
      title: "ITALIANO",
      image: `${base}/lamattanza.jpg`,
      topic: "LA MATTANZA",
      text1: "Il libro denuncia il silenzio, la paura e le complicità che hanno favorito la mafia, mostrando una realtà storica dura e concreta.",
      text2: "È una riflessione sulla violenza mafiosa e sull’importanza di ricordare figure come Falcone e Borsellino.",
    },
    {
      id: "telecomunicazioni",
      title: "TELECOMUNICAZIONI",
      image: `${base}/AI.png`,
      topic: "INTELLIGENZA ARTIFICIALE",
      text1: "Realizzazione di un progetto scolastico multimediale sull’Intelligenza Artificiale. Il lavoro ha previsto ricerca e analisi di contenuti relativi a machine learning, reti neurali e big data. Ho contribuito allo sviluppo dei contenuti e alla progettazione grafica, consolidando capacità di lavoro di squadra e comunicazione tecnica.",
    },
    {
      id: "informatica",
      title: "INFORMATICA",
      image: `${base}/codice-fiscale.png`,
      topic: "CODICE FISCALE",
      text1: "Sviluppo di un programma per la generazione automatica del Codice Fiscale italiano. Il progetto ha previsto l’analisi delle regole ufficiali di costruzione, l’elaborazione di dati anagrafici e l’implementazione della logica algoritmica necessaria.",
    },
  ];
</script>

<header class="header">
  <div class="top-bar">
    <h1 class="logo">2023 - 2024</h1>
  </div>
  <nav class="nav-links">
    {#each navLinks as link}
      <button type="button" on:click={() => scrollToSection(link)}>
        {link}
      </button>
    {/each}
  </nav>
</header>

<main class="wrapper">
  {#each sections as section, i}
    <section id={section.id} class="subject-section {i % 2 === 0 ? 'bg-white' : 'bg-sea-blue'}">
      <div class="container">
        
        <div class="image-column">
          <div class="image-wrapper">
            <img src={section.image} alt={section.topic} class="profile-img" />
            <div class="topic-tag">{section.topic}</div>
          </div>
        </div>

        <div class="text-column">
          <h2 class="section-title">{section.title}</h2>
          <div class="text-content">
            <p>{section.text1}</p>
            {#if section.text2}
              <p>{section.text2}</p>
            {/if}
          </div>
        </div>
        
      </div>
    </section>
  {/each}
</main>

<style>
  /* Reset Globale per eliminare strisce nere e abilitare lo scroll */
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    background-color: white !important;
    color: #333;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    scroll-behavior: smooth;
  }

  /* Header */
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

  /* Contenitore */
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

  .bg-white { background-color: #ffffff; }
  .bg-sea-blue { background-color: #f2f9fb; }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 40px;
  }

  /* Immagine e Animazione */
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
    border-bottom-left-radius: 150px 50px;
    border-bottom-right-radius: 150px 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    display: block;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
  }

  /* Effetto Rialzo e Ingrandimento al passaggio del mouse */
  .image-wrapper:hover .profile-img {
    transform: scale(1.06) translateY(-12px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.12);
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
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    pointer-events: none;
  }

  /* Testo */
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
    margin-bottom: 15px;
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