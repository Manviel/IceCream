import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

import { Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import PageDecorator from '../../components/PageDecorator';

const NotFound: Component = () => (
  <PageDecorator headline="Not Found" subtitle="404">
    <div class="layer view rounded content-full flex col">
      <h3 class="info card-sub">Sorry, we can't find that page!</h3>

      <A href={Paths.Home} class={ActionTypes.Contained}>
        Back to Home page
      </A>
    </div>
  </PageDecorator>
);

export default NotFound;
