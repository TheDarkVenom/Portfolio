<script>
  import { base } from "$app/paths";

  let heroOverlay;

  const navLinks = [
    "HOME",
    "STORIA",
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
      id: "storia",
      title: "STORIA",
      image: `${base}/lamattanza.jpg`,
      topic: "LA MATTANZA",
      text1:
        "Il libro denuncia il silenzio, la paura e le complicità che hanno favorito la mafia, mostrando una realtà storica dura e concreta.",
      text2:
        "È una riflessione sulla violenza mafiosa e sull’importanza di ricordare figure come Falcone e Borsellino.",
    },
    {
      id: "informatica",
      title: "INFORMATICA",
      image: `${base}/quiz-patente.png`,
      // Link rimosso qui
      topic: "Quiz Patente",
      text1: `Durante il quarto anno di scuola superiore ho sviluppato un progetto in Python dedicato alla simulazione di un quiz per la patente.

Il programma è stato realizzato con Tkinter, una libreria utilizzata per creare interfacce grafiche desktop. L’applicazione presenta domande a risposta Vero/Falso, immagini di supporto, un timer e un sistema per il calcolo degli errori finali.

Attraverso questo progetto ho potuto migliorare le mie competenze nella programmazione grafica, nella gestione degli eventi, nell’organizzazione del codice e nell’utilizzo di librerie esterne come Pillow per la gestione delle immagini. Il quiz è stato progettato per essere intuitivo e interattivo, offrendo un’esperienza simile a quella di un vero esame di guida, con l’obiettivo di aiutare gli utenti a prepararsi in modo efficace.`,
    },
  ];
</script>

<header class="header">
  <div class="top-bar">
    <span class="lang">IT</span>
    <h1 class="logo">2024 - 2025</h1>
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
            <!-- Immagine pulita senza tag <a> -->
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

  /* Animazione per tutte le immagini */
  .image-card:hover .subject-img {
    transform: scale(1.03) translateY(-10px); /* Si ingrandisce e si alza */
    filter: brightness(1.1);
  }

  .subject-img {
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
    display: block;
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

  .lang, .logo, .nav-links button {
    color: black;
  }

  .nav-links button {
    background: none;
    border: none;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .nav-links button:hover {
    border-bottom: 1px solid black;
    opacity: 0.7;
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

  /* NAV */
  .nav-links {
    display: flex;
    justify-content: center;
    gap: 28px;
    padding: 18px 40px 22px;
    overflow-x: auto;
    scrollbar-width: none;
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

  /* SEZIONI */
  .subject-section {
    display: flex;
    gap: 55px;
    padding: 90px 100px;
    min-height: 85vh;
    align-items: center;
    scroll-snap-align: start;
    scroll-margin-top: 120px;
  }

  .subject-card {
    padding: 26px;
    box-sizing: border-box;
  }

  .image-card {
    width: 58%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-card {
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.55);
    padding: 35px;
    border-radius: 18px;
    backdrop-filter: blur(8px);
  }

  .subject-card h2 {
    margin: 0 0 22px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .subject-card p {
    margin: 0 0 18px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 900px) {
    .subject-section {
      flex-direction: column;
      padding: 70px 30px;
      gap: 35px;
    }
    .image-card, .text-card {
      width: 100%;
    }
  }
</style>