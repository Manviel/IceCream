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
      <div class='expert rounded screen layer'>
        <TabGroup orientation='vertical'>
          <Tabs class='tour-list flex col view depth sidebar'>
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
                <div class='products'>
                  <Card
                    phrase='Position'
                    number={item.value}
                    description='Coming Soon'
                  />

                  <div class='flex col view'>
                    <nav class='flex justify-between'>
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

                    <div class='flex justify-between'>
                      <article class='flex col text-center'>
                        <h2 class='info'>Ratings</h2>
                        <p>4 out of 5</p>
                      </article>

                      <article class='flex col text-center'>
                        <h2 class='info'>Usage</h2>
                        <p>900 million</p>
                      </article>

                      <article class='flex col text-center'>
                        <h2 class='info'>Report</h2>

                        <ConnectFactory href='https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns' />
                      </article>
                    </div>
                  </div>
                </div>

                <h3 class='subtitle'>Favourites</h3>

                <p class='info'>{item.explanation}</p>

                <article class='flex col'>
                  <h4 class='subtitle'>Reviews</h4>
                  <p class='info'>
                    Once the business analysis has communicated with
                    stakeholders for understanding their requirements, it can be
                    described as elicitation.
                  </p>
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
