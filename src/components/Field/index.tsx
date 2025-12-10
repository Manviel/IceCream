import { Component, splitProps, JSX } from 'solid-js';

import './Field.css';

export interface IField extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Field: Component<IField> = props => {
  const [local, rest] = splitProps(props, ['label', 'name']);

  return (
    <div class="flex col form-group">
      <label for={local.name} class="form-label">
        {local.label}
      </label>
      <input {...rest} id={local.name} name={local.name} class="form-control form-action token" />
    </div>
  );
};

export default Field;
