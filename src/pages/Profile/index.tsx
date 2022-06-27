import { createSignal, Component, For } from 'solid-js';
import { Label, RadioGroup, RadioGroupOption } from 'solid-a11y';

import Header from '../../components/Header';
import Quote from '../../components/Card/Quote';

import FaceDashedIcon from '../../assets/icons/face-dashed.svg';

import './Profile.css';

const options = [
  {
    value: 'blue-theme',
    label: 'Blue',
  },
  {
    value: 'orange-theme',
    label: 'Orange',
  },
  {
    value: 'night-theme',
    label: 'Midnight',
  },
];

const Profile: Component = () => {
  const [theme, setTheme] = createSignal<string>(options[0].value);

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

      <b class='badge flex items-center rounded info'>
        <i class={`indicator ${theme()}`}></i>Design Gallery
      </b>

      <RadioGroup class='flex col' value={theme()} onChange={setTheme}>
        <For each={options}>
          {(option) => (
            <RadioGroupOption
              value={option.value}
              class='flex items-center form-item rounded'
            >
              {({ checked }) => (
                <>
                  <i class={`form-radio ${checked() && 'radio-checked'}`}></i>
                  <Label class='form-label'>{option.label}</Label>
                </>
              )}
            </RadioGroupOption>
          )}
        </For>
      </RadioGroup>

      <button class='btn' onClick={handleSubmit}>
        Update theme
      </button>
    </div>
  );
};

export default Profile;
