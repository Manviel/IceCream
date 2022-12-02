import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Paths } from '../../models';

import './Breathe.css';

const Breathe: Component = () => (
  <article class='box view rounded screen flex col items-center'>
    <h3 class='subtitle'>The future of health</h3>
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

    <Link href={Paths.Expert} class='btn'>
      Go to Onboarding
    </Link>
  </article>
);

export default Breathe;
