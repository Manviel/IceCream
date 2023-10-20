import { ParentComponent, Accessor, createSignal } from 'solid-js';

import DocCopyIcon from '../../../../assets/icons/doc-copy.svg';

import { IDType } from '../../../../models';

import Tooltip from '../../../../components/Tooltip';

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

  const handleResetTooltip = () => setSnackbar(INIT_HELP);

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
      <legend class='subtitle card-header'>{id}</legend>

      {children}

      <div class='flex items-center justify-between items-end ghost os'>
        <div class='flex col lockup' role='status'>
          <p>Fair Price (in $)</p>
          <strong class='subtitle'>{fairPriceCost().toFixed(2)}</strong>
        </div>

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

      <div class='flex items-center justify-between items-end document os'>
        <div class='flex col lockup' role='status'>
          <p>Fair Price (in %)</p>
          <strong class='subtitle'>{fairPricePercent(fairPriceCost())}</strong>
        </div>

        <Notes />
      </div>
    </fieldset>
  );
};

export default Portfolio;
