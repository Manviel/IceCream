import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import NewsFeed from '../NewsFeed';

import { Pages } from '../../models';

import Inbox from './Inbox';
import Stocks from './Stocks';
import Health from './Health';
import Vault from './Vault';
import Promotions from './Promotions';
import Subscriptions from './Subscriptions';

import './Products.css';

const Products: Component = () => {
  return (
    <PageDecorator
      headline={Pages.Products}
      subtitle='Quick actions and features'
      isDark
    >
      <div class='grid products proximity insights'>
        <Vault />
        <Inbox />
        <Stocks />
        <Health />
        <Promotions />
        <Subscriptions />
      </div>

      <NewsFeed />
    </PageDecorator>
  );
};

export default Products;
