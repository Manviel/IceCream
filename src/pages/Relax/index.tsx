import { Component, For } from 'solid-js';

import Flow from '../../components/PageDecorator/Flow';
import { SubTitle } from '../../components/Header';
import ConnectFactory from '../../components/Link/ConnectFactory';

import { ListItemGen } from '../../models';

import Breathe from './Breathe';
import Guard from './Guard';
import FaceTime from './FaceTime';

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

const Relax: Component = () => (
  <Guard>
    <Flow headline='View' subtitle='My account'>
      <Breathe />

      <aside class='flex col os material screen'>
        <ConnectFactory
          href='https://www.w3.org/WAI/business-case/'
          text='Business case for Accessibility'
        />
        <ConnectFactory
          href='https://www.appcues.com/blog/saas-growth-metrics'
          text='Business metrics that matter'
        />
        <ConnectFactory
          href='https://www.softwaretestinghelp.com/requirements-elicitation-techniques/'
          text='View All techniques'
        />
        <ConnectFactory
          href='https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns'
          text='Design Patterns'
        />
      </aside>

      <h3 class='subtitle screen'>Leave a message</h3>

      <FaceTime />

      <footer class='content-full screen'>
        <SubTitle spot='Software Requirements' />

        <p class='info'>Consistency is great but efficiency is better.</p>

        <aside class='flex col os material'>
          <For each={options}>
            {(option) => (
              <ConnectFactory href={option.value} text={option.label} />
            )}
          </For>
        </aside>
      </footer>
    </Flow>
  </Guard>
);

export default Relax;
