import { JSX } from "solid-js/jsx-runtime";

function Profile(): JSX.Element {
  return (
    <article class="flex end">
      <a href="/">Back</a>

      <h2 className="bar bold title">Choose Your CSV</h2>

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
