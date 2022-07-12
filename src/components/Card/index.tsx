import type { Component } from 'solid-js';

import './Card.css';

type CardType = {
  number: string | number;
  description: string;
  phrase: string;
  measure?: string;
};

const Card: Component<CardType> = ({
  number,
  description,
  phrase,
  measure,
}) => (
  <div class='card layer rounded'>
    <sup class='card-sub'>{phrase}</sup>
    <strong class='card-text on-scroll'>
      {number}
      <span class='card-measure'>{measure}</span>
    </strong>
    <sub class='card-sub'>{description}</sub>
  </div>
);

export default Card;
