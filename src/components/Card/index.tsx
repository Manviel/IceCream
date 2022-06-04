import type { Component } from 'solid-js';

import './Card.css';

type CardType = {
  number: string | number;
  description: string;
};

const Card: Component<CardType> = ({ number, description }) => {
  return (
    <section class='glass-card rounded'>
      <strong class='glass-text'>{number}</strong>
      <p class='glass-bot'>{description}</p>
    </section>
  );
};

export default Card;
