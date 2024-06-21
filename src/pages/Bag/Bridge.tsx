import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type ProductViewProps = {
  implementation: JSX.Element;
};

const ProductView: Component<ProductViewProps> = (props) => {
  return props.implementation;
};

export const ListProductView: Component<ProductViewProps> = (props) => {
  return (
    <div class='line-item'>
      <ProductView implementation={props.implementation} />
    </div>
  );
};

export const GridProductView: Component<ProductViewProps> = (props) => {
  return (
    <div class='grid-item'>
      <ProductView implementation={props.implementation} />
    </div>
  );
};
