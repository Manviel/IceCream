import type { Component } from 'solid-js';

import { ISegregation } from '../../global';

interface IShelf extends ISegregation {
  hasColSpan?: boolean;
  hasRowSpan?: boolean;
}

const Shelf: Component<IShelf> = ({
  description,
  title,
  hasColSpan = false,
  hasRowSpan = false
}) => (
  <div class="flex col os card" classList={{ 'col-span-2': hasColSpan, 'os-row': hasRowSpan }}>
    <strong class="card-sub">{title}</strong>
    <p class="term grey-light">{description}</p>
  </div>
);

export default Shelf;
