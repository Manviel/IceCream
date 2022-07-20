import { Component, createSignal, createEffect } from 'solid-js';

import DialogFacade from '../DialogContent/DialogFacade';

import { commasAdapter } from '../../../services/utils';

import './Vault.css';

const Vault: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [income, setIncome] = createSignal(0);

  const valueNow = 80;

  createEffect(() => {
    const interest = 12 * 0.01;
    const years = 12 / 12;
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

          <p class='term'>12 months at 12%</p>

          <div class='conditions'>
            <div class='activity' role='progressbar' aria-valuenow={valueNow}>
              <svg viewBox='0 0 37 37'>
                <g class='ring'>
                  <circle class='background' />
                  <circle
                    class='completed'
                    stroke-dasharray={`${valueNow}, 100`}
                  />
                </g>
              </svg>
            </div>

            <article class='flex col context'>
              <h4 class='sum'>{commasAdapter(budget())}</h4>
              <h5 class='accrued'>+{commasAdapter(income())}</h5>
            </article>
          </div>
        </>
      }
      triggerClassName='view vault rounded flex col widget'
    >
      <div class='flex col form-group'>
        <label for='budget' class='form-control'>
          Sum:
        </label>
        <input
          id='budget'
          type='number'
          name='budget'
          class='form-control form-action'
          value={budget()}
          min={1000}
          step={200}
          max={1000000}
          onChange={handleChange}
        />
      </div>
    </DialogFacade>
  );
};

export default Vault;