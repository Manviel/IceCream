import { For, Component } from 'solid-js';

type ListItem = {
  label: string;
  explanation: string;
};

const listItems: ListItem[] = [
  {
    label: 'Presentation',
    explanation: 'Responsible for user interactions with the software system',
  },
  {
    label: 'Business',
    explanation:
      'Handles aspects related to accomplishing functional requirements',
  },
  {
    label: 'Domain',
    explanation: 'Responsible for algorithms and programming components',
  },
  {
    label: 'Infrastructure',
    explanation: 'Responsible for handling data, databases',
  },
];

const LayeredLevels: Component = () => {
  return (
    <ul class='home-stats items-start'>
      <For each={listItems}>
        {(item) => (
          <li class='box view rounded flex col'>
            <strong class='card-sub purple'>{item.label}</strong>
            <p class='info'>{item.explanation}</p>
          </li>
        )}
      </For>
    </ul>
  );
};

export default LayeredLevels;
