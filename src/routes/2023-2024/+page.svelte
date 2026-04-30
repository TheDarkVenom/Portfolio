<script>
  import { base } from "$app/paths";

  let heroOverlay;

  const navLinks = [
    "HOME",
    "ITALIANO",
    "TELECOMUNICAZIONI",
    "INFORMATICA",
  ];

  function scrollToSection(link) {
    if (link === "HOME") {
      window.location.href = `${base}/`;
      return;
    }

    const id = link.toLowerCase().replace(/ /g, "-");
    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  const sections = [
    {
      id: "italiano",
      title: "ITALIANO",
      image: `${base}/lamattanza.jpg`,
      topic: "LA MATTANZA",
      text1:
        "Il libro denuncia il silenzio, la paura e le complicità che hanno favorito la mafia, mostrando una realtà storica dura e concreta.",
      text2:
        "È una riflessione sulla violenza mafiosa e sull’importanza di ricordare figure come Falcone e Borsellino.",
    },
    {
      id: "telecomunicazioni",
      title: "TELECOMUNICAZIONI",
      image: `${base}/AI.png`,
      topic: "INTELLIGENZA ARTIFICIALE",
      text1:
        "Realizzazione, in collaborazione con due compagni di classe, di un progetto scolastico multimediale sull’Intelligenza Artificiale sviluppato durante il terzo anno come attività pratica per approfondire competenze informatiche, comunicative e organizzative. Il lavoro ha previsto ricerca, analisi e sintesi di contenuti relativi a machine learning, reti neurali, big data, riconoscimento di immagini, vantaggi, svantaggi e implicazioni etiche dell’AI, con successiva progettazione e creazione di una presentazione strutturata ed efficace. Durante il progetto ho contribuito allo sviluppo dei contenuti, alla progettazione grafica e all’esposizione, consolidando capacità di lavoro di squadra, problem solving, public speaking, organizzazione delle informazioni e utilizzo di strumenti digitali per la comunicazione tecnica.",
    },
    {
      id: "informatica",
      title: "INFORMATICA",
      image: `${base}/codice-fiscale.png`,
      topic: "CODICE FISCALE",
      text1:
        "Sviluppo di un programma per la generazione automatica del Codice Fiscale italiano realizzato durante il percorso scolastico come esercitazione pratica delle competenze informatiche. Il progetto ha previsto l’analisi delle regole ufficiali di costruzione del codice fiscale, l’elaborazione di dati anagrafici e l’implementazione della logica algoritmica necessaria per produrre un risultato corretto.",
    },
  ];
</script>

<header class="header">
  <div class="top-bar">
    <span class="lang">IT</span>
    <h1 class="logo">2023 - 2024</h1>
  </div>

  <nav class="nav-links">
  {#each navLinks as link}
    <button on:click={() => scrollToSection(link)}>
      {link}
    </button>
  {/each}
</nav>
</header>

<main>
  <section
    class="hero"
    style="background-image: url('{base}/front-scuola.jpeg');"
  >
    <div class="hero-overlay" bind:this={heroOverlay}>
      {#each sections as section}
        <section id={section.id} class="subject-section">
          <article class="subject-card image-card">
            <h2>{section.title}</h2>

            <img
              class="subject-img"
              src={section.image}
              alt={section.topic}
            />
          </article>

          <article class="subject-card text-card">
            <h2>{section.topic}</h2>

            <p>{section.text1}</p>

            {#if section.text2}
              <p>{section.text2}</p>
            {/if}
          </article>
        </section>
      {/each}
    </div>
  </section>
</main>

<style>
  :global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #000;
  color: white;
}

/* HEADER */
.header {
  background: white;
  padding-top: 15px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.top-bar {
  height: 55px;
  padding: 0 45px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lang,
.logo,
.nav-links button {
  color: black;
}

.nav-links button {
  background: none;
  border: none;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-decoration: none;
  white-space: nowrap;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-links button:hover {
  border-bottom: 1px solid black;
  opacity: 0.7;
}
.lang {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.35em;
}

.icons {
  display: flex;
  gap: 18px;
  font-size: 17px;
  cursor: pointer;
  align-items: center;
}

/* NAV */
.nav-links {
  display: flex;
  justify-content: center;
  gap: 28px;
  padding: 18px 40px 22px;
  overflow-x: auto;
  scrollbar-width: none;
}

.nav-links::-webkit-scrollbar {
  display: none;
}

.nav-links a {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-decoration: none;
  white-space: nowrap;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

/* invece di mandare solo al titolo, centra tutta la fascia */
.nav-links a:hover {
  border-bottom: 1px solid black;
  opacity: 0.7;
}

/* HERO */
.hero {
  width: 100%;
  height: calc(85vh - 15px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero-overlay {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y proximity;
  
  scrollbar-width: none;
}

.hero-overlay::-webkit-scrollbar {
  display: none;
}
/* SEZIONI */
.subject-section {
  display: flex;
  gap: 55px;
  padding: 90px 100px;
  min-height: 85vh;
  align-items: center;
  scroll-snap-align: start;
  
  /* QUESTO fa arrivare il click alla fascia intera */
  scroll-margin-top: 120px;
}

/* CARD BASE */
.subject-card {
  padding: 26px;
  box-sizing: border-box;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.subject-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.28);
}

/* IMMAGINE */
.image-card {
  width: 58%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subject-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  display: block;
}

/* TESTO */
.text-card {
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subject-card h2 {
  margin: 0 0 22px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1.3;
}

.subject-card p {
  margin: 0 0 18px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.9);
}

/* CTA */
.cta-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 45px;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  transition: 0.3s ease;
}

.btn:hover {
  background: white;
  color: black;
}

/* MOBILE */
@media (max-width: 900px) {
  .top-bar  {
    padding: 0 20px;
  }

  .logo {
    font-size: 18px;
    letter-spacing: 0.25em;
  }

  .nav-links {
    gap: 16px;
    padding: 16px 20px;
  }

  .subject-section {
    flex-direction: column;
    padding: 70px 30px;
    min-height: auto;
    gap: 35px;
  }

  .image-card,
  .text-card {
    width: 100%;
  }

  .subject-img {
    width: 100%;
    height: auto;
  }

  .subject-card h2 {
    font-size: 18px;
  }

  .subject-card p {
    font-size: 14px;
    line-height: 1.8;
  }
}
</style>