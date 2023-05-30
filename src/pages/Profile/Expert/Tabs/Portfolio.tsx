import { ParentComponent, Accessor, createSignal } from 'solid-js';
import { computePosition, offset } from '@floating-ui/dom';

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

  const [snackbar, setSnackbar] = createSignal<string>(INIT_HELP);

  let tooltip: HTMLButtonElement;
  let button: HTMLButtonElement;

  const updateTooltip = () => {
    computePosition(button, tooltip, {
      placement: 'top',
      middleware: [offset(4)],
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  };

  const handleDisplay = () => {
    tooltip.style.display = 'block';

    updateTooltip();
  };

  const handleResetTooltip = () => {
    tooltip.style.display = '';

    setSnackbar(INIT_HELP);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fairPriceCost().toFixed(2));

      setSnackbar('Copied');
    } catch (err) {
      setSnackbar('Failed to copy');
    }

    updateTooltip();
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
            <span
              role='tooltip'
              id={ID_HELP}
              class='tooltip chip'
              ref={tooltip!}
            >
              {snackbar}
            </span>

            <button
              type='button'
              ref={button!}
              class={ActionTypes.ShapeIcon}
              onClick={handleCopy}
              aria-label='Clone'
              aria-describedby={ID_HELP}
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
