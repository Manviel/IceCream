import type { Component } from 'solid-js';
import { Link } from 'solid-app-router';

type BackwardNavigationType = {
  subtitle: string;
};

const BackwardNavigation: Component<BackwardNavigationType> = ({
  subtitle,
}) => (
  <header class='flex justify-between items-center'>
    <strong class='subtitle'>{subtitle}</strong>

    <Link
      href='/'
      class='flex justify-center items-center backward'
      aria-label='Back to Home page'
    >
      <i class='arrow arrow-right'></i>
    </Link>
  </header>
);

export default BackwardNavigation;
