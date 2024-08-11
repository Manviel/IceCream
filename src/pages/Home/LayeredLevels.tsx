import { For, Component } from 'solid-js';
import { A } from '@solidjs/router';

import { ListItemGen, Paths } from '../../global';
import { getGroup, getStack, ShapeIcon } from '../../global/theme';

import TrayIcon from '../../assets/icons/tray.svg';

const listItems: ListItemGen<string>[] = [
  {
    label: 'Presentation',
    value: 'Responsible for user interactions with the software system'
  },
  {
    label: 'Business',
    value: 'Handles aspects related to accomplishing functional requirements'
  },
  {
    label: 'Domain',
    value: 'Responsible for algorithms and programming components'
  },
  {
    label: 'Infrastructure',
    value: 'Responsible for handling data, databases'
  }
];

const LayeredLevels: Component = () => {
  return (
    <div class="flex col justify-between content-tall proximity">
      <ul class="flex justify-between proximity flex-wrap">
        <For each={listItems}>
          {item => (
            <li class={getStack('box fill')}>
              <h4 class="card-sub">{item.label}</h4>
              <p class="term grey-dark">{item.value}</p>
            </li>
          )}
        </For>
      </ul>

      <div class={getGroup('alias items-end')}>
        <div class="flex col lockup" role="status">
          <p>Email marketing ROI (for every $1 spent)</p>
          <strong class="subtitle">$42</strong>
        </div>

        <A href={Paths.Bag} class={ShapeIcon.Default} aria-label="Go to Bag">
          <TrayIcon />
        </A>
      </div>
    </div>
  );
};

export default LayeredLevels;
