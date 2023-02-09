import type { Component } from 'solid-js';

import { SegregationType } from '../../models';

import './Card.css';

interface CardType extends SegregationType {
  number: number;
  measure?: string;
}

const Card: Component<CardType> = ({ number, description, title, measure }) => (
  <div class='view box rounded'>
    <sup class='card-sub'>{title}</sup>
    <strong class='card-text accent'>
      {number}
      <span class='card-measure'>{measure}</span>
    </strong>
    <sub class='term grey-dark'>{description}</sub>
  </div>
);

export default Card;
