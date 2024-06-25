import { Component, createEffect, createSignal } from 'solid-js';

import NumberField, { PercentField } from '../../../../components/Field/NumberField';

import { useStore } from './useStore';
import Portfolio from './Portfolio';

const Dividend: Component = () => {
  const { store, handleChangeStore, fairPricePercent } = useStore();

  const [fairPriceCost, setFairPriceCost] = createSignal(0);

  createEffect(() => {
    const FPC =
      (store.pb * store.netIncome * (1 + store.netIncomeGrowth / 100)) /
      (store.roe / 100) /
      store.sharesOut;

    setFairPriceCost(FPC);
  });

  return (
    <Portfolio id="Dividend" fairPriceCost={fairPriceCost} fairPricePercent={fairPricePercent}>
      <NumberField
        name="priceData"
        label="Price (in $)"
        value={store.priceData}
        onInput={handleChangeStore}
      />

      <NumberField
        name="sharesOut"
        label="Shares Outstanding (in M)"
        value={store.sharesOut}
        onInput={handleChangeStore}
      />

      <NumberField
        name="netIncome"
        label="Income (in M)"
        value={store.netIncome}
        onInput={handleChangeStore}
      />

      <PercentField
        name="netIncomeGrowth"
        label="EPS next 5Y (in %)"
        value={store.netIncomeGrowth}
        onInput={handleChangeStore}
      />

      <PercentField name="roe" label="ROE (in %)" value={store.roe} onInput={handleChangeStore} />

      <PercentField name="pb" label="P / B" value={store.pb} onInput={handleChangeStore} />
    </Portfolio>
  );
};

export default Dividend;
