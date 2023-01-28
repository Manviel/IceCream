import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import { Paths, ListItemGen } from '../../../models';

import PageDecorator from '../../../components/PageDecorator';

import Review from './Tabs/Review';
import Growth from './Tabs/Growth';

import './Expert.css';

const OverviewTab = {
  label: 'Ready',
  value: 1,
};

const GrowthTab = {
  label: 'In Progress',
  value: 2,
};

const DividendTab = {
  label: 'Done',
  value: 3,
};

const listItems: ListItemGen<number>[] = [OverviewTab, GrowthTab, DividendTab];

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

          <TabPanel
            index={OverviewTab.value}
            class='view production right-edge'
          >
            <Review />
          </TabPanel>
          <TabPanel index={GrowthTab.value} class='view production right-edge'>
            <Growth />
          </TabPanel>
          <TabPanel
            index={DividendTab.value}
            class='view production right-edge'
          >
            <Review />
          </TabPanel>
        </TabGroup>
      </div>
    </PageDecorator>
  );
};

export default Expert;
