import { createSignal } from 'solid-js';

type ChartSource = {
  labels: string[];
  datasets: number[];
};

export const useLegends = (labels: string[], datasets: number[]) => {
  const [legend, setLegend] = createSignal<number>(0);

  const handleHover = (pos: number) => setLegend(pos);

  const getItem = (index: number) => `${labels[index]}: ${datasets[index]}`;

  return { legend, handleHover, getItem };
};

export const useChartSource = (src: {}): ChartSource => {
  return {
    labels: Object.keys(src),
    datasets: Object.values(src),
  };
};
