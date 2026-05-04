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

  /* HEADER */
  .header {
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .top-bar {
    height: 60px;
    padding: 0 25px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lang {
    color: black;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.18em;
    background: #f0f0f0;
    padding: 8px 14px;
    border-radius: 20px;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    color: black;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 0.35em;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 18px;
    padding: 12px 40px 18px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav-links::-webkit-scrollbar,
  .hero-overlay::-webkit-scrollbar {
    display: none;
  }

  .nav-links button {
    color: black;
    background: #eeeeee;
    border: 1px solid transparent;
    border-radius: 25px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    padding: 10px 18px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .nav-links button:hover {
    background: black;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
  }

  .nav-links button:active {
    transform: scale(0.96);
  }

  /* HERO */
  .hero {
    width: 100%;
    height: calc(100vh - 118px);
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

  /* IMMAGINI */
  .subject-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 14px;
    display: block;
    transition:
      transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      filter 0.3s ease;
  }

  .image-card:hover .subject-img {
    transform: scale(1.03) translateY(-10px);
    filter: brightness(1.1);
  }

  /* MOBILE */
  @media (max-width: 900px) {
    .top-bar {
      height: auto;
      padding: 18px 20px;
      flex-direction: column;
      gap: 12px;
    }

    .logo {
      position: static;
      transform: none;
      font-size: 20px;
      text-align: center;
    }

    .nav-links {
      gap: 10px;
      padding: 10px 15px 15px;
      justify-content: flex-start;
    }

    .nav-links button {
      font-size: 9px;
      padding: 9px 14px;
    }

    .hero {
      height: calc(100vh - 145px);
      background-attachment: scroll;
    }

    .subject-section {
      flex-direction: column;
      padding: 70px 20px;
      gap: 30px;
    }

    .image-card,
    .text-card {
      width: 100%;
    }

    .text-card {
      padding: 25px;
    }

    .subject-card h2 {
      font-size: 18px;
    }

    .subject-card p {
      font-size: 13px;
    }
  }
</style>