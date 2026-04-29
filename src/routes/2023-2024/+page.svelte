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
      <a
        href={link === "HOME"
          ? `${base}/`
          : `${base}/${link.toLowerCase().replace(/ /g, "-")}`}
      >
        {link}
      </a>
    {/each}
  </nav>
</header>
<section
  class="hero"
  style="background-image: url('{base}/front-scuola.jpeg');"
>
  <div class="hero-overlay">
    <div class="hero-content">
      <h2 class="hero-title">5 info</h2>
      <p class="hero-subtitle">Celebriamo la nuova stagione</p>
      <div class="cta-group">
        <button class="btn">SCOPRI LA COLLEZIONE</button>
        <button class="btn">ESPLORA BORSE</button>
      </div>
    </div>

    <div class="mattanza">
      <h2 class="hero-title">Italiano</h2>
      <p class="hero-subtitle">
        Dal silenzio sulla mafia al silenzio della mafia
      </p>
      <div class="cta-group">
        <img src="{base}/lamattanza.jpg" alt="La Mattanza" />
      </div>
      <div>
        <h2 class="hero-title">La Mattanza</h2>
        <p class="hero-subtitle">
          Il libro denuncia il silenzio, la paura e le complicità che hanno
          favorito la mafia, ma celebra anche il coraggio di chi ha sacrificato
          la propria vita per la giustizia. La Mattanza è quindi una riflessione
          sulla violenza mafiosa e sull’importanza di non dimenticare figure
          come Falcone e Borsellino.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  :global(body) {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .header {
    background: white;
    padding: 15px 0 0 0;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: relative;
    height: 50px;
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
    letter-spacing: 0.4em;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
  }

  .icons {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .icon-placeholder {
    cursor: pointer;
    font-size: 18px;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 40px;
    overflow-x: auto;
    scrollbar-width: none; /* Nasconde scrollbar su Firefox */
  }

  .nav-links::-webkit-scrollbar {
    display: none;
  } /* Nasconde scrollbar su Chrome/Safari */

  .nav-links a {
    text-decoration: none;
    color: black;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    white-space: nowrap;
  }

  .hero {
    height: calc(85vh - 15px);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
  }

  .hero-overlay {
    height: 100%;
    width: 100%;

    overflow-y: scroll;
    overflow-x: hidden;

    /* Gradiente nero dal basso per leggere bene il testo */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 30%);
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
  }

  .hero-content {
    color: white;
    max-width: 600px;
    padding: 200px 0px  0px 100px;
  }

  .mattanza {
    color: white;
    padding: 200px 0px  0px 100px;
  }

  .hero-title {
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 0.15em;
    margin-bottom: 8px;
  }

  .hero-subtitle {
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin-bottom: 30px;
    opacity: 0.9;
  }

  .cta-group {
    display: flex;
    gap: 12px;
  }

  .btn {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 14px 45px;
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
</style>
