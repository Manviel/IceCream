import { Component, For } from 'solid-js';

import Flow from '../../components/PageDecorator/Flow';
import { SubTitle } from '../../components/Header';
import ConnectFactory from '../../components/Link/ConnectFactory';

import { ISegregation } from '../../global';
import { getStack } from '../../global/theme';

import Breathe from './Breathe';
import Guard from './Guard';
import FaceTime from './FaceTime';
import Calendar from './Calendar';

const options: ISegregation<string>[] = [
  {
    title: 'https://refactoring.guru/refactoring/what-is-refactoring',
    description: 'What is Refactoring?'
  },
  {
    title: 'https://www.informit.com/articles/article.aspx?p=1152528&seqNum=4',
    description: 'Characteristics of Excellent Requirements'
  },
  {
    title: 'https://ecomputernotes.com/software-engineering/requirementsvalidation',
    description: 'Requirements validation techniques'
  },
  {
    title:
      'https://www.freecodecamp.org/news/why-understanding-software-requirements-matter-to-you-as-a-software-engineer/',
    description: 'Why Software Design is important?'
  },
  {
    title: 'https://www.javatpoint.com/software-engineering-software-metrics',
    description: 'Process measurement metrics'
  },
  {
    title:
      'https://www.isixsigma.com/methodology/business-process-management-bpm/business-process-management-software-development/',
    description: 'Process management'
  },
  {
    title:
      'https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013',
    description: 'Common Software Architectural Patterns'
  },
  {
    title: 'https://www.w3.org/WAI/business-case/',
    description: 'Business case for Accessibility'
  },
  {
    title: 'https://www.appcues.com/blog/saas-growth-metrics',
    description: 'Business metrics that matter'
  },
  {
    title: 'https://www.softwaretestinghelp.com/requirements-elicitation-techniques/',
    description: 'View All techniques'
  },
  {
    title: 'https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns',
    description: 'Design Patterns'
  }
];

const Relax: Component = () => (
  <Guard>
    <Flow headline="View" subtitle="My account">
      <Breathe />

      <h3 class="subtitle screen">Leave a message</h3>

      <FaceTime />

      <footer class="content-full screen">
        <SubTitle spot="Software Requirements" />

        <p class="info">Consistency is great but efficiency is better.</p>

        <aside class="grid proximity" id='room'>
          <Calendar />

          <div class={getStack('material')}>
            <For each={options}>
              {option => <ConnectFactory href={option.title} text={option.description} />}
            </For>
          </div>
        </aside>
      </footer>
    </Flow>
  </Guard>
);

export default Relax;
