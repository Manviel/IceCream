import { Component, createSignal, createEffect, Show } from 'solid-js';
import { Dialog, DialogTitle, Description } from 'solid-a11y';

import DialogContent from '../DialogContent';

import './Vault.css';

const Vault: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [income, setIncome] = createSignal(0);
  const [open, setOpen] = createSignal(false);

  const valueNow = 80;

  createEffect(() => {
    const interest = 12 * 0.01;
    const years = 12 / 12;
    const result = Math.round(budget() * interest ** years);

    setIncome(result);
  });

  const handleChange = ({ target }: any) => setBudget(target.value);

  return (
    <>
      <button
        class='rounded flex col widget view vault'
        onClick={() => setOpen(true)}
      >
        <h3 class='widget-title'>Vault</h3>
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
            <p class='term'>12 months at 12% per annum</p>
            <h4 class='flex justify-between sum'>
              {budget()} <span class='accrued'>+{income()}</span>
            </h4>
          </article>
        </div>
      </button>

      <Show when={open()}>
        {() => (
          <Dialog onClose={setOpen}>
            <DialogContent>
              <DialogTitle class='subtitle'>I want multiply</DialogTitle>

              <Description class='info'>Making a deposit</Description>

              <div class='flex col form-group'>
                <label for='budget' class='form-control'>
                  Sum
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

              <button class='btn' onClick={() => setOpen(false)}>
                Apply
              </button>
            </DialogContent>
          </Dialog>
        )}
      </Show>
    </>
  );
};

export default Vault;
