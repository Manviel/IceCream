import { JSX } from "solid-js/jsx-runtime";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <article class="home-page flex end">
      <header className="flex bar">
        <section className="glass-card">
          <h4 className="glass-text bold">700k +</h4>
          <p className="glass-bot">Vacancies</p>
        </section>

        <section className="glass-card">
          <h4 className="glass-text bold">320</h4>
          <p className="glass-bot">Countries</p>
        </section>
      </header>

      <h2 className="bar bold title">Find Your Dream Job</h2>

      <footer className="bar flex end">
        <button className="btn">Next</button>
      </footer>
    </article>
  );
}

export default Home;
