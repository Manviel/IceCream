import { Component, createSignal } from 'solid-js';
import { openDB } from 'idb';

import ArrowDownIcon from '../../../assets/icons/arrow-down-circle.svg';

import { ActionTypes } from '../../../models/config';
import { IDType } from '../../../models';

import { DB_NAME, DB_TABLE } from './Notes';

const Details: Component<IDType> = ({ id }) => {
  const [modal, setModal] = createSignal('');

  const handleSubmit = async () => {
    const db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(DB_TABLE);
      },
    });

    const result = await db.get(DB_TABLE, id);

    setModal(result);

    db.close();
  };

  return (
    <div class='flex gap items-center'>
      <button
        type='button'
        aria-label='View Details'
        class={ActionTypes.ShapeIcon}
        onClick={handleSubmit}
        disabled={!!modal()}
      >
        <ArrowDownIcon />
      </button>

      <span class='chip document term'>{modal}</span>
    </div>
  );
};

export default Details;
