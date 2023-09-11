import { Component, createSignal } from 'solid-js';

import ArrowDownIcon from '../../../assets/icons/arrow-down-circle.svg';

import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ActionTypes } from '../../../models/config';
import { IDType } from '../../../models';
import { transformCase } from '../../../services/utils';
import { useDataBase, DB_STORE_TABLE } from '../../../services/db';

const Details: Component<IDType> = ({ id }) => {
  const [modal, setModal] = createSignal('');

  const handleSubmit = async () => {
    if (!modal()) {
      const db = await useDataBase();

      const result = await db.get(DB_STORE_TABLE, id);

      setModal(result.price);

      db.close();
    }
  };

  return (
    <div class='flex gap items-center'>
      <button
        type='button'
        class={ActionTypes.ShapeIcon}
        onClick={handleSubmit}
        aria-disabled={!!modal()}
      >
        <HelpTooltip name='Peek' id={transformCase(id)}>
          <ArrowDownIcon />
        </HelpTooltip>
      </button>

      {modal() && <span class='chip document term'>{modal()}</span>}
    </div>
  );
};

export default Details;
