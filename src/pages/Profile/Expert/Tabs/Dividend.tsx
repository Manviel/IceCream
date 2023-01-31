import { Component, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import NumberField, {
  PercentField,
} from '../../../../components/Field/NumberField';

import '../../Profile.css';

const Dividend: Component = () => {
  const [store, setStore] = createStore({
    priceData: 143.66,
    sharesOut: 16030,
    netIncome: 99800,
    netIncomeGrowth: 8.28,
    roe: 160.9,
    pb: 23.18,
    fairPriceCost: 0,
    fairPricePercent: 0,
  });

  createEffect(() => {
    const fairPriceCost =
      (store.pb * store.netIncome * (1 + store.netIncomeGrowth / 100)) /
      (store.roe / 100) /
      store.sharesOut;
    const fairPricePercent = fairPriceCost / store.priceData - 1;

    setStore({ fairPriceCost, fairPricePercent });
  });

  const handleChange = ({ target }: any) =>
    setStore({ [target.name]: target.value });

  return (
    <div class='grid products portfolio'>
      <NumberField
        name='priceData'
        label='Price (in $)'
        value={store.priceData}
        onChange={handleChange}
      />

      <NumberField
        name='sharesOut'
        label='Shares Outstanding (in M)'
        value={store.sharesOut}
        onChange={handleChange}
      />

      <NumberField
        name='netIncome'
        label='Income (in M)'
        value={store.netIncome}
        onChange={handleChange}
      />

      <PercentField
        name='netIncomeGrowth'
        label='EPS next 5Y (in %)'
        value={store.netIncomeGrowth}
        onChange={handleChange}
      />

      <PercentField
        name='roe'
        label='ROE (in %)'
        value={store.roe}
        onChange={handleChange}
      />

      <PercentField
        name='pb'
        label='P / B'
        value={store.pb}
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
          {(store.fairPricePercent * 100).toFixed(2)}
        </strong>
      </div>
    </div>
  );
};

export default Dividend;
