import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import Breathe from './Breathe';
import LoginForm from './LoginForm';

const Relax: Component = () => (
  <PageDecorator subtitle='Keep calm' headline='And carry on'>
    <h3 class='info'>Add a fixed toolbar at the bottom</h3>

    <Breathe />

    <LoginForm />
  </PageDecorator>
);

export default Relax;
