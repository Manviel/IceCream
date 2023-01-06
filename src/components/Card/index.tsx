import type { Component } from 'solid-js';

import { SegregationType } from '../../models';

import './Card.css';

interface CardType extends SegregationType {
  number: string | number;
  measure?: string;
}

const Card: Component<CardType> = ({ number, description, title, measure }) => (
  <div class='view card rounded'>
    <sup class='card-sub'>{title}</sup>
    <strong class='card-text'>
      {number}
      <span class='card-measure'>{measure}</span>
    </strong>
    <sub class='card-sub'>{description}</sub>
  </div>
);

export default Card;
