import type { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import PageDecorator from '../../components/PageDecorator';

const NotFound: Component = () => (
  <PageDecorator subtitle='Not Found' headline='404' hideBackward>
    <div class='layer view rounded content-full flex col screen'>
      <h2 class='info'>Sorry, we can't find that page!</h2>

      <Link href='/' class='btn'>
        Back to Home page
      </Link>
    </div>
  </PageDecorator>
);

export default NotFound;
