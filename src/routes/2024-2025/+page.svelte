<script>
  import { base } from "$app/paths";

  const navLinks = [
    "HOME",
    "INFORMATICA",
  ];

  function scrollToSection(link) {
    if (link === "HOME") {
      // Reindirizzamento alla pagina iniziale
      window.location.href = `${base}/`;
      return;
    }

    const id = link.toLowerCase().replace(/ /g, "-");
    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  const sections = [
    {
      id: "informatica",
      title: "INFORMATICA",
      image: `${base}/quiz-patente.png`,
      topic: "Quiz Patente",
      text1: "Ho realizzato in quarta superiore il progetto “Quiz Patente”, un’applicazione pensata per aiutare gli studenti a prepararsi all’esame del patentino. Il sistema propone domande a risposta vero/falso, con immagini e una barra di avanzamento per rendere lo studio più interattivo."
    },
  ];
</script>

<header class="header">
  <div class="top-bar">
    <h1 class="logo">2024 - 2025</h1>
  </div>
  <nav class="nav-links">
    {#each navLinks as link}
      <button type="button" on:click={() => scrollToSection(link)}>
        {link}
      </button>
    {/each}
  </nav>
</header>

<main class="wrapper">
  {#each sections as section, i}
    <section id={section.id} class="subject-section {i % 2 === 0 ? 'bg-white' : 'bg-sea-blue'}">
      <div class="container">
        
        <div class="image-column">
          <div class="image-wrapper">
            <img src={section.image} alt={section.topic} class="profile-img" />
            <div class="topic-tag">{section.topic}</div>
          </div>
        </div>

        <div class="text-column">
          <h2 class="section-title">{section.title}</h2>
          <div class="text-content">
            <p>{section.text1}</p>
          </div>
        </div>
        
      </div>
    </section>
  {/each}
</main>

<style>
  /* Reset globale per eliminare il nero e abilitare lo scroll */
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    background-color: white !important;
    color: #333;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  /* Header fisso */
  .header {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #eee;
    padding: 15px 0;
  }

  .logo {
    text-align: center;
    color: #4a3728;
    font-size: 20px;
    letter-spacing: 3px;
    margin: 0 0 10px 0;
    font-weight: 800;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .nav-links button {
    background: none;
    border: none;
    font-weight: 700;
    font-size: 11px;
    color: #888;
    cursor: pointer;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  .nav-links button:hover {
    color: #4a3728;
  }

  /* Contenitore principale scrollabile */
  .wrapper {
    margin-top: 100px; 
    display: block;
    background-color: white;
  }

  .subject-section {
    padding: 100px 0;
    min-height: 75vh;
    display: flex;
    align-items: center;
  }

  .bg-white { background-color: #ffffff; }
  .bg-sea-blue { background-color: #f2f9fb; }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 40px;
  }

  .image-column {
    flex: 1;
  }

  .image-wrapper {
    position: relative;
    /* Assicurati che l'animazione non venga ritagliata */
    z-index: 1; 
  }

  .profile-img {
    width: 100%;
    max-width: 420px;
    /* Ritaglio ovale come foto originale */
    border-bottom-left-radius: 150px 50px;
    border-bottom-right-radius: 150px 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    display: block;
    
    /* Aggiungi queste righe per l'animazione */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  /* Effetto al passaggio del mouse sull'immagine */
  .image-wrapper:hover .profile-img {
    transform: scale(1.05) translateY(-10px); /* Ingrandisce del 5% e si sposta in alto di 10px */
    box-shadow: 0 20px 40px rgba(0,0,0,0.1); /* Ombra più pronunciata per accentuare il sollevamento */
  }

  .topic-tag {
    position: absolute;
    bottom: 20px;
    right: -10px;
    background: #4a3728;
    color: white;
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    
    /* Aggiungi questa riga per far sì che l'etichetta non impedisca l'hover sull'immagine */
    pointer-events: none; 
  }

  .text-column {
    flex: 1.2;
  }

  .section-title {
    font-size: 45px;
    color: #4a3728;
    margin-bottom: 25px;
    font-weight: 800;
  }

  .text-content p {
    font-size: 18px;
    line-height: 1.7;
    color: #444;
  }

  /* Mobile */
  @media (max-width: 850px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .topic-tag {
      position: relative;
      right: 0;
      margin-top: 20px;
      display: inline-block;
    }
    .section-title {
      font-size: 32px;
    }
  }
</style>