import { Component, onMount } from 'solid-js';
import { Link } from 'solid-app-router';

type BackwardNavigationType = {
  subtitle: string;
  hideBackward?: boolean;
};

const BackwardNavigation: Component<BackwardNavigationType> = ({
  subtitle,
  hideBackward,
}) => {
  onMount(() => {
    document.title = `iFruit - ${subtitle}`;
  });

  return (
    <header class='flex justify-between items-center'>
      <strong class='subtitle'>{subtitle}</strong>

      {!hideBackward && (
        <Link
          href='/'
          class='flex justify-center items-center backward'
          aria-label='Back to Home page'
        >
          <i class='arrow arrow-right'></i>
        </Link>
      )}
    </header>
  );
};

export default BackwardNavigation;
