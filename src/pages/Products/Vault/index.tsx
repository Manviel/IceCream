import { Component, createSignal, createEffect } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';

import { commasAdapter, randomInRange } from '../../../services/utils';

import Ring from './Ring';

import './Vault.css';

const chartID = 'chart-activity';

const Vault: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [income, setIncome] = createSignal(0);

  const valueNow = randomInRange(5, 50);

  createEffect(() => {
    const interest = 12 * 0.01;
    const years = 1;
    const result = Math.round(budget() * interest ** years);

    setIncome(result);
  });

  const handleChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setBudget(Number(target.value));

  return (
    <DialogFacade
      title="I want multiply"
      description="Making a deposit for 12 months."
      triggerContent={
        <>
          <h3 class="card-sub">Vault</h3>
          <p class="term grey-dark accrued">Only {valueNow}% remained</p>

          <div
            class="provision"
            role="progressbar"
            aria-label="Activity ring"
            aria-valuenow={valueNow}
          >
            <Ring progress={valueNow} id={chartID} />
          </div>
        </>
      }
      triggerClassName="view box rounded flex col items-start tab"
    >
      <output name="profit" for="budget" class="sum">
        Profit: {commasAdapter(income())}
      </output>

      <div class="provision">
        <NumberField name="budget" label="Investing" value={budget()} onInput={handleChange} />
      </div>

      <p class="info">The amount does not include taxes. *</p>
    </DialogFacade>
  );
};

export default Vault;
