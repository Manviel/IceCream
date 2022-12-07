import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import { Paths } from '../../../models';

import Card from '../../../components/Card';
import PageDecorator from '../../../components/PageDecorator';

import Reviews from './Reviews';

import './Expert.css';

type TabItem = {
  label: string;
  value: number;
};

const listItems: TabItem[] = [
  {
    label: 'Ready',
    value: 1,
  },
  {
    label: 'In Progress',
    value: 2,
  },
  {
    label: 'Done',
    value: 3,
  },
];

const Expert: Component = () => {
  return (
    <PageDecorator
      subtitle='Expert'
      headline='Onboarding'
      customPath={Paths.Profile}
    >
      <div class='expert layer sidebar rounded'>
        <TabGroup>
          <Tabs class='tour-list flex col items-start view material border-edge'>
            <For each={listItems}>
              {(item) => (
                <Tab
                  class='tour-list-item flex justify-between items-center content-full'
                  classList={({ selected }) => ({
                    'tour-list-item-selected': selected(),
                  })}
                >
                  {item.label}

                  <span class='chip token'>{item.value}</span>
                </Tab>
              )}
            </For>
          </Tabs>
          <For each={listItems}>
            {(item) => (
              <TabPanel index={item.value} class='view production'>
                <div class='toolbar'>
                  <Card
                    phrase='Position'
                    number={item.value}
                    description='Coming Soon'
                  />

                  <Reviews />
                </div>
              </TabPanel>
            )}
          </For>
        </TabGroup>
      </div>
    </PageDecorator>
  );
};

export default Expert;
