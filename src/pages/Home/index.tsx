import { createSignal, For, Component } from 'solid-js';
import { Link } from 'solid-app-router';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { randomInRange } from '../../services/utils';

import './Home.css';

type ListItem = {
  label: string;
  value: number;
};

const Home: Component = () => {
  const [item, setItem] = createSignal<number>(0);

  const handleHover = (e: ListItem) => setItem(e.value);

  const listItems: ListItem[] = [
    {
      label: 'Scan',
      value: randomInRange(1, 100),
    },
    {
      label: 'Learn',
      value: randomInRange(1, 100),
    },
    {
      label: 'Food',
      value: randomInRange(1, 100),
    },
    {
      label: 'Supplements',
      value: randomInRange(1, 100),
    },

    {
      label: 'Lifestyle',
      value: randomInRange(1, 100),
    },
    {
      label: 'Plan',
      value: randomInRange(1, 100),
    },
  ];

  return (
    <>
      <div class='page view rounded content-full flex col justify-between'>
        <strong class='subtitle'>Home</strong>

        <Header spot='How did we get such a huge camera upgrade to fit?' />

        <p class='text info'>
          We designed a totally new architecture and turned the lenses 45
          degrees to fit in our best dual-camera system ever — with its biggest
          Wide camera sensor. We also made room for our sensor-shift optical
          image stabilization. And we equipped the Ultra Wide camera with a
          faster sensor.
        </p>

        <div class='pale view rounded'>
          <article class='home-stats'>
            <Card
              phrase='Up to'
              number={randomInRange(11, 98)}
              measure='million'
              description='Active users'
            />
            <Card
              phrase='Support'
              number={randomInRange(10, 320)}
              description='Countries'
            />
            <Card
              phrase='Up to'
              number={randomInRange(1, 10)}
              measure='x'
              description='Faster than previous versions'
            />
            <Card
              phrase='Down to'
              number={randomInRange(1, 3)}
              measure='sec'
              description='Time to interactive'
            />
          </article>

          <article class='text'>
            <h2 class='title'>Presenting Cinematic mode</h2>

            <p class='info'>
              Filmmakers use a technique called rack focus — shifting focus from
              one subject to another — to guide the audience’s attention in
              their movies. Now iPhone makes it easy for you to bring the same
              storytelling technique to your videos.
            </p>
          </article>
        </div>
      </div>

      <div class='layer view tour content-full rounded'>
        <article class='flex items-center'>
          <ul class='tour-list flex col'>
            <For each={listItems}>
              {(item) => (
                <li class='flex justify-between items-center content-full rounded'>
                  {item.label}
                  <button class='chip' onClick={() => handleHover(item)}>
                    {item.value}
                  </button>
                </li>
              )}
            </For>
          </ul>

          <div class='tour-indicators flex items-center content-full'>
            <strong class='pale view rounded subtitle'>{item}</strong>
          </div>
        </article>

        <article class='text'>
          <h3 class='title'>Cinematic mode shoots in Dolby Vision HDR</h3>

          <p class='info'>
            Want to change the focus or adjust the blur after shooting wraps? No
            problem. iPhone lets you do it with a few taps and swipes. Even pro
            movie cameras can’t do that.
          </p>

          <div class='flex justify-end items-center'>
            <p class='slide'>
              <i class='arrow arrow-left'></i>
            </p>

            <Link href='/news' class='btn'>
              Go to News
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
