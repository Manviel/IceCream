import type { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import Header from '../../components/Header';

const NotFound: Component = () => (
  <div class='layer view rounded content-full flex col items-center'>
    <Header spot='404' />

    <h2 class='subtitle'>Not Found</h2>

    <p class='info'>Sorry, we can't find that page!</p>

    <Link href='/' class='btn'>
      Back to Home page
    </Link>
  </div>
);

export default NotFound;
