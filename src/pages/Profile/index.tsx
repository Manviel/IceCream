import { Component, For } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import ConnectFactory from '../../components/Link/ConnectFactory';
import { SubTitle } from '../../components/Header';

import { ListItemGen, Pages } from '../../models';

import Expert from './Expert';
import Review from './Expert/Tabs/Review';
import Results from './Expert/Results';

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
    <PageDecorator headline={Pages.Profile} subtitle='Overview'>
      <Expert />

      <div class='flex items-center justify-between screen'>
        <SubTitle spot='Insights' />

        <Results />
      </div>

      <p class='info'>2.2 Billion Visually Impaired People in 2022.</p>

      <div class='flex col os material'>
        <ConnectFactory
          href='https://finviz.com/'
          text='Finviz Stock screener'
        />
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
      </div>

      <Review />

      <footer class='material view rounded content-full screen'>
        <SubTitle spot='Software Requirements' />

        <ul class='flex col gap'>
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
