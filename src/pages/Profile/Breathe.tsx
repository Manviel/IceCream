import type { Component } from 'solid-js';

import './Breathe.css';

const Breathe: Component = () => (
  <footer class='box view rounded screen flex col items-center'>
    <h4 class='subtitle'>The future of health</h4>
    <p class='grey info'>Inhale and Exhale</p>
    <div class='breathe'>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
    </div>
    <p class='grey info'>
      Taking moments throughout the day to stop, relax, and practice mindfulness
      can help reduce stress and improve overall health.
    </p>
  </footer>
);

export default Breathe;
