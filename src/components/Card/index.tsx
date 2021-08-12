import { JSX } from "solid-js/jsx-runtime";

import "./Card.css";

type CardType = {
  number: string | number;
  description: string;
};

function Card({ number, description }: CardType): JSX.Element {
  return (
    <section className="glass-card rounded">
      <h3 className="glass-text">{number}</h3>
      <p className="glass-bot">{description}</p>
    </section>
  );
}

export default Card;
