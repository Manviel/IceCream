import { createSignal, Component, For, Suspense } from 'solid-js';
import { Label, RadioGroup, RadioGroupOption } from 'solid-a11y';
import { Link } from '@solidjs/router';

import Loader from '../../components/Loader';
import Quote from '../../components/Card/Quote';
import PageDecorator from '../../components/PageDecorator';

import Breathe from './Breathe';

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

  return (
    <PageDecorator subtitle='Your Profile' headline='And new superpower'>
      <Suspense fallback={<Loader />}>
        <Quote />
      </Suspense>

      <article class='layer view rounded content-full screen'>
        <h3 class={`badge subtitle ${theme()}`}>Design Gallery</h3>

        <RadioGroup class='flex col' value={theme()} onChange={setTheme}>
          <For each={options}>
            {(option) => (
              <RadioGroupOption
                value={option.value}
                class='flex items-center badge form-item rounded'
              >
                {({ checked }) => (
                  <>
                    <i
                      class='form-radio'
                      classList={{ 'radio-checked': checked() }}
                    ></i>
                    <Label class='form-label'>{option.label}</Label>
                  </>
                )}
              </RadioGroupOption>
            )}
          </For>
        </RadioGroup>
      </article>

      <Breathe />

      <div class='layer view rounded content-full screen'>
        <Link href='/profile/expert' class='btn'>
          Go to Onboarding
        </Link>
      </div>
    </PageDecorator>
  );
};

export default Profile;
