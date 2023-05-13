import type { Component } from 'solid-js';

import Header from '../Header';

import './Loader.css';

const Loader: Component = () => (
  <aside class='pulse-loading view rounded content-full material' aria-busy>
    <div class='loader box rounded'></div>
    <div class='skeleton box rounded screen'></div>
  </aside>
);

export const Skeleton: Component = () => (
  <>
    <aside class='pulse-loading panel rounded content-full' aria-busy>
      <section class='sticky'>
        <h1 class='card-sub card-measure'>Please wait</h1>
      </section>

      <Header spot='Loading' />

      <div class='info skeleton box rounded'></div>
    </aside>

    <div class='panel content-full'>
      <Loader />
    </div>
  </>
);

export default Loader;
