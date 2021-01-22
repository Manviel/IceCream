import { JSX } from "solid-js/jsx-runtime";

import "./Card.css";

type CardType = {
  number: string;
  description: string;
};

function Card({ number, description }: CardType): JSX.Element {
  return (
    <section className="glass-card">
      <h4 className="glass-text bold">{number}</h4>
      <p className="glass-bot">{description}</p>
    </section>
  );
}

export default Card;
