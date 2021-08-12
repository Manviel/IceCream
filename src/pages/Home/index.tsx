import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import Card from "../../components/Card";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <>
      <header className="flex content-full justify-between">
        <Link href="/" className="link btn rounded icon flex col">
          <span className="line dark"></span>
          <span className="line dark"></span>
        </Link>

        <button className="btn rounded dark">Join Now</button>
      </header>

      <main class="page rounded content-full flex col justify-between">
        <h1 className="title text">Find Your Dream Job</h1>

        <p className="text info">
          Introducing App, an instant home health tracker. An edge-to-edge OLED
          display. Ceramic Shield with four times better drop performance.
        </p>

        <section className="pale rounded">
          <article className="flex">
            <Card number="200k +" description="Active Users" />
            <Card number="700k +" description="Vacancies" />
            <Card number="320" description="Countries" />
          </article>

          <div>
            <h2 className="title text">
              We are Working on Solutions for Testing Everyone
            </h2>

            <p className="text info">
              A14 Bionic is the fastest chip in a smartphone. And it pushes
              what’s possible. Like crunching trillions of operations on the
              Neural Engine. Or shooting in Dolby Vision — even pro movie
              cameras can’t do that. It’s superefficient for great battery life.
              And it’s ahead of its time, prepared to power pretty much anything
              that comes next.
            </p>
          </div>
        </section>

        <section className="flex justify-between tour rounded">
          <ul className="tour-list flex col items-end">
            <li>
              Scan
              <hr />
            </li>
            <li>
              Learn <hr />
            </li>
            <li>
              Food <hr />
            </li>
            <li>
              Supplements <hr />
            </li>
            <li>
              Lifestyle <hr />
            </li>
            <li>
              Plan <hr />
            </li>
            <li>
              Improve <hr />
            </li>
          </ul>

          <div>
            <h3 className="title text">Check your health in 2 minutes</h3>

            <p className="text info">
              Vastly more contrast. Incredible color accuracy. A huge jump in
              pixel density. Just wow.
            </p>

            <div className="flex justify-end items-center">
              <p className="slide">
                <i className="arrow arrow-left"></i>
              </p>

              <Link href="/profile" className="btn rounded dark">
                Next
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
