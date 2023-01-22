import type { Component } from 'solid-js';

import { SegregationType } from '../../models';

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
  <div class='os' classList={{ 'os-column': hasColSpan, 'os-row': hasRowSpan }}>
    <strong class='os-title'>{title}</strong>
    <p class='os-value grey-light'>{description}</p>
  </div>
);

export default Shelf;
