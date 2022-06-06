import type { Component } from 'solid-js';

import Header from '../../components/Header';

import './Profile.css';

const Profile: Component = () => (
  <div class='layer rounded content-full'>
    <Header spot='Your profile' />

    <p class='info'>Flat-edge design</p>

    <b class='badge flex items-center rounded'>
      <i class='indicator'></i>Good level
    </b>
  </div>
);

export default Profile;
