<script>
  import { base } from "$app/paths";
  // I tuoi anni scolastici
  const navItems = ["2023-2024", "2024-2025", "2025-2026"];
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Noto+Sans+JP:wght@100;300;800&display=swap"
  rel="stylesheet"
/>

<div class="layout">
  <header class="black-header">
    <div class="header-content">
      
      <div class="brand-side">
        <div class="logo-box-mini">OWE</div>
        <div class="brand-text-stack">
          <h3 class="evolution-stage-mini">ACADEMIC EVOLUTION</h3>
          <p class="details-mini">3RD GRADE TO 5TH GRADE (SENIOR YEAR)</p>
        </div>
      </div>

      <div class="center-branding">
        <div class="line"></div>
        <h2 class="main-name">OKORO WISDOM</h2>
        <div class="line"></div>
      </div>

      <nav class="year-nav">
        <ul>
          {#each navItems as item}
            <li>
              <a href={`${base}/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

    </div>
  </header>

  <main class="hero">
    <section class="hero-content">
      <p class="hero-tag">PORTFOLIO PROJECT</p>
      <h1>EDUCAZIONE CIVICA</h1>
      <p class="hero-description">
        Questo sito rappresenta il mio percorso scolastico dalla terza alla
        quinta informatica. Ho raccolto progetti, competenze e lavori realizzati
        durante gli anni, mostrando la mia crescita personale e professionale.
      </p>
    </section>

    <section class="hero-image">
      <img src={`${base}/basket.png`} alt="Foto personale basket" />
    </section>

    <div class="social-sidebar">
      <a href="https://github.com/TheDarkVenom" target="_blank" rel="noreferrer">
        <img src={`${base}/github.svg`} alt="Github" />
      </a>
      <a href="https://www.instagram.com/wizyy_07/" target="_blank" rel="noreferrer">
        <img src={`${base}/instagram.svg`} alt="Instagram" />
      </a>
      <a href="https://tiktok.com/@wizyy_07" target="_blank" rel="noreferrer">
        <img src={`${base}/tiktok.svg`} alt="TikTok" />
      </a>
    </div>
  </main>
</div>

<style>
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #000;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  .layout {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* --- HEADER NERO ELEGANTE --- */
  .black-header {
    height: 100px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 50px;
    border-bottom: 1px solid #222;
    z-index: 10;
    box-sizing: border-box;
  }

  .header-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr; /* Bilanciamento per centrare il nome */
    align-items: center;
  }

  /* Sinistra: Logo OWE e Testi allineati */
  .brand-side {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .logo-box-mini {
    width: 65px; /* Ingrandito */
    height: 55px; /* Altezza allineata alle due righe di testo */
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: 1px;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .brand-text-stack {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .evolution-stage-mini {
    color: white;
    font-size: 1.4rem;
    letter-spacing: 3px;
    margin: 0;
    line-height: 1;
    font-weight: 400;
    white-space: nowrap;
  }

  .details-mini {
    color: white;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 0.6rem;
    text-transform: uppercase;
    opacity: 0.7;
    margin: 4px 0 0;
    font-weight: bold;
    letter-spacing: 1px;
  }

  /* Centro: Okoro Wisdom stile Rossi */
  .center-branding {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .main-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    margin: 0;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: white;
    white-space: nowrap;
  }

  .line {
    width: 100px;
    height: 1px;
    background: white;
    opacity: 0.5;
  }

  /* Destra: Bottoni Anni */
  .year-nav ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    gap: 12px;
    margin: 0;
    padding: 0;
  }

  .year-nav a {
    text-decoration: none;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 10px 16px;
    border: 1px solid #444;
    border-radius: 25px;
    transition: 0.3s ease;
    background: transparent;
  }

  .year-nav a:hover {
    background: white;
    color: black;
    transform: translateY(-2px);
  }

  /* --- HERO SECTION --- */
  .hero {
    flex: 1;
    background: url('/background1.png') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 90px;
    position: relative;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    color: white;
    text-shadow: 0 2px 15px rgba(0,0,0,0.7);
  }

  .hero-tag {
    color: #00ffd5;
    letter-spacing: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .hero-content h1 {
    font-size: 4.5rem;
    margin: 0 0 20px;
    line-height: 1.1;
    font-weight: 800;
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: white;
    max-width: 500px;  
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.83);
  }

  .hero-image img {
    height: 75vh;
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  }

  /* Sidebar Social */
  .social-sidebar {
    position: fixed;
    right: 0; 
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    gap: 15px;
    border-radius: 10px 0 0 10px;
  }

  .social-sidebar img {
    width: 22px;
    filter: invert(1);
  }
</style>