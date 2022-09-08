import { Component, For, createSignal, createUniqueId } from 'solid-js';

import { LeagueUnion } from '../../models';
import { Category } from '../../models/config';

import Notification from './Notification';

type LeagueType = {
  currentLeague: LeagueUnion;
};

const Leagues: Component<LeagueType> = ({ currentLeague }) => {
  const [tooltip, setTooltip] = createSignal<string>();
  const [snackbar, setSnackbar] = createSignal(false);

  const handleDisplay = (id: string) => setTooltip(id);

  const handleResetTooltip = () => setTooltip();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbar(true);

      setTimeout(() => {
        handleResetTooltip();
        setSnackbar(false);
      }, 4000);
    });
  };

  return (
    <>
      {snackbar() && <Notification />}

      <ul class='flex justify-between screen view rounded leagues'>
        <For each={Object.keys(Category)}>
          {(league) => {
            const id = createUniqueId();

            return (
              <li
                class={currentLeague === league ? 'current-league' : 'league'}
              >
                <button
                  disabled={snackbar()}
                  class='backward'
                  onClick={() => handleCopy(league)}
                  onFocusIn={() => handleDisplay(id)}
                  onMouseEnter={() => handleDisplay(id)}
                  onMouseLeave={handleResetTooltip}
                  onFocusOut={handleResetTooltip}
                  aria-describedby={id}
                >
                  {league.substring(0, 1)}
                </button>

                {tooltip() === id && (
                  <div role='tooltip' id={id} class='tooltip box'>
                    {league}
                  </div>
                )}
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
};

export default Leagues;
