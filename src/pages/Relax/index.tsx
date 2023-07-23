import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import Breathe from './Breathe';
import LoginForm from './LoginForm';

const Relax: Component = () => (
  <PageDecorator headline='Keep calm' subtitle='And carry on'>
    <Breathe />

    <LoginForm />
  </PageDecorator>
);

export default Relax;
