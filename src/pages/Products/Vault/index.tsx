import { Component } from 'solid-js';

import Ring from './Ring';

import './Vault.css';

const chartID = 'chart-activity';

const Vault: Component = () => {
  const valueNow = 24;

  return (
    <section
      class="view box rounded flex col items-start tab"
      aria-label="The place of smartphones"
    >
      <h3 class="card-sub">Market share</h3>
      <p class="term grey-dark">Reached about {valueNow}% globally</p>

      <div class="provision" role="progressbar" aria-label="Q4 2023" aria-valuenow={valueNow}>
        <Ring progress={valueNow} id={chartID} />
      </div>
    </section>
  );
};

export default Vault;
