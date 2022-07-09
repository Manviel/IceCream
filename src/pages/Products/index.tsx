import { Component } from 'solid-js';

import Header from '../../components/Header';
import BackwardNavigation from '../../components/Header/BackwardNavigation';

import Inbox from './Inbox';
import Stocks from './Stocks';
import Health from './Health';
import Vault from './Vault';
import Promotions from './Promotions';
import Subscriptions from './Subscriptions';

import './Products.css';
import './Charts.css';

const Products: Component = () => {
  return (
    <div class='page view rounded content-full flex col'>
      <BackwardNavigation subtitle='For You' />

      <Header spot='Products' />

      <h2 class='text info'>Quick actions and features</h2>

      <article class='products'>
        <Vault />
        <Inbox />
        <Stocks />
        <Health />
        <Promotions />
        <Subscriptions />
      </article>
    </div>
  );
};

export default Products;
