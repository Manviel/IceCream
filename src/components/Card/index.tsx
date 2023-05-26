import type { Component } from 'solid-js';

import { SegregationType } from '../../models';

import './Card.css';

interface CardType extends SegregationType {
  number: number;
}

const Card: Component<CardType> = ({ number, description, title }) => (
  <div class='flex col view box rounded'>
    <p class='card-sub grey-dark'>{title}</p>
    <strong class='flex card-text accent'>
      {number}
      <span class='term card-sup'>{description}</span>
    </strong>
  </div>
);

export default Card;
