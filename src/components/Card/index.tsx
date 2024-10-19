import type { Component } from 'solid-js';

import { ISegregation } from '../../global';
import { getStack } from '../../global/theme';

interface ICard extends ISegregation {
  number: number;
}

const Card: Component<ICard> = ({ number, description, title }) => (
  <div class={getStack('box')}>
    <h4 class="concise card-sup">{title}</h4>

    <strong class="flex card-text tab">
      {number}
      <span class="concise grey-dark">{description}</span>
    </strong>
  </div>
);

export default Card;
