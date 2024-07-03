import { Component, For } from 'solid-js';
import { Tabs } from '@kobalte/core/tabs';

import { ListItemGen } from '../../../models';

import Growth from './Tabs/Growth';
import Dividend from './Tabs/Dividend';

import './Expert.css';

const GrowthTab = {
  label: 'Growth',
  value: '1',
};

const DividendTab = {
  label: 'Dividend',
  value: '2',
};

const listItems: ListItemGen<string>[] = [GrowthTab, DividendTab];

const Expert: Component = () => {
  return (
    <Tabs defaultValue={GrowthTab.value}>
      <Tabs.List class='tour-list flex items-start tab'>
        <For each={listItems}>
          {(item) => (
            <Tabs.Trigger
              value={item.value}
              class='tour-list-item flex justify-center content-full'
            >
              {item.label}
            </Tabs.Trigger>
          )}
        </For>
      </Tabs.List>

      <Tabs.Content value={GrowthTab.value} class='provision card os'>
        <Growth />
      </Tabs.Content>
      <Tabs.Content value={DividendTab.value} class='provision card os'>
        <Dividend />
      </Tabs.Content>
    </Tabs>
  );
};

export default Expert;
