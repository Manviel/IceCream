import type { Component } from 'solid-js';

import Header from '../Header';
import BackwardNavigation from '../Header/BackwardNavigation';

import './Loader.css';

const Loader: Component = () => (
  <aside class='pulse-loading view rounded content-full material' aria-busy>
    <div class='loader box rounded'></div>
    <div class='skeleton box rounded screen'></div>
  </aside>
);

export const Skeleton: Component = () => (
  <aside class='app flex col content-full' aria-busy>
    <BackwardNavigation subtitle='Please wait' />

    <div class='panel content-full flex col'>
      <Header spot='Downloading updates' />

      <div class='info skeleton box rounded'></div>
    </div>

    <div class='panel content-full'>
      <Loader />
    </div>
  </aside>
);

export default Loader;
