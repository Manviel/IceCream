import { Component } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import NewsFeed from '../NewsFeed';

import Inbox from './Inbox';
import Stocks from './Stocks';
import Health from './Health';
import Vault from './Vault';
import Promotions from './Promotions';
import Subscriptions from './Subscriptions';

import './Products.css';

const Products: Component = () => {
  return (
    <PageDecorator subtitle='For You' headline='Products'>
      <h3 class='info'>Quick actions and features</h3>

      <div class='grid products'>
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
