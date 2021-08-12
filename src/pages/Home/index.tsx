import { createSignal, For } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { Link } from "@rturnq/solid-router";

import Card from "../../components/Card";
import Header from "../../components/Header";

import { randomInRange } from "../../services/company";

import "./Home.css";

function Home(): JSX.Element {
  const [item, setItem] = createSignal<string | null>(null);

  const handleHover = (e: MouseEvent) => {
    const elem = e.target as HTMLElement;

    setItem(elem.textContent);
  };

  const listItems = [
    "Scan",
    "Learn",
    "Food",
    "Supplements",
    "Lifestyle",
    "Plan",
    "Improve",
  ];

  return (
    <>
      <Header />

      <main class="page rounded content-full flex col justify-between">
        <h1 className="title text bar">Find Your Dream Job</h1>

        <p className="text info bar">
          Introducing App, an instant home health tracker. An edge-to-edge OLED
          display. Ceramic Shield with four times better drop performance.
        </p>

        <section className="pale rounded">
          <article className="flex wrap">
            <Card number="200k +" description="Active Users" />
            <Card number="700k +" description="Vacancies" />
            <Card number={randomInRange(10, 320)} description="Countries" />
          </article>

          <div>
            <h2 className="title text bar">
              We are Working on Solutions for Testing Everyone
            </h2>

            <p className="text info bar">
              A14 Bionic is the fastest chip in a smartphone. And it pushes
              what’s possible. Like crunching trillions of operations on the
              Neural Engine. Or shooting in Dolby Vision — even pro movie
              cameras can’t do that. It’s superefficient for great battery life.
              And it’s ahead of its time, prepared to power pretty much anything
              that comes next.
            </p>
          </div>
        </section>

        <section className="flex justify-between items-center tour bar rounded wrap">
          <ul className="tour-list flex col items-end">
            <For each={listItems}>
              {(list: string) => (
                <li onMouseEnter={handleHover}>
                  {list}
                  <hr />
                </li>
              )}
            </For>
          </ul>

          <div className="brown rounded">
            <strong className="subtitle">{randomInRange(1, 100)}</strong>
            <p>{item}</p>
          </div>

          <div>
            <h3 className="title text bar">Check your health in 2 minutes</h3>

            <p className="text info bar">
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
