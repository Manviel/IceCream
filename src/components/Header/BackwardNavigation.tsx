import { Component, onMount } from 'solid-js';

import Header from '.';

export interface IBackwardNavigation {
  subtitle: string;
}

const BackwardNavigation: Component<IBackwardNavigation> = ({ subtitle }) => {
  onMount(() => {
    document.title = `${subtitle} - iFruit`;
  });

  return <Header spot={subtitle} />;
};

export default BackwardNavigation;
