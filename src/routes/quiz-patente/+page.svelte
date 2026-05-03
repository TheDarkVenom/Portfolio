<script>
  import { base } from "$app/paths";
</script>

<main class="quiz-page">
  <section class="box">
    <h1>Quiz Patente</h1>

    <p>
      Questo progetto è stato realizzato in Python con Tkinter.
      Permette di simulare un quiz patente con domande vero/falso,
      immagini, timer e calcolo degli errori.
    </p>

    <h2>Come avviare il progetto</h2>

    <pre>
cd static/quiz-patente/"ED. CIVICA Quiz patente B"
python home_page.py
    </pre>

    <a href={`${base}/`} class="btn">TORNA ALLA HOME</a>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #000;
    color: white;
    font-family: Arial, sans-serif;
  }

  .quiz-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: linear-gradient(135deg, #111, #1f2937);
  }

  .box {
    max-width: 800px;
    padding: 40px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  }

  h1 {
    font-size: 42px;
    letter-spacing: 0.12em;
  }

  p {
    line-height: 1.8;
    font-size: 16px;
  }

  pre {
    background: black;
    padding: 20px;
    border-radius: 10px;
    overflow-x: auto;
    color: #00ff88;
  }

  .btn {
    display: inline-block;
    margin-top: 25px;
    padding: 14px 35px;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    letter-spacing: 0.12em;
  }

  .btn:hover {
    background: white;
    color: black;
  }
</style>