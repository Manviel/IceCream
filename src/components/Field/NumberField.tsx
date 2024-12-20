import { Component } from 'solid-js';

import { MIN_COST, STEP, MAX_COST, MIN_PERCENT, MAX_PERCENT } from '../../global/config';

import Field, { IField } from '.';

export const PercentField: Component<IField> = props => {
  return <Field {...props} type="number" min={MIN_PERCENT} step={STEP} max={MAX_PERCENT} />;
};

const NumberField: Component<IField> = props => {
  return <Field {...props} type="number" min={MIN_COST} step={STEP} max={MAX_COST} />;
};

export default NumberField;
