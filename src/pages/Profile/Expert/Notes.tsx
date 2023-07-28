import { Component, onMount, createSignal, For, Show } from 'solid-js';
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
    const db = await openDB(DB_NAME, 1);

    db.put(DB_TABLE, price(), ticker());

    db.close();

    await loadFromStorage();
  };

  const handlePriceChange = ({ target }: any) => setPrice(target.value);

  const handleTickerChange = ({ target }: any) => setTicker(target.value);

  const handleClear = async () => {
    const db = await openDB(DB_NAME, 1);

    db.clear(DB_TABLE);

    db.close();

    await loadFromStorage();
  };

  return (
    <DialogFacade
      title='Notes'
      description='Activity of transactions.'
      closingName='Go back'
      triggerContent={
        <div role='img' aria-label='Notes' class='content-full content-tall'>
          <LineDecreaseIcon />
        </div>
      }
      triggerClassName={ActionTypes.ShapeIcon}
      isFullScreen
      childClassName='bottom-sheet card'
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

      <div class='flex justify-between gap danger'>
        <button type='button' onClick={handleClear} class={ActionTypes.Danger}>
          Clear All
        </button>

        <button
          type='button'
          onClick={handleSave}
          class={ActionTypes.Contained}
        >
          Add Note
        </button>
      </div>

      <section
        class='scrollable provision content-tall'
        tabIndex={0}
        role='log'
      >
        <ul class='flex col os material'>
          <Show when={!transactions()?.length}>
            <li>Your list is empty.</li>
          </Show>

          <For each={transactions()}>
            {(item) => (
              <li class='flex items-center justify-between'>
                {item.toString()}

                <Details id={item.toString()} />
              </li>
            )}
          </For>
        </ul>
      </section>
    </DialogFacade>
  );
};

export default Notes;
