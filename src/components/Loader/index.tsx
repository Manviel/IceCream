import type { Component } from 'solid-js';

import './Loader.css';

type LoaderBuilderType = {
  hasBox?: boolean;
};

const Loader: Component<LoaderBuilderType> = ({ hasBox }) => (
  <aside class='pulse-loading rounded content-full'>
    <p class='loader rounded'></p>
    {hasBox && (
      <div class='paper-grid'>
        <p class='loader loader-box rounded'></p>

        <p class='loader loader-box rounded'></p>
      </div>
    )}
    <p class='loader rounded'></p>
    <p class='loader rounded'></p>
  </aside>
);

export default Loader;
