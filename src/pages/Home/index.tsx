import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import Card from "../../components/Card";
import SuperEllipse from "../../components/Superellipse";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <article class="page home-page flex col justify-end">
      <header className="flex">
        <Card number="700k +" description="Vacancies" />
        <Card number="320" description="Countries" />
      </header>

      <h1 className="bar title bold">Find Your Dream Job</h1>

      <nav className="bar flex justify-end items-center">
        <p className="slide">
          <i className="arrow-right"></i>
        </p>

        <Link href="/profile" className="link">
          <button className="btn">Next</button>
        </Link>
      </nav>

      <footer className="dock flex justify-between">
        <SuperEllipse name="Finder" />
        <SuperEllipse name="Store" />
        <SuperEllipse name="Settings" />
        <SuperEllipse name="Messages" />
      </footer>
    </article>
  );
}

export default Home;
