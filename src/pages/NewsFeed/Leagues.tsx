import { Component, createSignal, createUniqueId } from 'solid-js';

import Notification from './Notification';

type LeagueType = {
  currentLeague: string | number;
};

const Leagues: Component<LeagueType> = ({ currentLeague }) => {
  const [tooltip, setTooltip] = createSignal(false);
  const [snackbar, setSnackbar] = createSignal(false);

  const handleDisplay = () => setTooltip(true);

  const handleResetTooltip = () => setTooltip(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbar(true);

      setTimeout(() => {
        handleResetTooltip();
        setSnackbar(false);
      }, 4000);
    });
  };

  const id = createUniqueId();

  return (
    <div class='league'>
      {snackbar() && <Notification />}

      <button
        disabled={snackbar()}
        class='paper'
        onClick={() => handleCopy(currentLeague.toString())}
        onFocusIn={handleDisplay}
        onMouseEnter={handleDisplay}
        onMouseLeave={handleResetTooltip}
        onFocusOut={handleResetTooltip}
        aria-describedby={id}
      >
        {currentLeague}
      </button>

      {tooltip() && (
        <div role='tooltip' id={id} class='tooltip box'>
          {currentLeague}
        </div>
      )}
    </div>
  );
};

export default Leagues;
