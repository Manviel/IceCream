import { ParentComponent, Accessor, createSignal } from 'solid-js';

import DocCopyIcon from '../../../../assets/icons/doc-copy.svg';

import { IDType } from '../../../../models';

import Notes from '../Notes';
import Tooltip from '../../../../components/Tooltip';

interface PortfolioType<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: (cost: number) => string;
}

const INIT_HELP = 'Copy to clipboad';
const ID_HELP = 'snackbar-tooltip';

const Portfolio: ParentComponent<PortfolioType<number>> = (props) => {
  const { children, id, fairPriceCost, fairPricePercent } = props;

  const [snackbar, setSnackbar] = createSignal<string>(INIT_HELP);

  const handleResetTooltip = () => {
    setSnackbar(INIT_HELP);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fairPriceCost().toFixed(2));

      setSnackbar('Copied');
    } catch (err) {
      setSnackbar('Failed to copy');
    }
  };

  return (
    <fieldset class='grid products portfolio'>
      <legend class='subtitle card-navigation'>{id}</legend>

      {children}

      <div class='flex col ghost os' role='status'>
        <p>Fair Price (in $)</p>

        <div class='flex items-center justify-between'>
          <strong class='subtitle'>{fairPriceCost().toFixed(2)}</strong>

          <Tooltip
            id={ID_HELP}
            name='Clone'
            onClick={handleCopy}
            onClose={handleResetTooltip}
            snackbar={snackbar}
          >
            <DocCopyIcon />
          </Tooltip>
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
