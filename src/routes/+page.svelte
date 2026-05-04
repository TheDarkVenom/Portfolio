<script>
  import { base } from "$app/paths";

  const navItems = ["2023-2024", "2024-2025", "2025-2026"];
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300&display=swap"
  rel="stylesheet"
/>

<div class="layout">
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
          <li>
            <a href={`${base}/${item.toLowerCase().replace(/ /g, "-")}`}>
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <main class="hero">
    <section class="hero-content">
      <p class="hero-small">PORTFOLIO PROJECT</p>

      <h1>
        Presentazione<br />
        del mio sito
      </h1>

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
      <a
        href="https://github.com/TheDarkVenom"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${base}/github.svg`} alt="Github" />
      </a>

      <a
        href="https://www.instagram.com/wizyy_07/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${base}/instagram.svg`} alt="Instagram" />
      </a>

      <a href="https://tiktok.com/@wizyy_07" target="_blank" rel="noreferrer">
        <img src={`${base}/tiktok.svg`} alt="TikTok" />
      </a>
    </div>
  </main>
</div>

<style>
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  .layout {
    width: 100%;
    height: 100vh;
  }

  header {
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    border-bottom: 1px solid #eee;
    background: white;
    color: black;
    box-sizing: border-box;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 420px;
  }

  .logo-box {
    width: 52px;
    height: 38px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background: white;
    box-sizing: border-box;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .evolution-stage {
    color: black;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
    letter-spacing: 4px;
  }

  .details {
    color: black;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    opacity: 0.7;
    margin: 4px 0 0;
    font-weight: bold;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
    align-items: center;
    padding: 0;
    margin: 0;
  }

nav a {
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 0.9rem;
  transition: 0.3s ease;
  white-space: nowrap;

  background: #e6e6e6;
  padding: 10px 18px;
  border-radius: 25px;
}

nav a:hover {
  background: #cfcfcf;
  color: black;
  transform: translateY(-2px);
}

  .hero {
    height: calc(100vh - 75px);
    background: #111;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 90px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(0, 255, 200, 0.35), transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(0, 120, 255, 0.3), transparent 30%);
    opacity: 0.8;
    z-index: 0;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(0, 255, 200, 0.35) 1px,
      transparent 1px
    );
    background-size: 14px 14px;
    opacity: 0.35;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    width: 50%;
    max-width: 560px;
    color: white;
  }

  .hero-small {
    font-size: 0.8rem;
    letter-spacing: 4px;
    color: #00ffd5;
    margin-bottom: 18px;
  }

  .hero-content h1 {
    font-size: 4.5rem;
    line-height: 1;
    margin: 0 0 22px;
    font-weight: 800;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    max-width: 500px;
    margin-bottom: 30px;
  }

  .hero-btn {
    background: transparent;
    color: white;
    border: 1px solid white;
    padding: 13px 28px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    transition: 0.3s ease;
  }

  .hero-btn:hover {
    background: white;
    color: black;
    transform: translateY(-3px);
  }

.hero-image {
  position: relative;
  z-index: 2;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  height: 78%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 28px;
  filter: brightness(0.95);
  transform: translateY(-25px);
}

  .social-sidebar {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 12px;
    border-radius: 4px 0 0 4px;
    z-index: 100;
  }

  .social-sidebar img {
    width: 24px;
    height: 24px;
    display: block;
    filter: invert(1);
    transition: opacity 0.2s ease;
  }

  .social-sidebar img:hover {
    opacity: 0.7;
  }
</style>