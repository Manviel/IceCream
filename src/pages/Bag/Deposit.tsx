import { Component, createEffect, createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

import NumberField from '../../components/Field/NumberField';
import { SubTitle } from '../../components/Header';

import { commasAdapter } from '../../services/utils';

const Deposit: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [income, setIncome] = createSignal(0);

  createEffect(() => {
    const interest = 12 * 0.01;
    const years = 1;
    const result = Math.round(budget() * interest ** years);

    setIncome(result);
  });

  const handleChange: JSX.InputEventHandler<HTMLInputElement, InputEvent> = ({ target }) =>
    setBudget(Number(target.value));

  return (
    <section>
      <SubTitle spot="I want multiply" />

      <p class="info">Making a deposit for 12 months.</p>

      <NumberField name="budget" label="Investing" value={budget()} onInput={handleChange} />

      <output name="profit" for="budget" class="concise">
        Profit: {commasAdapter(income())}
      </output>

      <p class="info grey-light">The amount does not include taxes. *</p>
    </section>
  );
};

export default Deposit;
