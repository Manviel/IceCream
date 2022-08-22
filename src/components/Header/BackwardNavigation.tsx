import { Component, onMount } from 'solid-js';
import { Link } from '@solidjs/router';

export interface BackwardNavigationType {
  subtitle: string;
  hideBackward?: boolean;
  customPath?: string;
}

const BackwardNavigation: Component<BackwardNavigationType> = ({
  subtitle,
  hideBackward,
  customPath,
}) => {
  onMount(() => {
    document.title = `${subtitle} - iFruit`;
  });

  return (
    <header class='sticky depth panel flex justify-between items-center'>
      <strong class='subtitle'>{subtitle}</strong>

      {!hideBackward && (
        <Link
          href={customPath ? `/${customPath}` : '/'}
          class='flex justify-center items-center backward'
          aria-label='Go Back'
        >
          <i class='arrow arrow-right'></i>
        </Link>
      )}
    </header>
  );
};

export default BackwardNavigation;
