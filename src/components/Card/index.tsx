import type { Component } from 'solid-js';

import { ISegregation } from '../../global';
import { getStack } from '../../global/theme';

interface ICard extends ISegregation<string> {
  number: number;
}

const Card: Component<ICard> = (props) => (
  <div class={getStack('box')}>
    <h4 class="concise card-sup">{props.title}</h4>

    <strong class="flex card-text tab">
      {props.number}
      <span class="concise grey-dark">{props.description}</span>
    </strong>
  </div>
);

export default Card;
