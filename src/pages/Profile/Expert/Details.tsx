import { Component, createSignal } from 'solid-js';
import { openDB } from 'idb';

import ArrowDownIcon from '../../../assets/icons/arrow-down-circle.svg';

import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ActionTypes } from '../../../models/config';
import { IDType } from '../../../models';
import { transformCase } from '../../../services/utils';

import { DB_NAME, DB_TABLE } from './Notes';

const Details: Component<IDType> = ({ id }) => {
  const [modal, setModal] = createSignal('');

  const handleSubmit = async () => {
    if (!modal()) {
      const db = await openDB(DB_NAME, 1);

      const result = await db.get(DB_TABLE, id);

      setModal(result);

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
