import { Component, onMount, createSignal, For } from 'solid-js';
import { openDB } from 'idb';

import LineDecreaseIcon from '../../../assets/icons/line-decrease-circle.svg';

import { ActionTypes } from '../../../models/config';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';
import Field from '../../../components/Field';

const Notes: Component = () => {
  const [price, setPrice] = createSignal(undefined);
  const [ticker, setTicker] = createSignal(new Date().toDateString());
  const [transactions, setTransations] = createSignal<IDBValidKey[]>();

  const toggleActionSheet = () => {
    const main = document.getElementById('app');

    main?.classList.toggle('bottom-main');
  };

  const loadFromStorage = async () => {
    const db = await openDB('activities', 1, {
      upgrade(db) {
        db.createObjectStore('store');
      },
    });

    const result = await db.getAllKeys('store');

    setTransations(result);

    db.close();
  };

  onMount(() => {
    loadFromStorage();
  });

  const handleSave = async () => {
    const db = await openDB('activities', 1, {
      upgrade(db) {
        db.createObjectStore('store');
      },
    });

    db.put('store', price(), ticker());

    db.close();

    loadFromStorage();
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
      <div class='scrollable content-tall'>
        <Field
          type='text'
          name='ticker'
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

        <ul class='flex col gap view os material'>
          <For each={transactions()}>
            {(item) => <li>{item.toString()}</li>}
          </For>
        </ul>
      </div>

      <button type='button' onClick={handleSave} class={ActionTypes.Contained}>
        Save
      </button>
    </DialogFacade>
  );
};

export default Notes;
