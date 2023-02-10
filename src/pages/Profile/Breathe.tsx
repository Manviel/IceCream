import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Paths } from '../../models';

import './Breathe.css';

const Breathe: Component = () => (
  <article class='box view rounded screen flex col items-center'>
    <h3 class='subtitle'>The future of health</h3>
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

    <Link href={Paths.Expert} class='btn contained'>
      Go to Onboarding
    </Link>
  </article>
);

export default Breathe;
