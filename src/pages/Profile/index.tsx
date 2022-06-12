import { createSignal, Component } from 'solid-js';

import Header from '../../components/Header';

import FaceDashedIcon from '../../assets/icons/face-dashed.svg';

import './Profile.css';

const Profile: Component = () => {
  const [theme, setTheme] = createSignal<string>('');

  const handleChange = (e: any) => setTheme(e.target.value);

  const handleSubmit = () => {
    document.body.className = theme();
  };

  return (
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
        class='flex col theme-list rounded'
        aria-labelledby='edge-design'
      >
        <li class='flex items-center'>
          <input
            type='radio'
            id='green-theme'
            name='app-theme'
            value='green-theme'
            class='form-radio'
            onChange={handleChange}
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
            value='blue-theme'
            class='form-radio'
            onChange={handleChange}
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
            value='night-theme'
            class='form-radio'
            onChange={handleChange}
          />
          <label for='night-theme' class='form-label'>
            Midnight
          </label>
        </li>
      </ul>

      <button class='btn' onClick={handleSubmit}>
        Update theme
      </button>
    </div>
  );
};

export default Profile;
