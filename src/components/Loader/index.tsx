import type { Component } from 'solid-js';

import './Loader.css';

const Loader: Component = () => (
  <div class='pulse-loading rounded content-full'>
    <p class='loader rounded'></p>
    <p class='loader rounded'></p>
    <p class='loader rounded'></p>
  </div>
);

export default Loader;
