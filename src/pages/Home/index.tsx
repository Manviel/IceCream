import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import Card from "../../components/Card";
import SuperEllipse from "../../components/Superellipse";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <article class="home-page flex col end">
      <header className="flex bar">
        <Card number="700k +" description="Vacancies" />
        <Card number="320" description="Countries" />
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

      <ul className="bar dock flex justify">
        <SuperEllipse name="Finder" />
        <SuperEllipse name="Store" />
        <SuperEllipse name="Settings" />
        <SuperEllipse name="Messages" />
      </ul>
    </article>
  );
}

export default Home;
