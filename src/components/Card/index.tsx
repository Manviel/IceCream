import type { Component } from 'solid-js';

import { SegregationType } from '../../models';
import { getStack } from '../../models/theme';

interface CardType extends SegregationType {
  number: number;
}

const Card: Component<CardType> = ({ number, description, title }) => (
  <div class={getStack('box')}>
    <h4 class='concise card-sup'>{title}</h4>

    <strong class='flex card-text widget-title'>
      {number}
      <span class='concise grey-dark'>{description}</span>
    </strong>
  </div>
);

export default Card;
