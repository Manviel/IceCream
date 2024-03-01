import type { Component } from 'solid-js';

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

export default Loader;
