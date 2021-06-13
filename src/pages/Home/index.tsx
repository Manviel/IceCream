import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import Card from "../../components/Card";
import SuperEllipse from "../../components/Superellipse";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <article class="page content-full flex col justify-between">
      <Link href="/" className="link btn icon flex col">
        <span className="line dark"></span>
        <span className="line dark"></span>
      </Link>

      <main className="dock content-full flex justify-between items-center">
        <SuperEllipse name="Google" />

        <p className="stage-title">New stage of your application</p>

        <button className="btn dark">
          <i className="arrow arrow-right"></i>
        </button>
      </main>

      <header className="flex">
        <Card number="700k +" description="Vacancies" />
        <Card number="320" description="Countries" />
      </header>

      <h1 className="title">Find Your Dream Job</h1>

      <nav className="flex justify-end items-center">
        <p className="slide">
          <i className="arrow arrow-left"></i>
        </p>

        <Link href="/profile" className="link btn">
          Next
        </Link>
      </nav>
    </article>
  );
}

export default Home;
