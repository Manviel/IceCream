import { For, Component } from 'solid-js';
import { A } from '@solidjs/router';

import { ISegregation, Paths } from '../../global';
import { getStack, ShapeIcon } from '../../global/theme';

import TrayIcon from '../../assets/icons/tray.svg';
import Stack from '../../components/Card/Stack';

const listItems: ISegregation<string>[] = [
  {
    title: 'Presentation',
    description: 'Responsible for user interactions with the software system'
  },
  {
    title: 'Business',
    description: 'Handles aspects related to accomplishing functional requirements'
  },
  {
    title: 'Domain',
    description: 'Responsible for algorithms and programming components'
  },
  {
    title: 'Infrastructure',
    description: 'Responsible for handling data, databases'
  }
];

const LayeredLevels: Component = () => {
  return (
    <div class="flex col justify-between content-tall proximity">
      <ul class="flex justify-between proximity flex-wrap">
        <For each={listItems}>
          {item => (
            <li class={getStack('box fill')}>
              <h4 class="card-sub">{item.title}</h4>
              <p class="term grey-dark">{item.description}</p>
            </li>
          )}
        </For>
      </ul>

      <Stack theme="alias" title="Email marketing ROI (for every $1 spent)" description="$42">
        <A href={Paths.Bag} class={ShapeIcon.Default} aria-title="Go to Bag">
          <TrayIcon />
        </A>
      </Stack>
    </div>
  );
};

export default LayeredLevels;
