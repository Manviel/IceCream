import { Component, createSignal } from 'solid-js';

import EnterScreenIcon from '../../assets/icons/enter-screen.svg';
import ExitScreenIcon from '../../assets/icons/exit-screen.svg';

import { ShapeIcon, getGroup } from '../../global/theme';

const FullScreenMode: Component = () => {
  const [hasFullscreen, setHasFullscreen] = createSignal(!!document.fullscreenElement);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();

      setHasFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();

      setHasFullscreen(false);
    }
  };

  return (
    <article class={getGroup('box items-center')}>
      <header class="flex col tab">
        <h3 class="card-sub">Full screen</h3>
        <p class="term grey-dark">{hasFullscreen() ? 'Active' : 'Inactive'}</p>
      </header>

      <button
        type="button"
        onClick={toggleFullScreen}
        class={ShapeIcon.Default}
        aria-label="Full screen mode"
        aria-pressed={hasFullscreen()}
      >
        {hasFullscreen() ? <ExitScreenIcon /> : <EnterScreenIcon />}
      </button>
    </article>
  );
};

export default FullScreenMode;
