import { Component, JSX } from 'solid-js';

import './Field.css';

export interface IField extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Field: Component<IField> = props => {
  const { label, name, ...rest } = props;

  return (
    <div class="flex col form-group">
      <label for={name} class="form-label">
        {label}
      </label>
      <input {...rest} id={name} name={name} class="form-control form-action token" />
    </div>
  );
};

export default Field;
