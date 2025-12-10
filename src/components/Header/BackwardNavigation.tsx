import { Component, onMount } from 'solid-js';

import Header from '.';

export interface IBackwardNavigation {
  subtitle: string;
}

const BackwardNavigation: Component<IBackwardNavigation> = (props) => {
  onMount(() => {
    document.title = `${props.subtitle} - iFruit`;
  });

  return <Header spot={props.subtitle} />;
};

export default BackwardNavigation;
