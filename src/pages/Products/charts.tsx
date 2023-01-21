type ChartSource = {
  labels: string[];
  datasets: number[];
};

export const useLegends = ({ labels, datasets }: ChartSource) => {
  const getItem = (index: number) => `${labels[index]}: ${datasets[index]}`;

  const handleHover = (node: Element, pos: number, legend: string) => {
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', `${getItem(pos)} ${legend}`);
  };

  return { handleHover, getItem };
};

export const useChartSource = (src: {}): ChartSource => {
  return {
    labels: Object.keys(src),
    datasets: Object.values(src),
  };
};
