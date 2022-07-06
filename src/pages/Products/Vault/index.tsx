import { Component } from 'solid-js';

import './Vault.css';

const Vault: Component = () => {
  return (
    <div class='rounded flex col widget view vault'>
      <h3 class='widget-title'>Vault</h3>
      <div class='activity' role='progressbar' aria-valuenow='80'>
        <svg viewBox='0 0 37 37'>
          <g class='ring'>
            <circle class='background' />
            <circle class='completed' stroke-dasharray='80, 100' />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Vault;
