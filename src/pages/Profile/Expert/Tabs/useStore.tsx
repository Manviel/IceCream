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

  const fairPricePercent = (fairPriceCost: number) => {
    const result = fairPriceCost / store.priceData - 1;

    return (result * 100).toFixed(2);
  };

  const handleChangeStore: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setStore({ [target.name]: target.value });

  return { store, handleChangeStore, fairPricePercent };
};
