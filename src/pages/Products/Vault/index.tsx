import { Component, createSignal, createEffect } from 'solid-js';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import NumberField from '../../../components/Field/NumberField';

import { commasAdapter, randomInRange } from '../../../services/utils';

import './Vault.css';

const Vault: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [income, setIncome] = createSignal(0);

  const valueNow = randomInRange(4, 50);

  const circleRadius = 40;
  const circleCenter = 50;
  const arcLength = Math.round(2 * 3.14 * circleRadius);
  const arcOffset = Math.round(arcLength * ((100 - valueNow) / 100));
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
      description='Making a deposit'
      closingName='Apply'
      triggerContent={
        <>
          <h3 class='widget-title'>Vault</h3>
          <p class='term grey-dark'>Up to 12 months</p>

          <div class='grid products provision items-center'>
            <div
              class='activity'
              role='progressbar'
              aria-label='Activity ring'
              aria-valuenow={progress}
            >
              <svg class='ring'>
                <circle
                  class='background'
                  cx={circleCenter}
                  cy={circleCenter}
                  r={circleRadius}
                />
                <circle
                  class='completed'
                  cx={circleCenter}
                  cy={circleCenter}
                  r={circleRadius}
                  stroke-dasharray={`${arcOffset}, ${arcLength}`}
                />
              </svg>
            </div>

            <article class='flex col context'>
              <h4 class='sum'>{commasAdapter(budget())}</h4>
              <h5 class='term grey-dark'>{progress}%</h5>
              <h6 class='accrued'>+{commasAdapter(income())}</h6>
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
