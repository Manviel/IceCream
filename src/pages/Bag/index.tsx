import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { Pages } from '../../models';

const Bag: Component = () => {
  return (
    <PageDecorator
      headline={Pages.Bag}
      subtitle='Endless potential'
    ></PageDecorator>
  );
};

export default Bag;
