import { Component, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import Field from '../../../../components/Field';

import {
  MIN_PERCENT,
  MAX_PERCENT,
  MIN_COST,
  MAX_COST,
  STEP,
} from '../../../../models/config';

import '../../Profile.css';

const Growth: Component = () => {
  const [store, setStore] = createStore({
    priceData: 143.66,
    sharesOut: 16030,
    revenue: 394330,
    revenueGrowth: 11.5,
    ps: 5.67,
    fairPriceCost: 0,
    fairPricePercent: 0,
    ticker: 'AAPL',
  });

  createEffect(() => {
    const fairPriceCost =
      (store.revenue * (1 + store.revenueGrowth / 100) * store.ps) /
      store.sharesOut;
    const fairPricePercent = fairPriceCost / store.priceData - 1;

    setStore({ fairPriceCost, fairPricePercent });
  });

  const handleChange = ({ target }: any) =>
    setStore({ [target.name]: target.value });

  return (
    <div class='grid products portfolio'>
      <Field
        name='priceData'
        label='Price (in $)'
        type='number'
        value={store.priceData}
        min={MIN_COST}
        step={STEP}
        max={MAX_COST}
        onChange={handleChange}
      />

      <Field
        name='sharesOut'
        label='Shares Outstanding (in M)'
        type='number'
        value={store.sharesOut}
        min={MIN_COST}
        step={STEP}
        max={MAX_COST}
        onChange={handleChange}
      />

      <Field
        name='revenue'
        label='Sales (in M)'
        type='number'
        value={store.revenue}
        min={MIN_COST}
        step={STEP}
        max={MAX_COST}
        onChange={handleChange}
      />

      <Field
        name='revenueGrowth'
        label='Sales past 5Y (in %)'
        type='number'
        value={store.revenueGrowth}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <Field
        name='ps'
        label='P / S'
        type='number'
        value={store.ps}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <Field
        name='ticker'
        label='Ticker'
        type='text'
        value={store.ticker}
        onChange={handleChange}
      />

      <div class='ghost view rounded'>
        <p>Fair Price (in $)</p>
        <strong class='box-description'>
          {store.fairPriceCost.toFixed(2)}
        </strong>
      </div>

      <div class='document view rounded'>
        <p>Fair Price (in %)</p>
        <strong class='box-description'>
          {(store.fairPricePercent * 100).toFixed(2)}
        </strong>
      </div>
    </div>
  );
};

export default Growth;
