import { Component, createEffect } from 'solid-js';

import Field from '../../../../components/Field';
import NumberField, { PercentField } from '../../../../components/Field/NumberField';

import { useStore } from './useStore';
import Portfolio from './Portfolio';

const Growth: Component = () => {
  const { store, handleChangeStore, fairPriceCost, setFairPriceCost, fairPricePercent } =
    useStore();

  createEffect(() => {
    const FPC = (store.revenue * (1 + store.revenueGrowth / 100) * store.ps) / store.sharesOut;

    setFairPriceCost(FPC);
  });

  return (
    <Portfolio id="Growth" fairPriceCost={fairPriceCost} fairPricePercent={fairPricePercent}>
      <NumberField
        name="priceData"
        label="Price (in $)"
        value={store.priceData}
        onChange={handleChangeStore}
      />

      <NumberField
        name="sharesOut"
        label="Shares Outstanding (in M)"
        value={store.sharesOut}
        onChange={handleChangeStore}
      />

      <NumberField
        name="revenue"
        label="Sales (in M)"
        value={store.revenue}
        onChange={handleChangeStore}
      />

      <PercentField
        name="revenueGrowth"
        label="Sales past 5Y (in %)"
        value={store.revenueGrowth}
        onChange={handleChangeStore}
      />

      <PercentField name="ps" label="P / S" value={store.ps} onChange={handleChangeStore} />

      <Field
        name="ticker"
        label="Ticker"
        type="text"
        value={store.ticker}
        onInput={handleChangeStore}
      />
    </Portfolio>
  );
};

export default Growth;
