import { Component, createSignal, onMount } from 'solid-js';

import './Vault.css';

const Vault: Component = () => {
  const [income, setIncome] = createSignal(0);

  onMount(() => {
    setIncome((12 / 100) * 1000);
  });

  const valueNow = 80;

  return (
    <div class='rounded flex col widget view vault'>
      <h3 class='widget-title'>Vault</h3>
      <div class='conditions'>
        <div class='activity' role='progressbar' aria-valuenow={valueNow}>
          <svg viewBox='0 0 37 37'>
            <g class='ring'>
              <circle class='background' />
              <circle class='completed' stroke-dasharray={`${valueNow}, 100`} />
            </g>
          </svg>
        </div>

        <article class='flex col context'>
          <p class='term'>12 months at 12% per annum</p>
          <h4 class='sum'>Sum: 1000</h4>
          <h5 class='accrued'>+{income()}</h5>
        </article>
      </div>
    </div>
  );
};

export default Vault;
