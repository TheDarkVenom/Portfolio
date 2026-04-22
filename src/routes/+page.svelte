<script>
  // Dati per la navigazione
  const navItems = [
    "Exhibitions and Events", 
    "Visitor Information", 
    "Education", 
    "Collections", 
    "Research", 
    "About TNM"
  ];

  let selectedLang = 'Language';
  // svelte-ignore non_reactive_update
    let activeFontSize = 'M';
</script>

<div class="layout">
  <div class="utility-bar">
    <div class="font-controls">
      <span>Font Size:</span>
      {#each ['L', 'M', 'S'] as size}
        <!-- svelte-ignore event_directive_deprecated -->
        <button 
          class:active={activeFontSize === size} on:click={() => activeFontSize = size}>
          {size}
        </button>
      {/each}
    </div>
    <button class="lang-btn">🌐 {selectedLang}</button>
  </div>

  <header>
    <div class="logo-container">
      <div class="logo-box">TNM</div>
      <div class="brand-text">
        <h1>東京国立博物館</h1>
        <p>TOKYO NATIONAL MUSEUM</p>
      </div>
    </div>

    <nav>
      <ul>
        {#each navItems as item}
          <li><a href="#{item.toLowerCase().replace(/ /g, '-')}">{item}</a></li>
        {/each}
        <li class="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
      <div class="social-icon">YT</div>
      <div class="social-icon">TW</div>
      <div class="social-icon">IG</div>
      <div class="social-icon">FB</div>
    </div>
  </main>
</div>

<style>
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

  nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
    align-items: center;
  }

  nav a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .hero {
    height: 80vh;
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), 
                url('https://www.tnm.jp/modules/rblogs/index.php?controller=attachment&attachment_id=1234') no-repeat center/cover;
    position: relative;
  }

  .social-sidebar {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.7);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 15px;
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