import { ParentComponent, Accessor, createSignal } from 'solid-js';

import DocCopyIcon from '../../../../assets/icons/doc-copy.svg';

import { IDType } from '../../../../global';

import Tooltip from '../../../../components/Tooltip';
import { Bundle } from '../../../../components/Card/Stack';

import Notes from '../Notes';

interface IPortfolio<T> extends IDType {
  fairPriceCost: Accessor<T>;
  fairPricePercent: Accessor<T>;
}

const INIT_HELP = 'Copy to clipboad';

const Portfolio: ParentComponent<IPortfolio<number>> = props => {
  const [snackbar, setSnackbar] = createSignal<string>(INIT_HELP);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.fairPriceCost().toFixed(2));

      setSnackbar('Copied');
    } catch {
      setSnackbar('Failed to copy');
    }
  };

  return (
    <fieldset>
      <legend class="subtitle card-header">{props.id}</legend>

      <div class="grid proximity portfolio">
        {props.children}

        <Bundle theme="ghost" title="Fair Price (in $)" description={props.fairPriceCost}>
          <Tooltip name="Clone" onClick={handleCopy} snackbar={snackbar}>
            <DocCopyIcon />
          </Tooltip>
        </Bundle>

        <Bundle theme="material" title="Fair Price (in %)" description={props.fairPricePercent}>
          <Notes />
        </Bundle>
      </div>
    </fieldset>
  );
};

export default Portfolio;
