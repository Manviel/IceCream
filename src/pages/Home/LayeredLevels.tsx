import { For, Component } from 'solid-js';

import { ListItemGen } from '../../models';

const listItems: ListItemGen<string>[] = [
  {
    label: 'Presentation',
    value: 'Responsible for user interactions with the software system',
  },
  {
    label: 'Business',
    value: 'Handles aspects related to accomplishing functional requirements',
  },
  {
    label: 'Domain',
    value: 'Responsible for algorithms and programming components',
  },
  {
    label: 'Infrastructure',
    value: 'Responsible for handling data, databases',
  },
];

const LayeredLevels: Component = () => {
  return (
    <ul class='grid home-stats items-start'>
      <For each={listItems}>
        {(item) => (
          <li class='box view rounded flex col'>
            <strong class='card-sub purple'>{item.label}</strong>
            <p class='info'>{item.value}</p>
          </li>
        )}
      </For>
    </ul>
  );
};

export default LayeredLevels;
