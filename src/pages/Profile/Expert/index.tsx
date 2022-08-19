import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import Card from '../../../components/Card';
import PageDecorator from '../../../components/PageDecorator';
import { SuperEllipse } from '../../../components/Superellipse';
import ConnectFactory from '../../../components/ConnectFactory';

import PlayNextIcon from '../../../assets/icons/play-next.svg';
import PlayPrevIcon from '../../../assets/icons/play-prev.svg';
import PlayFillIcon from '../../../assets/icons/play-fill.svg';

import '../../Home/Home.css';
import './Expert.css';

type ListItem = {
  label: string;
  value: number;
  explanation: string;
};

const listItems: ListItem[] = [
  {
    label: 'Ready',
    value: 1,
    explanation:
      'The design patterns that deal with the creation of an object.',
  },
  {
    label: 'In Progress',
    value: 2,
    explanation:
      'The design patterns in this category deals with the class structure such as Inheritance and Composition.',
  },
  {
    label: 'Done',
    value: 3,
    explanation:
      'This type of design patterns provide solution for the better interaction between objects, how to provide lose coupling, and flexibility to extend easily in future.',
  },
];

const Expert: Component = () => {
  return (
    <PageDecorator subtitle='Expert' headline='Onboarding' customPath='profile'>
      <div class='expert layer sidebar'>
        <TabGroup>
          <Tabs class='tour-list flex col view depth'>
            <For each={listItems}>
              {(item) => (
                <Tab
                  class='tour-list-item flex justify-between items-center content-full rounded'
                  classList={({ selected }) => ({
                    'tour-list-item-selected': selected(),
                  })}
                >
                  {item.label}

                  <span class='chip'>{item.value}</span>
                </Tab>
              )}
            </For>
          </Tabs>
          <For each={listItems}>
            {(item) => (
              <TabPanel index={item.value} class='view production'>
                <div class='home-stats toolbar'>
                  <Card
                    phrase='Position'
                    number={item.value}
                    description='Coming Soon'
                  />

                  <article class='flex col text-center justify-between'>
                    <h2 class='info'>Ratings</h2>
                    <p>4 out of 5</p>

                    <nav
                      class='flex justify-between sidebar'
                      aria-label='Candidate'
                    >
                      <button class={SuperEllipse} aria-label='Prev'>
                        <PlayPrevIcon />
                      </button>
                      <button class={SuperEllipse} aria-label='Auto Play'>
                        <PlayFillIcon />
                      </button>
                      <button class={SuperEllipse} aria-label='Next'>
                        <PlayNextIcon />
                      </button>
                    </nav>
                  </article>

                  <article class='flex col text-center justify-between'>
                    <h2 class='info'>Usage</h2>
                    <p>900 million</p>

                    <button class='btn sidebar'>Notes</button>
                  </article>

                  <article class='flex col text-center justify-between'>
                    <h2 class='info'>Report</h2>

                    <ConnectFactory href='https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns' />

                    <button class='btn sidebar'>Results</button>
                  </article>
                </div>

                <h3 class='subtitle'>Favourites</h3>

                <p class='info'>{item.explanation}</p>

                <article class='flex col'>
                  <h4 class='subtitle'>Reviews</h4>
                  <p class='info'>
                    Once the business analysis has communicated with
                    stakeholders for understanding their requirements, it can be
                    described as elicitation. Requirements Elicitation
                    Techniques:
                  </p>
                  <p class='info brainstorm view rounded'>
                    Brainstorming is used to generate new ideas and find a
                    solution for a specific issue. The members can be domain
                    experts, subject matter experts. Multiple ideas and
                    information give you a repository of knowledge and you can
                    choose from different ideas.
                  </p>
                  <p class='info interview view rounded'>
                    Interview techniques should be used for building strong
                    relationships between business analysts and stakeholders. In
                    this technique, the interviewer directs the question to
                    stakeholders to obtain information.
                  </p>
                  <p class='info document view rounded'>
                    Document Analysis is used to gather business information by
                    reviewing/examining the available materials that describe
                    the business environment. This analysis is helpful to
                    validate the implementation of current solutions and is also
                    helpful in understanding the business need.
                  </p>
                  <p class='info survey view rounded'>
                    For Survey, a set of questions is given to stakeholders to
                    quantify their thoughts. After collecting the responses from
                    stakeholders, data is analyzed to identify the area of
                    interest of stakeholders.
                  </p>
                  <p class='info prototyping view rounded'>
                    Prototyping is used to identify missing or unspecified
                    requirements. In this technique, frequent demos are given to
                    the client by creating the prototypes so that client can get
                    an idea of how the product will look like. Prototypes can be
                    used to create a mock-up of sites, and describe the process
                    using diagrams.
                  </p>

                  <ConnectFactory href='https://www.softwaretestinghelp.com/requirements-elicitation-techniques/' />
                </article>
              </TabPanel>
            )}
          </For>
        </TabGroup>
      </div>
    </PageDecorator>
  );
};

export default Expert;
