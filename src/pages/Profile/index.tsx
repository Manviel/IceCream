import { Component, For, Suspense } from 'solid-js';
import { Link } from '@solidjs/router';

import Loader from '../../components/Loader';
import Quote from '../../components/Card/Quote';
import PageDecorator from '../../components/PageDecorator';
import ConnectFactory from '../../components/ConnectFactory';

import Breathe from './Breathe';

import './Profile.css';

const options = [
  {
    value: 'https://www.informit.com/articles/article.aspx?p=1152528&seqNum=4',
    label: 'Characteristics of Excellent Requirements',
  },
  {
    value:
      'https://www.jobilize.com/software/test/quantifiable-requirements-by-openstax',
    label: 'Quantifiable Requirements',
  },
  {
    value:
      'https://ecomputernotes.com/software-engineering/requirementsvalidation',
    label: 'Requirements validation techniques',
  },
];

const Profile: Component = () => {
  return (
    <PageDecorator subtitle='Your Profile' headline='And new superpower'>
      <Suspense fallback={<Loader />}>
        <Quote />
      </Suspense>

      <div class='layer view rounded content-full screen'>
        <h3 class='subtitle'>Software Design</h3>

        <div class='flex justify-between items-center'>
          <ConnectFactory
            href='https://www.freecodecamp.org/news/why-understanding-software-requirements-matter-to-you-as-a-software-engineer/'
            text='Why is this important?'
          />

          <Link href='/profile/expert' class='btn'>
            Go to Onboarding
          </Link>
        </div>
      </div>

      <Breathe />

      <article class='layer view rounded content-full screen'>
        <h3 class='subtitle'>Software Requirements</h3>

        <ul class='flex col'>
          <For each={options}>
            {(option) => (
              <li class='flex items-center badge'>
                <ConnectFactory href={option.value} text={option.label} />
              </li>
            )}
          </For>
        </ul>
      </article>
    </PageDecorator>
  );
};

export default Profile;
