import { createSignal, Accessor, Component } from 'solid-js';

type ChartSource = {
  labels: string[];
  datasets: number[];
};

type ChartLegendType<T> = {
  legend: Accessor<T>;
};

export const useLegends = ({ labels, datasets }: ChartSource) => {
  const [legend, setLegend] = createSignal<string | null>('0');

  const getItem = (index: number) => `${labels[index]}: ${datasets[index]}`;

  const handleHover = (e: Event) => {
    const { target } = e;

    const value = (target as HTMLInputElement).ariaLabel;

    setLegend(value);
  };

  const handleReader = (node: Element, pos: number) => {
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', getItem(pos));

    node.addEventListener('mouseover', handleHover);
    node.addEventListener('focusin', handleHover);
  };

  return { handleReader, getItem, legend };
};

export const useChartSource = (src: {}): ChartSource => {
  return {
    labels: Object.keys(src),
    datasets: Object.values(src),
  };
};

export const ChartLegend: Component<ChartLegendType<string | null>> = (
  props
) => {
  const { legend } = props;

  return (
    <dl class='flex content-full justify-between items-center widget-legend'>
      <dt>Selected:</dt>
      <dd class='chip widget-tooltip'>{legend()}</dd>
    </dl>
  );
};
