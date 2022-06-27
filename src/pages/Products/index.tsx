import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import Header from '../../components/Header';

import Inbox from './Inbox';
import Stocks from './Stocks';

import './Products.css';

const Products: Component = () => {
  return (
    <div class='page view rounded content-full flex col'>
      <Header spot='Products' />

      <p class='text info'>Quick actions and features</p>

      <article class='products'>
        <Link href='/' class='view layer rounded flex col widget'>
          <strong class='widget-title'>Back</strong>
          <p class='widget-main'>Home page</p>
        </Link>

        <Inbox />
        <Stocks />

        <button class='view'>Subscriptions</button>
        <button class='view'>Vault</button>
        <button class='view'>Health</button>
      </article>
    </div>
  );
};

export default Products;
