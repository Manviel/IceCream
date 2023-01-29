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

const Dividend: Component = () => {
  const [store, setStore] = createStore({
    priceData: 143.66,
    sharesOut: 16030,
    dividend: 0.92,
    dividendPercent: 0,
    netIncome: 99800,
    netIncomeGrowth: 8.28,
    roe: 160.9,
    pb: 23.18,
    fairPriceCost: 0,
    fairPricePercent: 0,
  });

  createEffect(() => {
    const dividendPercent = store.priceData / store.dividend;
    const fairPriceCost =
      (store.pb * store.netIncome * (1 + store.netIncomeGrowth)) /
      store.roe /
      store.sharesOut;
    const fairPricePercent = fairPriceCost / (store.priceData - 1);

    setStore({ dividendPercent, fairPriceCost, fairPricePercent });
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
        name='dividend'
        label='Dividents (in $)'
        type='number'
        value={store.dividend}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <Field
        name='dividendPercent'
        label='Dividents (in %)'
        type='number'
        value={store.dividendPercent}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <Field
        name='netIncome'
        label='Income'
        type='number'
        value={store.netIncome}
        min={MIN_COST}
        step={STEP}
        max={MAX_COST}
        onChange={handleChange}
      />

      <Field
        name='netIncomeGrowth'
        label='EPS next 5Y (in %)'
        type='number'
        value={store.netIncomeGrowth}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <Field
        name='roe'
        label='ROE (in %)'
        type='number'
        value={store.roe}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <Field
        name='pb'
        label='P / B'
        type='number'
        value={store.pb}
        min={MIN_PERCENT}
        step={STEP}
        max={MAX_PERCENT}
        onChange={handleChange}
      />

      <div class='ghost view rounded'>
        <p>Fair Price (in $)</p>
        <strong class='box-description'>
          {store.fairPriceCost.toFixed(2)}
        </strong>
      </div>

      <div class='price view rounded'>
        <p>Fair Price (in %)</p>
        <strong class='box-description'>
          {store.fairPricePercent.toFixed(2)}
        </strong>
      </div>
    </div>
  );
};

export default Dividend;
