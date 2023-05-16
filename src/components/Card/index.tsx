import type { Component } from 'solid-js';

import { SegregationType } from '../../models';

import './Card.css';

interface CardType extends SegregationType {
  number: number;
}

const Card: Component<CardType> = ({ number, description, title }) => (
  <div class='flex col view box rounded'>
    <sup class='card-sub'>{title}</sup>
    <strong class='flex card-text accent'>
      {number}
      <span class='term grey-dark'>{description}</span>
    </strong>
  </div>
);

export default Card;
