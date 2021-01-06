import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <article class="home-page flex col end">
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

      <footer className="bar flex end center">
        <p className="slide">
          <i className="arrow-right"></i>
        </p>

        <Link href="/profile" className="link">
          <button className="btn">Next</button>
        </Link>
      </footer>
    </article>
  );
}

export default Home;
