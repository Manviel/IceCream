import { createSignal, Component, For } from 'solid-js';
import { Label, RadioGroup, RadioGroupOption } from 'solid-a11y';

import Quote from '../../components/Card/Quote';
import HeaderTemplate from '../../components/Header/HeaderTemplate';
import PageDecorator from '../../components/PageDecorator';

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
    <PageDecorator>
      <HeaderTemplate subtitle='Your Profile' headline='And new superpower' />

      <Quote />

      <article class='layer view rounded content-full'>
        <h3 class='badge flex items-center rounded info'>
          <i class={`indicator ${theme()}`}></i>Design Gallery
        </h3>

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
      </article>
    </PageDecorator>
  );
};

export default Profile;
