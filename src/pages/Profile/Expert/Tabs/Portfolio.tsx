import { ParentComponent, Accessor } from 'solid-js';

import { IDType } from '../../../../models';

import { useStore } from './useStore';

import '../../Profile.css';

interface PortfolioType<T> extends IDType {
  fairPriceCost: Accessor<T>;
}

const Portfolio: ParentComponent<PortfolioType<number>> = (props) => {
  const { fairPricePercent } = useStore();

  const { children, id, fairPriceCost } = props;

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
