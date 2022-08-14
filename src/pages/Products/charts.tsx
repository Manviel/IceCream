import { createSignal } from 'solid-js';

export const useLegends = (labels: string[], datasets: number[]) => {
  const [legend, setLegend] = createSignal<number>(0);

  const handleHover = (pos: number) => setLegend(pos);

  const getItem = (index: number) => `${labels[index]}: ${datasets[index]}`;

  return { legend, handleHover, getItem };
};
