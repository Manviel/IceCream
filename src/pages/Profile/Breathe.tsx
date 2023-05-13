import type { Component } from 'solid-js';

import { SubTitle } from '../../components/Header';

import './Breathe.css';

const Breathe: Component = () => (
  <article class='box view rounded screen flex col items-center'>
    <SubTitle spot='The future of health' />
    <p class='grey-dark info'>Inhale and Exhale</p>
    <ul class='breathe'>
      <li class='circle'></li>
      <li class='circle'></li>
      <li class='circle'></li>
      <li class='circle'></li>
      <li class='circle'></li>
      <li class='circle'></li>
    </ul>
    <p class='grey-dark info'>
      Taking moments throughout the day to stop, relax, and practice mindfulness
      can help reduce stress and improve overall health.
    </p>
  </article>
);

export default Breathe;
