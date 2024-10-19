import { ParentComponent, Accessor, createSignal } from 'solid-js';

import DocCopyIcon from '../../../../assets/icons/doc-copy.svg';

import { IDType } from '../../../../global';
import { getGroup } from '../../../../global/theme';

import Tooltip from '../../../../components/Tooltip';

import Notes from '../Notes';

interface IPortfolio<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: (cost: number) => string;
}

const INIT_HELP = 'Copy to clipboad';

const Portfolio: ParentComponent<IPortfolio<number>> = props => {
  const { children, id, fairPriceCost, fairPricePercent } = props;

  const [snackbar, setSnackbar] = createSignal<string>(INIT_HELP);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fairPriceCost().toFixed(2));

      setSnackbar('Copied');
    } catch {
      setSnackbar('Failed to copy');
    }
  };

  return (
    <fieldset>
      <legend class="subtitle card-header">{id}</legend>

      <div class="grid products proximity portfolio">
        {children}

        <div class={getGroup('ghost items-end')}>
          <div class="flex col lockup" role="status">
            <p>Fair Price (in $)</p>
            <strong class="subtitle">{fairPriceCost().toFixed(2)}</strong>
          </div>

          <Tooltip name="Clone" onClick={handleCopy} snackbar={snackbar}>
            <DocCopyIcon />
          </Tooltip>
        </div>

        <div class={getGroup('material items-end')}>
          <div class="flex col lockup" role="status">
            <p>Fair Price (in %)</p>
            <strong class="subtitle">{fairPricePercent(fairPriceCost())}</strong>
          </div>

          <Notes />
        </div>
      </div>
    </fieldset>
  );
};

export default Portfolio;
