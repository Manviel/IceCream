import type { Component } from 'solid-js';

import './Loader.css';

const Loader: Component = () => (
  <aside class='pulse-loading view rounded content-full' aria-busy>
    <p class='loader box rounded'>Loading...</p>
    <div class='loader box rounded'></div>
    <div class='spinner box rounded'></div>
  </aside>
);

export const Skeleton: Component = () => (
  <>
    <aside class='pulse-loading view rounded content-full' aria-busy>
      <header class='flex justify-between items-center'>
        <div class='subtitle skeleton loader box rounded'></div>
        <div class='skeleton loader box rounded'></div>
      </header>
      <div class='title loader box rounded'></div>
      <p class='info loader box rounded'>Please wait...</p>
      <div class='screen loader box rounded'></div>
      <footer class='products'>
        <div class='loader box rounded content-full'></div>
        <div class='loader box rounded content-full'></div>
      </footer>
    </aside>

    <Loader />
  </>
);

export default Loader;
