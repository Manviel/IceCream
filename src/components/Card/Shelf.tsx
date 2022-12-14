import type { Component } from 'solid-js';

export interface ShelfType {
  description: string;
  phrase: string;
}

interface ProtoType extends ShelfType {
  hasColSpan?: boolean;
  hasRowSpan?: boolean;
}

const Shelf: Component<ProtoType> = ({
  description,
  phrase,
  hasColSpan = false,
  hasRowSpan = false,
}) => (
  <div class='os' classList={{ 'os-column': hasColSpan, 'os-row': hasRowSpan }}>
    <strong class='os-title'>{phrase}</strong>
    <p class='os-value'>{description}</p>
  </div>
);

export default Shelf;
