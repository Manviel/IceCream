import type { Component } from 'solid-js';

import { ShelfType } from './Shelf';

import './Card.css';

interface CardType extends ShelfType {
  number: string | number;
  measure?: string;
}

const Card: Component<CardType> = ({
  number,
  description,
  phrase,
  measure,
}) => (
  <div class='view card rounded'>
    <sup class='card-sub'>{phrase}</sup>
    <strong class='card-text'>
      {number}
      <span class='card-measure'>{measure}</span>
    </strong>
    <sub class='card-sub'>{description}</sub>
  </div>
);

export default Card;
