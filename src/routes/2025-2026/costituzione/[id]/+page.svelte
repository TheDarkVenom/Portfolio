<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';

  const articoli = {
    "1": { 
      titolo: "Articolo 1", 
      testo: "L'Italia è una Repubblica democratica fondata sul lavoro.",
      immagine: `${base}/art1.png`
    },
    "2": { 
      titolo: "Articolo 2", 
      testo: "La Repubblica riconosce e garantisce i diritti inviolabili dell'uomo.",
      immagine: `${base}/costituzione/art2.png`
    },
    // Aggiungi gli altri qui...
  };

  const listaId = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  let articolo = $derived(articoli[page.params.id]);
</script>

{#if articolo}
  <div class="article-container">
   <a href="/2025-2026" class="back-btn-top">
   ← Torna alla Home
</a>

    <div class="content-layout">
      <div class="image-col">
        <img src={articolo.immagine} alt={articolo.titolo} class="art-img" />
      </div>

      <div class="text-col">
        <h1>{articolo.titolo}</h1>
        <p>{articolo.testo}</p>
      </div>
    </div>

    <div class="navigation-footer">
      <h3>Esplora altri articoli</h3>
      <div class="mini-grid">
        {#each listaId as id}
          <a 
            href="/2025-2026/costituzione/{id}" 
            class="mini-btn {id === page.params.id ? 'active' : ''}"
          >
            {id}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .article-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .back-btn-top {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: white;
    background-color: #4a3728;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }

  .back-btn-top:hover {
    background-color: #8b5e3c;
    transform: translateX(-5px);
  }

  .content-layout {
    display: flex;
    gap: 50px;
    align-items: center;
    margin-bottom: 60px;
  }

  .image-col {
    flex: 1;
  }

  .art-img {
    width: 100%;
    max-height: 450px;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .text-col {
    flex: 1.5;
  }

  h1 {
    font-size: 48px;
    color: #4a3728;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    color: #333;
  }

  .navigation-footer {
    border-top: 2px solid #eee;
    padding-top: 40px;
  }

  .mini-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  .mini-btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
    color: #4a3728;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s;
  }

  .mini-btn:hover, .mini-btn.active {
    background: #4a3728;
    color: white;
  }

  @media (max-width: 768px) {
    .content-layout {
      flex-direction: column;
      gap: 30px;
    }
    
    h1 { font-size: 36px; }
  }
</style>