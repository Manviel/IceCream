import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type ProductViewProps = {
  implementation: JSX.Element;
};

const ProductView: Component<ProductViewProps> = props => {
  return props.implementation;
};

export const ListProductView: Component<ProductViewProps> = ({ implementation }) => {
  return (
    <section class="flex col line-item">
      <ProductView implementation={implementation} />
    </section>
  );
};

export const GridProductView: Component<ProductViewProps> = ({ implementation }) => {
  return (
    <section class="grid gap items-start grid-item">
      <ProductView implementation={implementation} />
    </section>
  );
};
