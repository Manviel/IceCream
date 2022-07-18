import type { Component } from 'solid-js';

import './Card.css';

interface DateBoxType {
  description: string;
}

interface CardType extends DateBoxType {
  number: string | number;
  phrase: string;
  measure?: string;
}

const Card: Component<CardType> = ({
  number,
  description,
  phrase,
  measure,
}) => (
  <div class='view layer rounded'>
    <sup class='card-sub'>{phrase}</sup>
    <strong class='card-text on-scroll'>
      {number}
      <span class='card-measure'>{measure}</span>
    </strong>
    <sub class='card-sub'>{description}</sub>
  </div>
);

export const DateBox: Component<DateBoxType> = ({ description }) => (
  <div class='flex col box view rounded'>
    <time class='box-description'>{description.slice(7, 11)}</time>

    <strong class='subtitle'>{description.slice(0, 6)}</strong>
  </div>
);

export default Card;
