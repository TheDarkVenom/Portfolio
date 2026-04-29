<script>
import { base } from '$app/paths';
  const navLinks = [
    "NOVITÀ", "REGALI", "PENNE DI LUSSO", "RICARICHE E CANCELLERIA", 
    "BORSE", "BAGAGLI DA VIAGGIO", "ACCESSORI", "OROLOGI", "CUFFIE", "FRAGRANZE", "SCOPRI"
  ];
</script>

<header class="header">
  <div class="top-bar">
    <span class="lang">IT</span>
    <h1 class="logo">MONTBLANC</h1>
    <div class="icons">
      <span class="icon-placeholder">🔍</span> 
      <span class="icon-placeholder">👤</span> 
      <span class="icon-placeholder">🤍</span> 
      <span class="icon-placeholder">🛍️</span>
    </div>
  </div>
  
  <nav class="nav-links">
    {#each navLinks as link}
      <a href="{base}/">{link}</a>
    {/each}
  </nav>
</header>

<section class="hero">
  <img src="URL_TUA_IMMAGINE" alt="Spring Collection" class="hero-img" />
  
  <div class="hero-overlay">
    <div class="hero-content">
      <h2 class="hero-title">SELEZIONE PRIMAVERILE</h2>
      <p class="hero-subtitle">Celebriamo la nuova stagione</p>
      <div class="cta-group">
        <button class="btn">SCOPRI LA COLLEZIONE</button>
        <button class="btn">ESPLORA BORSE</button>
      </div>
    </div>

    <div class="media-controls">
        <button class="control-btn">
            <span>🔇</span>
        </button>
        <button class="control-btn">
            <span>⏸</span>
        </button>
    </div>
  </div>
</section>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

  .nav-links::-webkit-scrollbar { display: none; } /* Nasconde scrollbar su Chrome/Safari */

  .nav-links a {
    text-decoration: none;
    color: black;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    white-space: nowrap;
  }

  .hero {
    position: relative;
    height: 85vh;
    width: 100%;
    background: #000;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    /* Gradiente nero dal basso per leggere bene il testo */
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 30%);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 50px;
  }

  .hero-content {
    color: white;
    max-width: 600px;
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

  .media-controls {
    display: flex;
    gap: 15px;
  }

  .control-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
</style>