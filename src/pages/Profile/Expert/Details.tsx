import { Component, createSignal } from 'solid-js';

import ArrowDownIcon from '../../../assets/icons/arrow-down-circle.svg';

import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ShapeIcon } from '../../../global/theme';
import { IDType } from '../../../global';
import { getDB, DB_STORE_TABLE } from '../../../services/db';

const Details: Component<IDType> = (props) => {
  const [modal, setModal] = createSignal('');

  const handleSubmit = async () => {
    if (!modal()) {
      try {
        const db = await getDB();
        const response = await db.get(DB_STORE_TABLE, props.id);
        setModal(response.price);
      } catch (err) {
        console.error('Failed to load detail', err);
      }
    }
  };

  return (
    <div class="flex gap items-center">
      <button
        type="button"
        class={ShapeIcon.Default}
        onClick={handleSubmit}
        aria-disabled={!!modal()}
      >
        <HelpTooltip name="Peek">
          <ArrowDownIcon />
        </HelpTooltip>
      </button>

      {modal() && <span class="chip price term">{modal()}</span>}
    </div>
  );
};

export default Details;
