import { For, Component } from 'solid-js';
import { Tab, TabGroup, TabPanel, Tabs } from 'solid-a11y';

import { randomInRange } from '../../services/utils';

type ListItem = {
  label: string;
  value: number;
  explanation: string;
};

const listItems: ListItem[] = [
  {
    label: 'Presentation',
    value: randomInRange(1, 25),
    explanation: 'Responsible for user interactions with the software system',
  },
  {
    label: 'Business',
    value: randomInRange(26, 50),
    explanation:
      'Handles aspects related to accomplishing functional requirements',
  },
  {
    label: 'Domain',
    value: randomInRange(51, 75),
    explanation: 'Responsible for algorithms, and programming components',
  },
  {
    label: 'Infrastructure',
    value: randomInRange(76, 100),
    explanation: 'Responsible for handling data, databases',
  },
];

const LayeredTabs: Component = () => {
  return (
    <TabGroup>
      <Tabs class='tour-list flex col'>
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
          <TabPanel
            index={item.value}
            class='tour-indicators box view rounded flex col'
          >
            <strong class='subtitle purple'>{item.value}</strong>
            <p>{item.explanation}</p>
          </TabPanel>
        )}
      </For>
    </TabGroup>
  );
};

export default LayeredTabs;
