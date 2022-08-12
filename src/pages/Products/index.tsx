import { Component } from 'solid-js';
import Chart from 'chart.js/auto';

import HeaderTemplate from '../../components/Header/HeaderTemplate';
import PageDecorator from '../../components/PageDecorator';

import Inbox from './Inbox';
import Stocks from './Stocks';
import Health from './Health';
import Vault from './Vault';
import Promotions from './Promotions';
import Subscriptions from './Subscriptions';

import './Products.css';
import './Charts.css';

Chart.defaults.plugins.legend.position = 'bottom';

const Products: Component = () => {
  return (
    <PageDecorator>
      <HeaderTemplate subtitle='For You' headline='Products' />

      <h2 class='info'>Quick actions and features</h2>

      <div class='products'>
        <Vault />
        <Inbox />
        <Stocks />
        <Health />
        <Promotions />
        <Subscriptions />
      </div>
    </PageDecorator>
  );
};

export default Products;
