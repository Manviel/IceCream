import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { JSX } from 'solid-js/jsx-runtime';

export const useStore = () => {
  const [store, setStore] = createStore({
    priceData: 143.66,
    sharesOut: 16030,
    netIncome: 99800,
    netIncomeGrowth: 8.28,
    roe: 160.9,
    pb: 23.18,
    revenue: 394330,
    revenueGrowth: 11.5,
    ps: 5.67,
    ticker: 'AAPL'
  });

  const [fairPriceCost, setFairPriceCost] = createSignal(0);
  const [fairPricePercent, setFairPricePercent] = createSignal(0);

  const handleChangeStore: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setStore({ [target.name]: target.value });

  createEffect(() => {
    const result = fairPriceCost() / store.priceData - 1;

    setFairPricePercent(result * 100);
  });

  return {
    store,
    handleChangeStore,
    fairPriceCost,
    setFairPriceCost,
    fairPricePercent,
    setFairPricePercent
  };
};
