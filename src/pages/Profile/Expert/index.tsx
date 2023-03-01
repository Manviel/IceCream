import { Component, For } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import { Paths, ListItemGen } from '../../../models';

import PageDecorator from '../../../components/PageDecorator';

import Review from './Tabs/Review';
import Growth from './Tabs/Growth';
import Dividend from './Tabs/Dividend';

import './Expert.css';

const OverviewTab = {
  label: 'Overview',
  value: 1,
};

const GrowthTab = {
  label: 'Growth',
  value: 2,
};

const DividendTab = {
  label: 'Dividend',
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
      <div class='grid expert material left-edge provision'>
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
            class='view production right-edge card'
          >
            <Review />
          </TabPanel>
          <TabPanel
            index={GrowthTab.value}
            class='view production right-edge card'
          >
            <Growth />
          </TabPanel>
          <TabPanel
            index={DividendTab.value}
            class='view production right-edge card'
          >
            <Dividend />
          </TabPanel>
        </TabGroup>
      </div>
    </PageDecorator>
  );
};

export default Expert;
