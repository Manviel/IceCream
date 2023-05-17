import { ParentComponent, Accessor } from 'solid-js';

import { IDType } from '../../../../models';

interface PortfolioType<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: (cost: number) => string;
}

const Portfolio: ParentComponent<PortfolioType<number>> = (props) => {
  const { children, id, fairPriceCost, fairPricePercent } = props;

  return (
    <fieldset class='grid products portfolio'>
      <legend class='subtitle card-measure'>{id}</legend>

      {children}

      <div class='flex col ghost os' role='status'>
        <p>Fair Price (in $)</p>
        <strong class='subtitle'>{fairPriceCost().toFixed(2)}</strong>
      </div>

      <div class='flex col document os' role='log'>
        <p>Fair Price (in %)</p>
        <strong class='subtitle'>{fairPricePercent(fairPriceCost())}</strong>
      </div>
    </fieldset>
  );
};

export default Portfolio;
