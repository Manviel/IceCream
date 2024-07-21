import { Component } from 'solid-js';

import { randomInRange } from '../../../services/utils';

import Ring from './Ring';

import './Vault.css';

const chartID = 'chart-activity';

const Vault: Component = () => {
  const valueNow = randomInRange(5, 50);

  return (
    <section class="view box rounded flex col items-start tab">
      <h3 class="card-sub">Vault</h3>
      <p class="term grey-dark accrued">Only {valueNow}% remained</p>

      <div class="provision" role="progressbar" aria-label="Activity ring" aria-valuenow={valueNow}>
        <Ring progress={valueNow} id={chartID} />
      </div>
    </section>
  );
};

export default Vault;
