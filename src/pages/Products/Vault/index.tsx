import { Component, createSignal, createEffect } from 'solid-js';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';

import { commasAdapter, randomInRange } from '../../../services/utils';

import Ring from './Ring';

import './Vault.css';

const Vault: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [income, setIncome] = createSignal(0);

  const valueNow = randomInRange(4, 50);
  const progress = 100 - valueNow;

  createEffect(() => {
    const interest = 12 * 0.01;
    const years = 1;
    const result = Math.round(budget() * interest ** years);

    setIncome(result);
  });

  const handleChange = ({ target }: any) => setBudget(target.value);

  return (
    <DialogFacade
      title='I want multiply'
      description='Making a deposit for 12 months.'
      closingName='Apply'
      triggerContent={
        <>
          <h3 class='widget-title'>Vault</h3>
          <p class='term grey-dark'>Up to {progress}%</p>

          <div class='grid products provision items-center'>
            <Ring progress={progress} />

            <article class='flex col context'>
              <p class='term'>Profit</p>
              <h4 class='sum accrued'>{commasAdapter(income())}</h4>
              <p class='term'>Investing</p>
              <h4 class='sum grey-dark'>{commasAdapter(budget())}</h4>
            </article>
          </div>
        </>
      }
      triggerClassName='view box rounded flex col items-start'
    >
      <NumberField
        name='budget'
        label='Sum'
        value={budget()}
        onChange={handleChange}
      />

      <p class='info'>The amount does not include taxes. *</p>
    </DialogFacade>
  );
};

export default Vault;
