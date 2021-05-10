import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import Card from "../../components/Card";
import SuperEllipse from "../../components/Superellipse";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <article class="page home-page flex col justify-between">
      <Link href="/" className="link btn primary icon flex col">
        <span className="line dark"></span>
        <span className="line dark"></span>
      </Link>

      <main className="dock flex justify-between items-center">
        <SuperEllipse name="Google" />

        <p className="stage-title">New stage of your application</p>

        <button className="btn dark dark-btn">
          <i className="arrow arrow-right"></i>
        </button>
      </main>

      <header className="flex">
        <Card number="700k +" description="Vacancies" />
        <Card number="320" description="Countries" />
      </header>

      <h1 className="title bold">Find Your Dream Job</h1>

      <nav className="flex justify-end items-center">
        <p className="slide">
          <i className="arrow arrow-left"></i>
        </p>

        <Link href="/profile" className="link">
          <button className="btn primary">Next</button>
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
