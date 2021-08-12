import { JSX } from "solid-js/jsx-runtime";

import "./Card.css";

type CardType = {
  number: string | number;
  description: string;
};

function Card({ number, description }: CardType): JSX.Element {
  return (
    <section className="glass-card rounded">
      <strong className="glass-text">{number}</strong>
      <p className="glass-bot">{description}</p>
    </section>
  );
}

export default Card;
