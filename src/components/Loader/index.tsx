import type { Component } from 'solid-js';

import './Loader.css';

const Loader: Component = () => (
  <aside class='pulse-loading view rounded content-full' aria-busy>
    <div class='loader rounded'></div>
    <div class='loader rounded'></div>
    <div class='loader rounded'></div>
  </aside>
);

export const Skeleton: Component = () => (
  <>
    <aside class='pulse-loading view rounded content-full' aria-busy>
      <header class='flex justify-between items-center'>
        <div class='subtitle skeleton loader rounded'></div>
        <div class='skeleton loader rounded '></div>
      </header>
      <div class='title loader rounded'></div>
      <div class='info loader rounded'></div>
      <div class='screen loader rounded'></div>
      <footer class='products'>
        <div class='loader rounded content-full'></div>
        <div class='loader rounded content-full'></div>
      </footer>
    </aside>

    <Loader />
  </>
);

export default Loader;
