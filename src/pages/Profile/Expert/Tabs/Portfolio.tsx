import { ParentComponent, Accessor } from 'solid-js';

import { IDType } from '../../../../models';

import '../../Profile.css';

interface PortfolioType<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: (cost: number) => string;
}

const Portfolio: ParentComponent<PortfolioType<number>> = (props) => {
  const { children, id, fairPriceCost, fairPricePercent } = props;

  return (
    <fieldset class='grid products portfolio'>
      <legend class='subtitle'>{id}</legend>

      {children}

      <div class='ghost view rounded' role='status'>
        <p>Fair Price (in $)</p>
        <strong class='box-description'>{fairPriceCost().toFixed(2)}</strong>
      </div>

      <div class='document view rounded'>
        <p>Fair Price (in %)</p>
        <strong class='box-description'>
          {fairPricePercent(fairPriceCost())}
        </strong>
      </div>
    </fieldset>
  );
};

export default Portfolio;
