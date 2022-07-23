import type { Component } from 'solid-js';

import './Loader.css';

const Loader: Component = () => (
  <aside class='pulse-loading rounded content-full'>
    <p class='loader rounded'></p>
    <p class='loader rounded'></p>
    <p class='loader rounded'></p>
  </aside>
);

export default Loader;
