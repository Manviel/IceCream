import { Component } from 'solid-js';

import Header from '../../components/Header';
import BackwardNavigation from '../../components/Header/BackwardNavigation';

import Inbox from './Inbox';
import Stocks from './Stocks';
import Health from './Health';
import Vault from './Vault';

import './Products.css';

const Products: Component = () => {
  return (
    <div class='page view rounded content-full flex col'>
      <BackwardNavigation subtitle='For You' />

      <Header spot='Products' />

      <h2 class='text info'>Quick actions and features</h2>

      <article class='products'>
        <a
          href='https://prytulafoundation.org/uk/home/support_page'
          target='_blank'
          rel='noopener noreferrer'
          class='view layer rounded flex col widget'
        >
          <h3 class='widget-title'>Promotions</h3>
          <p class='widget-main'>Save Ukraine</p>
        </a>

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
