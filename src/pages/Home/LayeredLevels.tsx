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
    <ul class='flex justify-between items-start proximity flex-wrap'>
      <For each={listItems}>
        {(item) => (
          <li class='box view rounded flex col widget-title'>
            <h4 class='card-sub'>{item.label}</h4>
            <p class='term grey-dark'>{item.value}</p>
          </li>
        )}
      </For>
    </ul>
  );
};

export default LayeredLevels;
