import type { Component } from 'solid-js';

import './Card.css';

type CardType = {
  description: string;
  number: string | number;
  phrase: string;
  measure?: string;
};

const Card: Component<CardType> = ({
  number,
  description,
  phrase,
  measure,
}) => (
  <div class='view card rounded'>
    <sup class='card-sub'>{phrase}</sup>
    <strong class='card-text on-scroll'>
      {number}
      <span class='card-measure'>{measure}</span>
    </strong>
    <sub class='card-sub'>{description}</sub>
  </div>
);

export default Card;
