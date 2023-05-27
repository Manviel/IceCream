import { ParentComponent, Accessor } from 'solid-js';

import DocCopyIcon from '../../../../assets/icons/doc-copy.svg';

import { IDType } from '../../../../models';
import { ActionTypes } from '../../../../models/config';

import Notes from '../Notes';

interface PortfolioType<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: (cost: number) => string;
}

const Portfolio: ParentComponent<PortfolioType<number>> = (props) => {
  const { children, id, fairPriceCost, fairPricePercent } = props;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fairPriceCost().toFixed(2));
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <fieldset class='grid products portfolio'>
      <legend class='subtitle card-measure'>{id}</legend>

      {children}

      <div class='flex col ghost os' role='status'>
        <p>Fair Price (in $)</p>

        <div class='flex items-center justify-between'>
          <strong class='subtitle'>{fairPriceCost().toFixed(2)}</strong>

          <button
            type='button'
            class={ActionTypes.ShapeIcon}
            onClick={handleCopy}
          >
            <DocCopyIcon />
          </button>
        </div>
      </div>

      <div class='flex col document os' role='log'>
        <p>Fair Price (in %)</p>

        <div class='flex items-center justify-between'>
          <strong class='subtitle'>{fairPricePercent(fairPriceCost())}</strong>

          <Notes />
        </div>
      </div>
    </fieldset>
  );
};

export default Portfolio;
