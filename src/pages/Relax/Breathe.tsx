import { Component, For } from 'solid-js';

import './Breathe.css';

const LIST = [1, 2, 3, 4, 5, 6];

const Breathe: Component = () => (
  <article class='box view rounded flex col items-center'>
    <h2 class='subtitle card-header'>The future of health</h2>

    <p class='grey-dark info'>Inhale and Exhale</p>
    <ul class='breathe'>
      <For each={LIST}>{() => <li class='circle shape'></li>}</For>
    </ul>
    <p class='grey-dark info'>
      Taking moments throughout the day to stop, relax, and practice mindfulness
      can help reduce stress and improve overall health.
    </p>
  </article>
);

export default Breathe;
