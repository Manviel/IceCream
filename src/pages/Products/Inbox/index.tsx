import { Component } from 'solid-js';

import Ring from '../Vault/Ring';

const chartID = 'base-phone';

const Inbox: Component = () => {
  const valueNow = 76;

  return (
    <section class="view box rounded flex col items-start tab" aria-label="iPhone 15">
      <h3 class="card-sub">Sales</h3>
      <p class="term grey-dark">Base accounted for {valueNow}% of all</p>

      <div class="provision" role="progressbar" aria-label="In the US" aria-valuenow={valueNow}>
        <Ring progress={valueNow} id={chartID} />
      </div>
    </section>
  );
};

export default Inbox;
