import { Component, onMount } from 'solid-js';

export interface BackwardNavigationType {
  subtitle: string;
}

const BackwardNavigation: Component<BackwardNavigationType> = ({
  subtitle,
}) => {
  onMount(() => {
    document.title = `${subtitle} - iFruit`;
  });

  return (
    <header class='sticky depth panel flex justify-between items-center'>
      <h1 class='subtitle'>{subtitle}</h1>
    </header>
  );
};

export default BackwardNavigation;
