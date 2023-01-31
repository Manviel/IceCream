import { Component, createEffect, createSignal } from 'solid-js';

import Field from '../../../../components/Field';
import NumberField, {
  PercentField,
} from '../../../../components/Field/NumberField';

import { useStore } from './useStore';

import '../../Profile.css';

const Growth: Component = () => {
  const { store, handleChangeStore, fairPricePercent } = useStore();

  const [fairPriceCost, setFairPriceCost] = createSignal(0);

  createEffect(() => {
    const FPC =
      (store.revenue * (1 + store.revenueGrowth / 100) * store.ps) /
      store.sharesOut;

    setFairPriceCost(FPC);
  });

  return (
    <div class='grid products portfolio'>
      <NumberField
        name='priceData'
        label='Price (in $)'
        value={store.priceData}
        onChange={handleChangeStore}
      />

      <NumberField
        name='sharesOut'
        label='Shares Outstanding (in M)'
        value={store.sharesOut}
        onChange={handleChangeStore}
      />

      <NumberField
        name='revenue'
        label='Sales (in M)'
        value={store.revenue}
        onChange={handleChangeStore}
      />

      <PercentField
        name='revenueGrowth'
        label='Sales past 5Y (in %)'
        value={store.revenueGrowth}
        onChange={handleChangeStore}
      />

      <PercentField
        name='ps'
        label='P / S'
        value={store.ps}
        onChange={handleChangeStore}
      />

      <Field
        name='ticker'
        label='Ticker'
        type='text'
        value={store.ticker}
        onChange={handleChangeStore}
      />

      <div class='ghost view rounded'>
        <p>Fair Price (in $)</p>
        <strong class='box-description'>{fairPriceCost().toFixed(2)}</strong>
      </div>

      <div class='document view rounded'>
        <p>Fair Price (in %)</p>
        <strong class='box-description'>
          {fairPricePercent(fairPriceCost())}
        </strong>
      </div>
    </div>
  );
};

export default Growth;
