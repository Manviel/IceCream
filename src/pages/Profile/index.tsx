import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import "./Profile.css";

function Profile(): JSX.Element {
  return (
    <article class="flex col bar start">
      <Link href="/" className="link btn icon">
        <i className="arrow-right"></i>
      </Link>

      <h2 className="bar bold subtitle">Choose Your CSV</h2>

      <header className="flex bar">
        <section className="glass-card">
          <h4 className="glass-text bold">Today</h4>
          <p className="glass-bot">126 Views</p>
        </section>
      </header>
    </article>
  );
}

export default Profile;
