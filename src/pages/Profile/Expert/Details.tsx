import { Component, createSignal } from 'solid-js';

import ArrowDownIcon from '../../../assets/icons/arrow-down-circle.svg';

import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ShapeIcon } from '../../../global/theme';
import { IDType } from '../../../global';
import { useDataBase, DB_STORE_TABLE } from '../../../services/db';

const Details: Component<IDType> = ({ id }) => {
  const [modal, setModal] = createSignal('');

  const handleSubmit = async () => {
    if (!modal()) {
      const db = await useDataBase();

      const response = await db.get(DB_STORE_TABLE, id);

      setModal(response.price);

      db.close();
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
