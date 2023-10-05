import type { Component } from 'solid-js';

import PageDecorator from '../PageDecorator';

import './Loader.css';

const Loader: Component = () => (
  <aside class='pulse-loading view rounded content-full material' aria-busy>
    <div
      class='loader box rounded'
      role='progressbar'
      aria-label='Loading'
    ></div>
    <div class='skeleton box rounded screen'></div>
  </aside>
);

export const Skeleton: Component = () => (
  <PageDecorator headline='Please wait' subtitle='Downloading updates'>
    <div class='pulse-loading info skeleton box rounded'></div>

    <Loader />
  </PageDecorator>
);

export default Loader;
