import { Component, onMount, createSignal, For } from 'solid-js';
import { openDB } from 'idb';

import LineDecreaseIcon from '../../../assets/icons/line-decrease-circle.svg';

import { ActionTypes } from '../../../models/config';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';
import Field from '../../../components/Field';

import Details from './Details';

export const DB_NAME = 'activities';
export const DB_TABLE = 'store';

const Notes: Component = () => {
  const [price, setPrice] = createSignal(undefined);
  const [ticker, setTicker] = createSignal(new Date().toDateString());
  const [transactions, setTransations] = createSignal<IDBValidKey[]>();

  const toggleActionSheet = () => {
    const main = document.getElementById('app');

    main?.classList.toggle('bottom-main');
  };

  const loadFromStorage = async () => {
    const db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(DB_TABLE);
      },
    });

    const result = await db.getAllKeys(DB_TABLE);

    setTransations(result);

    db.close();
  };

  onMount(async () => {
    await loadFromStorage();
  });

  const handleSave = async () => {
    const db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(DB_TABLE);
      },
    });

    db.put(DB_TABLE, price(), ticker());

    db.close();

    await loadFromStorage();
  };

  const handlePriceChange = ({ target }: any) => setPrice(target.value);

  const handleTickerChange = ({ target }: any) => setTicker(target.value);

  return (
    <DialogFacade
      title='Notes'
      description='Activity of transactions.'
      closingName='Cancel'
      triggerContent={
        <div aria-label='Notes' class='content-full content-tall'>
          <LineDecreaseIcon />
        </div>
      }
      triggerClassName={ActionTypes.ShapeIcon}
      parentClassName='bottom-sheet view card'
      childClassName='flex col content-tall'
      toggleActionSheet={toggleActionSheet}
    >
      <Field
        type='text'
        name='save-as'
        label='Save ticker as'
        value={ticker()}
        onChange={handleTickerChange}
      />

      <NumberField
        name='price'
        label='Fair Price'
        value={price()}
        onChange={handlePriceChange}
      />

      <div class='scrollable content-tall' tabIndex={0}>
        <ul class='flex col gap view os material'>
          <For each={transactions()}>
            {(item) => (
              <li class='flex items-center justify-between'>
                {item.toString()}

                <Details id={item.toString()} />
              </li>
            )}
          </For>
        </ul>
      </div>

      <button type='button' onClick={handleSave} class={ActionTypes.Contained}>
        Add
      </button>
    </DialogFacade>
  );
};

export default Notes;
