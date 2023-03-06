import { Component, For, Suspense } from 'solid-js';

import Loader from '../../components/Loader';
import Quote from '../../components/Card/Quote';
import PageDecorator from '../../components/PageDecorator';
import ConnectFactory from '../../components/ConnectFactory';

import { ListItemGen } from '../../models';

import Breathe from './Breathe';

import './Profile.css';

const options: ListItemGen<string>[] = [
  {
    value: 'https://refactoring.guru/refactoring/what-is-refactoring',
    label: 'What is Refactoring?',
  },
  {
    value: 'https://www.informit.com/articles/article.aspx?p=1152528&seqNum=4',
    label: 'Characteristics of Excellent Requirements',
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
  {
    value:
      'https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013',
    label: 'Common Software Architectural Patterns',
  },
];

const Profile: Component = () => {
  return (
    <PageDecorator subtitle='Your Profile' headline='And new superpower'>
      <Breathe />

      <div class='screen'>
        <Suspense fallback={<Loader />}>
          <Quote />
        </Suspense>
      </div>

      <footer class='material view rounded content-full screen'>
        <h3 class='subtitle'>Software Requirements</h3>

        <ul class='flex col'>
          <For each={options}>
            {(option) => (
              <li class='flex items-center box-item'>
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
