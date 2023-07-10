import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import Breathe from './Breathe';

const Relax: Component = () => (
  <PageDecorator subtitle='Keep calm' headline='And carry on'>
    <h3 class='info'>Add a fixed toolbar at the bottom</h3>

    <Breathe />
  </PageDecorator>
);

export default Relax;
