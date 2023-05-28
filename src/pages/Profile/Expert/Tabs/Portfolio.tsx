import { ParentComponent, Accessor, createSignal } from 'solid-js';

import DocCopyIcon from '../../../../assets/icons/doc-copy.svg';

import { IDType } from '../../../../models';
import { ActionTypes } from '../../../../models/config';

import Notes from '../Notes';

interface PortfolioType<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: (cost: number) => string;
}

const INIT_HELP = 'Copy to clipboad';
const ID_HELP = 'snackbar-tooltip';

const Portfolio: ParentComponent<PortfolioType<number>> = (props) => {
  const { children, id, fairPriceCost, fairPricePercent } = props;

  const [tooltip, setTooltip] = createSignal<string>(INIT_HELP);
  const [snackbar, setSnackbar] = createSignal(false);

  const handleDisplay = () => setSnackbar(true);

  const handleResetTooltip = () => {
    setSnackbar(false);
    setTooltip(INIT_HELP);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fairPriceCost().toFixed(2));

      setTooltip('Copied');
    } catch (err) {
      setTooltip('Failed to copy');
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

          <div class='snackbar'>
            {snackbar() && (
              <span role='tooltip' id={ID_HELP} class='tooltip chip'>
                {tooltip}
              </span>
            )}

            <button
              type='button'
              class={ActionTypes.ShapeIcon}
              onClick={handleCopy}
              aria-label='Clone'
              aria-describedby={snackbar() ? ID_HELP : undefined}
              onFocusIn={handleDisplay}
              onMouseEnter={handleDisplay}
              onMouseLeave={handleResetTooltip}
              onFocusOut={handleResetTooltip}
            >
              <DocCopyIcon />
            </button>
          </div>
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
