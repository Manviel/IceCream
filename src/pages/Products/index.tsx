import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import Header from '../../components/Header';

import Inbox from './Inbox';
import Stocks from './Stocks';
import Health from './Health';
import Vault from './Vault';

import './Products.css';

const Products: Component = () => {
  return (
    <div class='page view rounded content-full flex col'>
      <Header spot='Products' />

      <h2 class='text info'>Quick actions and features</h2>

      <article class='products'>
        <Link href='/' class='view layer rounded flex col widget'>
          <h3 class='widget-title'>Back</h3>
          <p class='widget-main'>Home page</p>
        </Link>

        <Inbox />
        <Stocks />
        <Health />
        <Vault />

        <div class='view'>Subscriptions</div>
      </article>
    </div>
  );
};

export default Products;
