<script>
  import { base } from "$app/paths";

  const navLinks = [
    "HOME",
    "ITALIANO",
    "INGLESE",
    "TELECOMUNICAZIONI",
    "STORIA",
    "INFORMATICA",
  ];

  function getSectionLink(link) {
    if (link === "HOME") return `${base}/`;
    if (link === "ITALIANO") return "#italiano";
    return `${base}/${link.toLowerCase().replace(/ /g, "-")}`;
  }
</script>

<header class="header">
  <div class="top-bar">
    <span class="lang">IT</span>

    <h1 class="logo">2023 - 2024</h1>

    <div class="icons">
      <span class="icon-placeholder">🔍</span>
      <span class="icon-placeholder">👤</span>
      <span class="icon-placeholder">🤍</span>
      <span class="icon-placeholder">🛍️</span>
    </div>
  </div>

  <nav class="nav-links">
    {#each navLinks as link}
      <a href={getSectionLink(link)}>
        {link}
      </a>
    {/each}
  </nav>
</header>

<main>
  <section
    class="hero"
    style="background-image: url('{base}/front-scuola.jpeg');"
  >
    <div class="hero-overlay">
      <section class="hero-content">
        <h2 class="hero-title">5 INFO</h2>
        <p class="hero-subtitle">Celebriamo la nuova stagione</p>

        <div class="cta-group">
          <button class="btn">SCOPRI LA COLLEZIONE</button>
          <button class="btn">ESPLORA BORSE</button>
        </div>
      </section>

      <!-- SEZIONE ITALIANO -->
      <section id="italiano" class="mattanza-section">
        <article class="mattanza-card mattanza-image-box">
          <h2 class="hero-title section-heading">ITALIANO</h2>

          <p class="hero-subtitle">
            Dal silenzio sulla mafia al silenzio della mafia
          </p>

          <img
            class="mattanza-img"
            src="{base}/lamattanza.jpg"
            alt="Copertina del libro La Mattanza"
          />
        </article>

        <article class="mattanza-card mattanza-text-box">
          <h2 class="hero-title section-heading">LA MATTANZA</h2>

          <p class="hero-subtitle">
            Il libro denuncia il silenzio, la paura e le complicità che hanno
            favorito la mafia, ma celebra anche il coraggio di chi ha
            sacrificato la propria vita per la giustizia.
          </p>

          <p class="hero-subtitle">
            <strong>La Mattanza</strong> è una riflessione sulla violenza
            mafiosa e sull’importanza di non dimenticare figure come Falcone e
            Borsellino.
          </p>
        </article>
      </section>
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
    -webkit-font-smoothing: antialiased;
    background-color: #000;
  }

  .header {
    background: white;
    padding-top: 15px;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .top-bar {
    position: relative;
    height: 50px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lang {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.4em;
  }

  .icons {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .icon-placeholder {
    font-size: 18px;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 40px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav-links::-webkit-scrollbar {
    display: none;
  }

  .nav-links a {
    color: black;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 0.3s ease;
  }

  .nav-links a:hover {
    opacity: 0.6;
  }

  .hero {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .hero-overlay {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.85)
    );
  }

  .hero-content {
    max-width: 600px;
    padding: 180px 0 140px 100px;
    color: white;
  }

  .hero-title {
    margin: 0 0 10px;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .section-heading {
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .hero-subtitle {
    margin: 0 0 25px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.8;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.9);
  }

  .cta-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .btn {
    padding: 14px 45px;
    background: transparent;
    border: 1px solid white;
    color: white;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background: white;
    color: black;
  }

  .mattanza-section {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 60px;
    padding: 120px 100px;
    color: white;
    scroll-margin-top: 130px;
  }

  .mattanza-card {
    width: 50%;
    padding: 35px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(8px);
    border-radius: 18px;
    display: flex;
    flex-direction: column;
  }

  .mattanza-img {
    width: 100%;
    max-width: 320px;
    margin-top: 15px;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 900px) {
    .hero-content {
      padding: 120px 30px 80px;
    }

    .mattanza-section {
      flex-direction: column;
      padding: 60px 30px 100px;
    }

    .mattanza-card {
      width: 100%;
      box-sizing: border-box;
    }

    .logo {
      font-size: 18px;
    }
  }
</style>