import { Component } from 'solid-js';

import {
  MIN_COST,
  STEP,
  MAX_COST,
  MIN_PERCENT,
  MAX_PERCENT,
} from '../../models/config';

import Field, { FieldType } from '.';

export const PercentField: Component<FieldType> = (props) => {
  return (
    <Field
      {...props}
      type='number'
      min={MIN_PERCENT}
      step={STEP}
      max={MAX_PERCENT}
    />
  );
};

const NumberField: Component<FieldType> = (props) => {
  return (
    <Field {...props} type='number' min={MIN_COST} step={STEP} max={MAX_COST} />
  );
};

export default NumberField;
