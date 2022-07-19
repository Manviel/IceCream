import type { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import HeaderTemplate from '../../components/Header/HeaderTemplate';

const NotFound: Component = () => (
  <div class='layer view rounded content-full flex col items-center'>
    <HeaderTemplate subtitle='Not Found' headline='404' hideBackward />

    <h2 class='info'>Sorry, we can't find that page!</h2>

    <Link href='/' class='btn'>
      Back to Home page
    </Link>
  </div>
);

export default NotFound;
