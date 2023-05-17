import { Component, For } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import ConnectFactory from '../../components/ConnectFactory';
import { SubTitle } from '../../components/Header';

import { ListItemGen } from '../../models';

import Breathe from './Breathe';
import Expert from './Expert';
import Review from './Expert/Tabs/Review';

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
    <PageDecorator subtitle='Your Profile' headline='Overview'>
      <h3 class='info'>You seem rested</h3>

      <Expert />
      <Review />
      <Breathe />

      <footer class='material view rounded content-full screen'>
        <SubTitle spot='Software Requirements' />

        <ul class='flex col info gap'>
          <For each={options}>
            {(option) => (
              <li class='flex items-center'>
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
