import type { Component } from 'solid-js';

import Header from '../../components/Header';

import FaceDashedIcon from '../../assets/icons/face-dashed.svg';

import './Profile.css';

const Profile: Component = () => (
  <div class='layer view rounded content-full'>
    <header class='flex justify-between items-center'>
      <strong class='subtitle'>Your Profile</strong>

      <FaceDashedIcon />
    </header>

    <Header spot='Your new superpower' />

    <b class='badge flex items-center rounded info' id='edge-design'>
      <i class='indicator'></i>Design Gallery
    </b>

    <ul
      role='radiogroup'
      class='flex col theme-list'
      aria-labelledby='edge-design'
    >
      <li class='flex items-center'>
        <input
          type='radio'
          id='green-theme'
          name='app-theme'
          value='Green'
          class='form-radio'
        />
        <label for='green-theme' class='form-label'>
          Green
        </label>
      </li>
      <li class='flex items-center'>
        <input
          type='radio'
          id='blue-theme'
          name='app-theme'
          value='Blue'
          class='form-radio'
        />
        <label for='blue-theme' class='form-label'>
          Blue
        </label>
      </li>
      <li class='flex items-center'>
        <input
          type='radio'
          id='night-theme'
          name='app-theme'
          value='Midnight'
          class='form-radio'
        />
        <label for='night-theme' class='form-label'>
          Midnight
        </label>
      </li>
    </ul>

    <button class='btn'>Update theme</button>
  </div>
);

export default Profile;
