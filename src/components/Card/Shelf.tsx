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
  <div
    class='os card'
    classList={{ 'os-column': hasColSpan, 'os-row': hasRowSpan }}
  >
    <abbr class='os-title'>{title}</abbr>
    <p class='os-value term grey-light'>{description}</p>
  </div>
);

export default Shelf;
