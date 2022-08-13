import { Component } from 'solid-js';

import { ChartColors } from '../../../models';
import { average } from '../../../services/utils';

const source = {
  Dec: 180,
  Jan: 159,
  Feb: 172,
  Mar: 150,
  Apr: 174,
  May: 137,
};

const chartID = 'chart-stocks';

const Stocks: Component = () => {
  const labels = Object.keys(source);
  const datasets = Object.values(source);

  const getItem = (index: number) => `${labels[index]}: ${datasets[index]}`;

  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Stocks</h3>
      <p class='term'>
        Average price is equal to ${average(Object.values(source))}
      </p>
      <svg
        id={chartID}
        class='conditions'
        viewBox='0 0 1000 500'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='AAPL'
      >
        <path
          d='M 0,360.2309720703133 C 40.00000000000001,363.4265980060769 120,411.6733507581355 200,376.2091017491312 C 280,340.74485274012693 320,225.5791360206637 400,182.90972702529194 C 480,140.24031802992022 520,143.33287832826818 600,162.86205677227252 C 680,182.3912352162769 720,272.84376284951713 800,280.5556192453138 C 880,288.2674756411104 960,217.24819485006736 1000,201.42133875125575,L 1000 500,L 0 500Z'
          fill='#00e3961a'
        />
        <path
          d='M 0,360.2309720703133 C 40.00000000000001,363.4265980060769 120,411.6733507581355 200,376.2091017491312 C 280,340.74485274012693 320,225.5791360206637 400,182.90972702529194 C 480,140.24031802992022 520,143.33287832826818 600,162.86205677227252 C 680,182.3912352162769 720,272.84376284951713 800,280.5556192453138 C 880,288.2674756411104 960,217.24819485006736 1000,201.42133875125575'
          fill='none'
          stroke={ChartColors.Green}
          stroke-width='4px'
        />
        <g>
          <circle
            cx='0'
            cy='360.2309720703133'
            r='8'
            fill={ChartColors.Green}
            aria-roledescription={getItem(0)}
            tabindex='0'
          />
          <circle
            cx='200'
            cy='376.2091017491312'
            r='8'
            fill={ChartColors.Green}
            aria-roledescription={getItem(1)}
            tabindex='0'
          />
          <circle
            cx='400'
            cy='182.90972702529194'
            r='8'
            fill={ChartColors.Green}
            aria-roledescription={getItem(2)}
            tabindex='0'
          />
          <circle
            cx='600'
            cy='162.86205677227252'
            r='8'
            fill={ChartColors.Green}
            aria-roledescription={getItem(3)}
            tabindex='0'
          />
          <circle
            cx='800'
            cy='280.5556192453138'
            r='8'
            fill={ChartColors.Green}
            aria-roledescription={getItem(4)}
            tabindex='0'
          />
          <circle
            cx='1000'
            cy='201.42133875125575'
            r='8'
            fill={ChartColors.Green}
            aria-roledescription={getItem(5)}
            tabindex='0'
          />
        </g>
      </svg>
    </article>
  );
};

export default Stocks;
