import { Component } from 'solid-js';

import { ChartColors } from '../../../models';
import { CIRCLE_RADIUS } from '../../../models/config';
import { average } from '../../../services/utils';
import { useLegends } from '../charts';

const source = {
  Ipsy: 10,
  Birchbox: 10,
  Netflix: 19.9,
  Hulu: 6.9,
  'Blue Apron': 8.7,
  'Amazon Prime': 5.9,
  Spotify: 4.9,
  'Apple Music': 9.9,
  'Apple TV+': 4.9,
  'Youtube Premium': 11.9,
  'Hello Fresh': 9.9,
  'HBO Max': 14.9,
};

const chartID = 'chart-subscriptions';

const Subscriptions: Component = () => {
  const labels = Object.keys(source);
  const datasets = Object.values(source);

  const { legend, handleHover, getItem } = useLegends(labels, datasets);

  return (
    <article class='layer view rounded flex col widget-chart'>
      <h3 class='widget-title'>Subscriptions</h3>
      <p class='term'>Average fee is ${Math.round(average(datasets))}</p>
      <svg
        id={chartID}
        class='conditions widget-line'
        viewBox='0 0 1000 500'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Services'
      >
        <path
          d='M 0,126.73280556497213 C 18.2,149.8724683148845 54.6,197.38609953949577 91,242.43111931453387 C 127.4,287.476139089572 145.6,357.8715106771722 182,351.95790444016257 C 218.4,346.04429820315295 236.6,218.61798441483458 273,212.8630881294859 C 309.4,207.10819184413725 327.6,289.8420861932219 364,323.18342301341926 C 400.4,356.5247598336166 418.6,421.6730119272794 455,379.56977223047255 C 491.4,337.4665325336657 509.6,128.68850319775436 546,112.66722452938495 C 582.4,96.64594586101553 600.6,278.10754784597225 637,299.46337888862547 C 673.4,320.8192099312787 691.6,211.82766641930644 728,219.446379742651 C 764.4,227.06509306599557 782.6,350.7840672737794 819,337.55694550534827 C 855.4,324.32982373691715 873.6,171.45249985336216 910,153.31077090049536 C 946.4,135.16904194762856 982.8,228.14079477291048 1001,246.84830074101427,L 1000 500,L 0 500Z'
          fill='currentColor'
        />
        <path
          d='M 0,126.73280556497213 C 18.2,149.8724683148845 54.6,197.38609953949577 91,242.43111931453387 C 127.4,287.476139089572 145.6,357.8715106771722 182,351.95790444016257 C 218.4,346.04429820315295 236.6,218.61798441483458 273,212.8630881294859 C 309.4,207.10819184413725 327.6,289.8420861932219 364,323.18342301341926 C 400.4,356.5247598336166 418.6,421.6730119272794 455,379.56977223047255 C 491.4,337.4665325336657 509.6,128.68850319775436 546,112.66722452938495 C 582.4,96.64594586101553 600.6,278.10754784597225 637,299.46337888862547 C 673.4,320.8192099312787 691.6,211.82766641930644 728,219.446379742651 C 764.4,227.06509306599557 782.6,350.7840672737794 819,337.55694550534827 C 855.4,324.32982373691715 873.6,171.45249985336216 910,153.31077090049536 C 946.4,135.16904194762856 982.8,228.14079477291048 1001,246.84830074101427'
          fill='none'
          stroke={ChartColors.Purple}
          stroke-width='6px'
        />
        <g>
          <circle
            cx='0'
            cy='126.73280556497213'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(0)}
            tabindex='0'
            onMouseEnter={() => handleHover(0)}
            onFocus={() => handleHover(0)}
          />
          <circle
            cx='91'
            cy='242.43111931453387'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(1)}
            tabindex='0'
            onMouseEnter={() => handleHover(1)}
            onFocus={() => handleHover(1)}
          />
          <circle
            cx='182'
            cy='351.95790444016257'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(2)}
            tabindex='0'
            onMouseEnter={() => handleHover(2)}
            onFocus={() => handleHover(2)}
          />
          <circle
            cx='273'
            cy='212.8630881294859'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(3)}
            tabindex='0'
            onMouseEnter={() => handleHover(3)}
            onFocus={() => handleHover(3)}
          />
          <circle
            cx='364'
            cy='323.18342301341926'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(4)}
            tabindex='0'
            onMouseEnter={() => handleHover(4)}
            onFocus={() => handleHover(4)}
          />
          <circle
            cx='455'
            cy='379.56977223047255'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(5)}
            tabindex='0'
            onMouseEnter={() => handleHover(5)}
            onFocus={() => handleHover(5)}
          />
          <circle
            cx='546'
            cy='112.66722452938495'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(6)}
            tabindex='0'
            onMouseEnter={() => handleHover(6)}
            onFocus={() => handleHover(6)}
          />
          <circle
            cx='637'
            cy='299.46337888862547'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(7)}
            tabindex='0'
            onMouseEnter={() => handleHover(7)}
            onFocus={() => handleHover(7)}
          />
          <circle
            cx='728'
            cy='219.446379742651'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(8)}
            tabindex='0'
            onMouseEnter={() => handleHover(8)}
            onFocus={() => handleHover(8)}
          />
          <circle
            cx='819'
            cy='337.55694550534827'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(9)}
            tabindex='0'
            onMouseEnter={() => handleHover(9)}
            onFocus={() => handleHover(9)}
          />
          <circle
            cx='910'
            cy='153.31077090049536'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(10)}
            tabindex='0'
            onMouseEnter={() => handleHover(10)}
            onFocus={() => handleHover(10)}
          />
          <circle
            cx='1001'
            cy='246.84830074101427'
            r={CIRCLE_RADIUS}
            fill={ChartColors.Purple}
            aria-roledescription={getItem(11)}
            tabindex='0'
            onMouseEnter={() => handleHover(11)}
            onFocus={() => handleHover(11)}
          />
        </g>
      </svg>
      <small class='conditions'>Selected - {getItem(legend())}$</small>
    </article>
  );
};

export default Subscriptions;
