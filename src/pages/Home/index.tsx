import { createSignal, For, Component } from 'solid-js';
import { Link } from 'solid-app-router';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { randomInRange } from '../../services/utils';

import './Home.css';

const Home: Component = () => {
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

      <div class='page rounded content-full flex col justify-between'>
        <h1 class='title text'>
          How did we get such a huge camera upgrade to fit?
        </h1>

        <p class='text info'>
          We designed a totally new architecture and turned the lenses 45
          degrees to fit in our best dual-camera system ever — with its biggest
          Wide camera sensor. We also made room for our sensor-shift optical
          image stabilization. And we equipped the Ultra Wide camera with a
          faster sensor.
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
            <h2 class='title text'>Presenting Cinematic mode</h2>

            <p class='text info'>
              Filmmakers use a technique called rack focus — shifting focus from
              one subject to another — to guide the audience’s attention in
              their movies. Now iPhone makes it easy for you to bring the same
              storytelling technique to your videos.
            </p>
          </div>
        </section>
      </div>

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
          <h3 class='title text'>Cinematic mode shoots in Dolby Vision HDR</h3>

          <p class='text info'>
            Want to change the focus or adjust the blur after shooting wraps? No
            problem. iPhone lets you do it with a few taps and swipes. Even pro
            movie cameras can’t do that.
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
};

export default Home;
