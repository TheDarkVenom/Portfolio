<script>
import { currentLang, t } from '$lib/index.js';
import { base } from '$app/paths';

  function cambiaLingua() {
    currentLang.update(l => {
      if (l === 'it') return 'en';
      if (l === 'en') return 'jp';
      return 'it';
    });
  }
  const navItems = [
    "2023-2024",
    "2024-2025",
    "2025-2026",
    "Collections",
    "About OWE",
  ];

  let selectedLang = "Language";
  // svelte-ignore non_reactive_update
  let activeFontSize = "M";
</script>
<link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Noto+Sans+JP:wght@100;300&display=swap" rel="stylesheet">
<div class="layout">
  <div class="utility-bar">
    <div class="font-controls">
      <span>Font Size:</span>
      {#each ["L", "M", "S"] as size}
       
        <!-- svelte-ignore event_directive_deprecated -->
        <button
          class:active={activeFontSize === size}
          on:click={() => (activeFontSize = size)}
        >
          {size}
        </button>
      {/each}
  </div>
      <button on:click={cambiaLingua} class="lang-btn">
            🌐 {$currentLang.toUpperCase()}
      </button>
        <button>{$t.home}</button>
        <button>{$t.settings}</button>
</div>


  <header>
    <div class="logo-container">
      <div class="logo-box">OWE</div>
      <div class="brand-text">
        <h3 class="evolution-stage">ACADEMIC EVOLUTION</h3>
        <p class="details">3rd Grade to 5th Grade (Senior Year)</p>
      </div>
    </div>

    <nav>
      <ul>
        {#each navItems as item}

          <li><a href="/{item.toLowerCase().replace(/ /g, '-')}">{item}</a></li>

        {/each}
        <li class="search-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </li>
      </ul>
    </nav>
  </header>

  <main class="hero">
    <div class="scroll-badge">
      <div class="mouse"></div>
      <span>SCROLL</span>
    </div>

    <div class="social-sidebar">
      <div class="social-icon">
        <a
          href="https://github.com/IL_TUO_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          <img src="{base}/github.svg" alt="Github" />
        </a>
      </div>

      <div class="social-icon">
        <a
          href="https://www.instagram.com/wizyy_07/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="{base}/instagram.svg" alt="Instagram" />
        </a>
      </div>

      <div class="social-icon">
        <a
          href="https://tiktok.com/@wizyy_07"
          target="_blank"
          rel="noreferrer"
        >
          <img src="{base}/tiktok.svg" alt="TikTok" />
        </a>
      </div>

    </div>
  </main>
</div>

<style>
.search-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
.details {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 0.8rem;
    text-transform: uppercase;
    opacity: 0.7;
  }
.evolution-stage {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 5px 0;
    letter-spacing: 4px;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Arial, sans-serif;
    overflow-x: hidden;
  }

  .utility-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 50px;
    gap: 20px;
    font-size: 12px;
    background: white;
  }

  .font-controls button {
    background: #222;
    color: white;
    border: none;
    margin-left: 5px;
    padding: 2px 8px;
    cursor: pointer;
  }

  .font-controls button.active {
    background: #666;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    border-bottom: 1px solid #eee;
    background: white;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .logo-box {
    border: 2px solid black;
    padding: 5px;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .brand-text h1 {
    font-size: 1.1rem;
    margin: 0;
    letter-spacing: 2px;
  }

  .brand-text p {
    font-size: 0.65rem;
    margin: 0;
    font-weight: bold;
  }
  nav a:hover {
    color: #000; /* Feedback al passaggio del mouse */
  }
  nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
    align-items: center;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.2s;
  }

  .hero {
    height: 80vh;
    background:
      linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("https://www.tnm.jp/modules/rblogs/index.php?controller=attachment&attachment_id=1234")
        no-repeat center/cover;
    position: relative;
  }

  .social-sidebar {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7); /* Sfondo scuro come TNM */
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 12px;
    border-radius: 4px 0 0 4px; /* Arrotonda solo i bordi interni */
    z-index: 100;
  }

  .social-icon img {
    width: 24px;
    height: 24px;
    display: block;
    /* Se le tue icone sono nere, questo le rende bianche per il contrasto */
    filter: invert(1);
    transition: opacity 0.2s ease;
    cursor: pointer;
  }

  .social-icon img:hover {
    opacity: 0.7;
  }

  .scroll-badge {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-size: 10px;
  }
</style>
