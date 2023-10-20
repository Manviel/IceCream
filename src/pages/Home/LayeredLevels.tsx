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
    <ul class='grid home-stats gap items-start'>
      <For each={listItems}>
        {(item) => (
          <li class='box view rounded flex col'>
            <h4 class='card-sub accent'>{item.label}</h4>
            <p class='card-header term'>{item.value}</p>
          </li>
        )}
      </For>
    </ul>
  );
};

export default LayeredLevels;
