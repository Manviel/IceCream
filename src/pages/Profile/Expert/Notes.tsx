import { Component, onMount, createSignal, For, Show } from 'solid-js';

import LineDecreaseIcon from '../../../assets/icons/line-decrease-circle.svg';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';
import Field from '../../../components/Field';
import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ActionTypes } from '../../../models/config';
import { useDataBase, DB_STORE_TABLE } from '../../../services/db';

import Details from './Details';

const Notes: Component = () => {
  const [price, setPrice] = createSignal(undefined);
  const [ticker, setTicker] = createSignal(new Date().toDateString());
  const [transactions, setTransations] = createSignal<IDBValidKey[]>();

  const toggleActionSheet = () => {
    const main = document.getElementById('app');

    main?.classList.toggle('bottom-main');
  };

  const loadFromStorage = async () => {
    const db = await useDataBase();

    const response = await db.getAllKeys(DB_STORE_TABLE);

    setTransations(response);

    db.close();
  };

  onMount(async () => {
    await loadFromStorage();
  });

  const handleSave = async () => {
    const db = await useDataBase();

    db.add(DB_STORE_TABLE, { price: price(), ticker: ticker() });

    db.close();

    await loadFromStorage();
  };

  const handlePriceChange = ({ target }: any) => setPrice(target.value);

  const handleTickerChange = ({ target }: any) => setTicker(target.value);

  const handleClear = async () => {
    const db = await useDataBase();

    db.clear(DB_STORE_TABLE);

    db.close();

    await loadFromStorage();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    handleSave();
  };

  return (
    <DialogFacade
      title='Notes'
      description='Activity of transactions.'
      closingName='Go back'
      triggerContent={
        <HelpTooltip name='Notes' id='transactions-notes'>
          <LineDecreaseIcon />
        </HelpTooltip>
      }
      triggerClassName={ActionTypes.ShapeIcon}
      isFullScreen
      childClassName='bottom-sheet card'
      toggleActionSheet={toggleActionSheet}
    >
      <form onSubmit={handleSubmit}>
        <Field
          type='text'
          name='save-as'
          label='Save ticker as'
          value={ticker()}
          onChange={handleTickerChange}
          required
        />

        <NumberField
          name='price'
          label='Fair Price'
          value={price()}
          onChange={handlePriceChange}
          required
        />

        <div class='flex justify-between gap danger-grow'>
          <button
            type='button'
            onClick={handleClear}
            class={ActionTypes.Danger}
          >
            Clear All
          </button>

          <button type='submit' class={ActionTypes.Contained}>
            Add Note
          </button>
        </div>
      </form>

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
