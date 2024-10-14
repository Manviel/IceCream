import { Component, onMount, createSignal, For, Show } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import LineDecreaseIcon from '../../../assets/icons/line-decrease-circle.svg';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';
import Field from '../../../components/Field';
import HelpTooltip from '../../../components/Tooltip/HelpTooltip';

import { ActionTypes, ShapeIcon, getStack } from '../../../global/theme';
import { useDataBase, DB_STORE_TABLE } from '../../../services/db';

import Details from './Details';

const Notes: Component = () => {
  const [price, setPrice] = createSignal('');
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

  const handlePriceChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setPrice(target.value);

  const handleTickerChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setTicker(target.value);

  const handleClear = async () => {
    const db = await useDataBase();

    db.clear(DB_STORE_TABLE);

    db.close();

    await loadFromStorage();
  };

  return (
    <DialogFacade
      title="Notes"
      description="Activity of transactions."
      closingActions={
        <>
          <button type="button" onClick={handleClear} class={ActionTypes.Danger}>
            Clear All
          </button>

          <button type="button" onClick={handleSave} class={ActionTypes.Contained}>
            Add Note
          </button>
        </>
      }
      triggerContent={
        <HelpTooltip name="Notes">
          <LineDecreaseIcon />
        </HelpTooltip>
      }
      triggerClassName={ShapeIcon.Default}
      isFullScreen
      childClassName="bottom-sheet card"
      toggleActionSheet={toggleActionSheet}
    >
      <div class="grid products proximity portfolio">
        <Field
          type="text"
          name="save-as"
          label="Save ticker as"
          value={ticker()}
          onInput={handleTickerChange}
          required
        />

        <NumberField
          name="price"
          label="Fair Price"
          value={price()}
          onInput={handlePriceChange}
          required
        />
      </div>

      <section class="scrollable content-tall" tabIndex={0} role="log">
        <ul class={getStack('material')}>
          <Show when={!transactions()?.length}>
            <li>Your list is empty.</li>
          </Show>

          <For each={transactions()}>
            {item => (
              <li class="flex items-center justify-between list-item chip">
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
