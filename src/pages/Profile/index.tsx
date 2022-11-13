import { Component, For, Suspense } from 'solid-js';

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
  {
    value:
      'https://www.freecodecamp.org/news/why-understanding-software-requirements-matter-to-you-as-a-software-engineer/',
    label: 'Why Software Design is important?',
  },
  {
    value: 'https://www.javatpoint.com/software-engineering-software-metrics',
    label: 'Process measurement metrics',
  },
  {
    value:
      'https://www.isixsigma.com/methodology/business-process-management-bpm/business-process-management-software-development/',
    label: 'Process management',
  },
];

const Profile: Component = () => {
  return (
    <PageDecorator subtitle='Your Profile' headline='And new superpower'>
      <Suspense fallback={<Loader />}>
        <Quote />
      </Suspense>

      <Breathe />

      <footer class='layer view rounded content-full screen'>
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
      </footer>
    </PageDecorator>
  );
};

export default Profile;
