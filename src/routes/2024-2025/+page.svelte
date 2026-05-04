<script>
  import { base } from "$app/paths";

  let heroOverlay;

  const navLinks = [
    "HOME",
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
            <!-- L'animazione è gestita via CSS sulla classe .subject-img -->
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

  /* EFFETTO ANIMAZIONE IMMAGINI */
  .image-card:hover .subject-img {
    transform: scale(1.03) translateY(-10px); /* Si ingrandisce e si alza */
    filter: brightness(1.1);
  }

  .subject-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
    display: block;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease;
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
    height: calc(100vh - 110px);
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
    scrollbar-width: none;
  }

  /* SEZIONI */
  .subject-section {
    display: flex;
    gap: 55px;
    padding: 90px 100px;
    min-height: 85vh;
    align-items: center;
    scroll-margin-top: 120px;
  }

  .subject-card {
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
    -webkit-backdrop-filter: blur(8px);
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

  /* MOBILE */
  @media (max-width: 900px) {
    .subject-section {
      flex-direction: column;
      padding: 70px 20px;
      gap: 30px;
    }

    .image-card,
    .text-card {
      width: 100%;
    }
  }
</style>