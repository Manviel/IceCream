import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Pages, Paths } from '../../models';
import { ActionTypes } from '../../models/config';

import PageDecorator from '../../components/PageDecorator';

const Forbidden: Component = () => (
  <PageDecorator headline={Pages.Forbidden} subtitle='403'>
    <div class='layer view rounded content-full flex col'>
      <h3 class='info card-sub'>
        You don't have permissions to access this resource!
      </h3>

      <Link href={Paths.SignIn} class={ActionTypes.Contained}>
        {Pages.SignIn}
      </Link>
    </div>
  </PageDecorator>
);

export default Forbidden;
