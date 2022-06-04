import type { Component } from 'solid-js';

import './Loader.css';

const Loader: Component = () => (
  <div class='card rounded content-full pulse-loading'>
    <p class='bar rounded card-description'></p>
    <p class='bar rounded card-description'></p>
  </div>
);

export default Loader;
