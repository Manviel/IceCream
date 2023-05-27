import { Component } from 'solid-js';

import Results from '../Results';
import Notes from '../Notes';

const Toolbar: Component = () => {
  return (
    <div class='flex gap'>
      <Notes />

      <Results />
    </div>
  );
};

export default Toolbar;
