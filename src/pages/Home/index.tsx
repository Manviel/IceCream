import { createSignal, For } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Link } from 'solid-app-router';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { randomInRange } from '../../services/utils';

import './Home.css';

function Home(): JSX.Element {
  const [item, setItem] = createSignal<string | null>(null);

  const handleHover = (e: MouseEvent) => {
    const elem = e.target as HTMLElement;

    setItem(elem.textContent);
  };

  const listItems = [
    'Scan',
    'Learn',
    'Food',
    'Supplements',
    'Lifestyle',
    'Plan',
    'Improve',
  ];

  return (
    <>
      <Header />

      <main class='page rounded content-full flex col justify-between'>
        <h1 class='title text'>Find Your Dream Job</h1>

        <p class='text info'>
          Introducing App, an instant home health tracker. An edge-to-edge OLED
          display. Ceramic Shield with four times better drop performance.
        </p>

        <section class='pale rounded'>
          <article class='home-stats'>
            <Card
              number={randomInRange(1000, 2000)}
              description='Active Users'
            />
            <Card number={randomInRange(3000, 7000)} description='Vacancies' />
            <Card number={randomInRange(10, 320)} description='Countries' />
            <Card number={randomInRange(3, 20)} description='Years' />
          </article>

          <div>
            <h2 class='title text'>
              We are Working on Solutions for Testing Everyone
            </h2>

            <p class='text info'>
              A14 Bionic is the fastest chip in a smartphone. And it pushes
              what’s possible. Like crunching trillions of operations on the
              Neural Engine. Or shooting in Dolby Vision — even pro movie
              cameras can’t do that. It’s superefficient for great battery life.
              And it’s ahead of its time, prepared to power pretty much anything
              that comes next.
            </p>
          </div>
        </section>
      </main>

      <section class='flex justify-between items-center tour content-full rounded wrap'>
        <ul class='list tour-list flex col'>
          <For each={listItems}>
            {(list: string) => (
              <li onMouseEnter={handleHover}>
                {list}
                <hr />
              </li>
            )}
          </For>
        </ul>

        <div class='brown rounded'>
          <strong class='subtitle'>{randomInRange(1, 100)}</strong>
          <p>{item}</p>
        </div>

        <div>
          <h3 class='title text'>Check your health in 2 minutes</h3>

          <p class='text info'>
            Vastly more contrast. Incredible color accuracy. A huge jump in
            pixel density. Just wow.
          </p>

          <div class='flex justify-end items-center'>
            <p class='slide'>
              <i class='arrow arrow-left'></i>
            </p>

            <Link href='/profile' class='btn'>
              Next
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
