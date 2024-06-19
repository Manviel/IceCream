import type { Component } from 'solid-js';

import { SegregationType } from '../../models';
import { getStack } from '../../models/theme';

interface ProtoType extends SegregationType {
  hasColSpan?: boolean;
  hasRowSpan?: boolean;
}

const Shelf: Component<ProtoType> = ({
  description,
  title,
  hasColSpan = false,
  hasRowSpan = false,
}) => (
  <div
    class={getStack('card')}
    classList={{ 'os-column': hasColSpan, 'os-row': hasRowSpan }}
  >
    <strong class='card-sub'>{title}</strong>
    <p class='term grey-light'>{description}</p>
  </div>
);

export default Shelf;
