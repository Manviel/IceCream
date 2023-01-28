import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import { Paths, ListItemGen } from '../../../models';

import Card from '../../../components/Card';
import PageDecorator from '../../../components/PageDecorator';

import Reviews from './Reviews';

import './Expert.css';

const listItems: ListItemGen<number>[] = [
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
      <div class='grid expert sidebar material left-edge provision'>
        <TabGroup>
          <Tabs class='tour-list flex col items-start view'>
            <For each={listItems}>
              {(item) => (
                <Tab class='tour-list-item flex justify-between items-center content-full'>
                  {item.label}

                  <span class='chip token'>{item.value}</span>
                </Tab>
              )}
            </For>
          </Tabs>
          <For each={listItems}>
            {(item) => (
              <TabPanel index={item.value} class='view production right-edge'>
                <div class='grid toolbar'>
                  <Card
                    title='Position'
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
