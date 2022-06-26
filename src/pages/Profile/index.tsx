import { createSignal, Component } from 'solid-js';

import Header from '../../components/Header';
import RadioField from '../../components/RadioField';
import Quote from '../../components/Card/Quote';

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

      <Header spot='And new superpower' />

      <Quote />

      <b class='badge flex items-center rounded info' id='edge-design'>
        <i class={`indicator ${theme()}`}></i>Design Gallery
      </b>

      <ul
        role='radiogroup'
        class='flex col theme-list rounded'
        aria-labelledby='edge-design'
      >
        <li class='flex items-center'>
          <RadioField
            onChange={handleChange}
            id='orange-theme'
            name='app-theme'
            title='Orange'
          />
        </li>
        <li class='flex items-center'>
          <RadioField
            onChange={handleChange}
            id='blue-theme'
            name='app-theme'
            title='Blue'
          />
        </li>
        <li class='flex items-center'>
          <RadioField
            onChange={handleChange}
            id='night-theme'
            name='app-theme'
            title='Midnight'
          />
        </li>
      </ul>

      <button class='btn' onClick={handleSubmit}>
        Update theme
      </button>
    </div>
  );
};

export default Profile;
