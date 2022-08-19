import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import Card from '../../../components/Card';
import PageDecorator from '../../../components/PageDecorator';

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

                  <div class='view'>
                    <button>Previous</button>
                    <button>Play</button>
                    <button>Next</button>
                  </div>
                </div>

                <h2 class='subtitle'>Favourites</h2>

                <p class='info'>{item.explanation}</p>
              </TabPanel>
            )}
          </For>
        </TabGroup>
      </div>
    </PageDecorator>
  );
};

export default Expert;
