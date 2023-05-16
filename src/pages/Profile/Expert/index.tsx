import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import { ListItemGen } from '../../../models';

import Review from './Tabs/Review';
import Growth from './Tabs/Growth';
import Dividend from './Tabs/Dividend';

import './Expert.css';

const GrowthTab = {
  label: 'Growth',
  value: 1,
};

const DividendTab = {
  label: 'Dividend',
  value: 2,
};

const listItems: ListItemGen<number>[] = [GrowthTab, DividendTab];

const Expert: Component = () => {
  return (
    <>
      <TabGroup>
        <Tabs class='tour-list flex items-start'>
          <For each={listItems}>
            {(item) => (
              <Tab class='tour-list-item flex justify-center content-full'>
                {item.label}
              </Tab>
            )}
          </For>
        </Tabs>

        <TabPanel index={GrowthTab.value} class='provision card'>
          <Growth />
        </TabPanel>
        <TabPanel index={DividendTab.value} class='provision card'>
          <Dividend />
        </TabPanel>
      </TabGroup>

      <Review />
    </>
  );
};

export default Expert;
