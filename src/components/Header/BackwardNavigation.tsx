import { Component, onMount } from 'solid-js';
import { Link } from '@solidjs/router';

import CloseIcon from '../../assets/icons/close.svg';

export interface BackwardNavigationType {
  subtitle: string;
  customPath?: string;
}

const BackwardNavigation: Component<BackwardNavigationType> = ({
  subtitle,
  customPath,
}) => {
  onMount(() => {
    document.title = `${subtitle} - iFruit`;
  });

  return (
    <header class='sticky depth panel flex justify-between items-center'>
      <h1 class='subtitle'>{subtitle}</h1>

      {customPath && (
        <Link
          href={customPath}
          class='flex justify-center items-center shape token'
          aria-label='Go Back'
        >
          <CloseIcon />
        </Link>
      )}
    </header>
  );
};

export default BackwardNavigation;
