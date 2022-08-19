import { Component } from 'solid-js';

import PageDecorator from '../../../components/PageDecorator';

const Expert: Component = () => {
  return (
    <PageDecorator
      subtitle='Expert'
      headline='Onboarding'
      customPath='profile'
    ></PageDecorator>
  );
};

export default Expert;
