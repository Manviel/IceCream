import { Component, createEffect, createSignal } from 'solid-js';

import NumberField, {
  PercentField,
} from '../../../../components/Field/NumberField';

import { useStore } from './useStore';
import Portfolio from './Portfolio';

const Dividend: Component = () => {
  const { store, handleChangeStore } = useStore();

  const [fairPriceCost, setFairPriceCost] = createSignal(0);

  createEffect(() => {
    const FPC =
      (store.pb * store.netIncome * (1 + store.netIncomeGrowth / 100)) /
      (store.roe / 100) /
      store.sharesOut;

    setFairPriceCost(FPC);
  });

  return (
    <Portfolio id='Dividend' fairPriceCost={fairPriceCost}>
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
        name='netIncome'
        label='Income (in M)'
        value={store.netIncome}
        onChange={handleChangeStore}
      />

      <PercentField
        name='netIncomeGrowth'
        label='EPS next 5Y (in %)'
        value={store.netIncomeGrowth}
        onChange={handleChangeStore}
      />

      <PercentField
        name='roe'
        label='ROE (in %)'
        value={store.roe}
        onChange={handleChangeStore}
      />

      <PercentField
        name='pb'
        label='P / B'
        value={store.pb}
        onChange={handleChangeStore}
      />
    </Portfolio>
  );
};

export default Dividend;
