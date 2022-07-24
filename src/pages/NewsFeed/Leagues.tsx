import { Component, For } from 'solid-js';

import { Category, LeagueUnion } from '../../models';

type LeagueType = {
  currentLeague: LeagueUnion;
};

const Leagues: Component<LeagueType> = ({ currentLeague }) => (
  <ul class='flex justify-between screen view rounded leagues'>
    <For each={Object.keys(Category)}>
      {(league) => (
        <li class={currentLeague === league ? 'current-league' : 'league'}>
          <button class='backward'>{league.substring(0, 1)}</button>
        </li>
      )}
    </For>
  </ul>
);

export default Leagues;
