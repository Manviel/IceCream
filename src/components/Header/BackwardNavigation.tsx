import { Component, onMount } from 'solid-js';

import Header from '.';

export interface BackwardNavigationType {
  subtitle: string;
}

const BackwardNavigation: Component<BackwardNavigationType> = ({
  subtitle,
}) => {
  onMount(() => {
    document.title = `${subtitle} - iFruit`;
  });

  return <Header spot={subtitle} />;
};

export default BackwardNavigation;
