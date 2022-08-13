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
      >
        <path
          d='M 0,351.8559889247681 C 40,339.4985922113387 119.99999999999999,286.7064713732217 200,290.0690053576211 C 280,293.4315393420205 320,398.68477639283157 400,368.6686588467653 C 480,338.65254130069906 520,172.0701244255574 600,139.98841762728995 C 680,107.9067108290225 720,220.73253047665995 800,208.2601248554281 C 880,195.7877192341963 960,103.75313658799033 1000,77.62638952113087,L 1000 500,L 0 500Z'
          fill='#00e3961a'
        />
        <path
          d='M 0,351.8559889247681 C 40,339.4985922113387 119.99999999999999,286.7064713732217 200,290.0690053576211 C 280,293.4315393420205 320,398.68477639283157 400,368.6686588467653 C 480,338.65254130069906 520,172.0701244255574 600,139.98841762728995 C 680,107.9067108290225 720,220.73253047665995 800,208.2601248554281 C 880,195.7877192341963 960,103.75313658799033 1000,77.62638952113087'
          fill='none'
          stroke={ChartColors.Green}
          stroke-width='4px'
        />
        <g></g>
      </svg>
    </article>
  );
};

export default Stocks;
