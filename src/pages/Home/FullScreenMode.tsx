import { Component, createSignal } from 'solid-js';

import EnterScreenIcon from '../../assets/icons/enter-screen.svg';
import ExitScreenIcon from '../../assets/icons/exit-screen.svg';

import { ActionTypes } from '../../models/config';

const FullScreenMode: Component = () => {
  const [hasFullscreen, setHasFullscreen] = createSignal(false);

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
    <article class='box os flex justify-between items-center'>
      <div class='flex col widget-title'>
        <h3 class='card-sub grey-dark'>Full screen</h3>
        <p class='term teal'>{hasFullscreen() ? 'Active' : 'Inactive'}</p>
      </div>

      <button
        type='button'
        onClick={toggleFullScreen}
        class={ActionTypes.ShapeIcon}
        aria-label='Full screen mode'
        aria-pressed={hasFullscreen()}
      >
        {hasFullscreen() ? <ExitScreenIcon /> : <EnterScreenIcon />}
      </button>
    </article>
  );
};

export default FullScreenMode;
