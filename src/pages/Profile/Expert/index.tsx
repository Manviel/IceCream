import { Component, For } from 'solid-js';
import { Tabs } from '@kobalte/core/tabs';

import { ISegregation } from '../../../global';

import Growth from './Tabs/Growth';
import Dividend from './Tabs/Dividend';

import './Expert.css';

const GrowthTab: ISegregation<string> = {
  title: 'Growth',
  description: '1'
};

const DividendTab: ISegregation<string> = {
  title: 'Dividend',
  description: '2'
};

const listItems = [GrowthTab, DividendTab];

const Expert: Component = () => {
  return (
    <Tabs defaultValue={GrowthTab.description}>
      <Tabs.List class="tour-list flex items-start tab">
        <For each={listItems}>
          {item => (
            <Tabs.Trigger
              value={item.description}
              class="tour-list-item flex justify-center content-full"
            >
              {item.title}
            </Tabs.Trigger>
          )}
        </For>
      </Tabs.List>

      <Tabs.Content value={GrowthTab.description} class="provision card os">
        <Growth />
      </Tabs.Content>
      <Tabs.Content value={DividendTab.description} class="provision card os">
        <Dividend />
      </Tabs.Content>
    </Tabs>
  );
};

export default Expert;
