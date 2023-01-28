import { Component, JSX } from 'solid-js';

import './Field.css';

interface FieldType extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Field: Component<FieldType> = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div class='flex col form-group'>
      <label for={name} class='form-control'>
        {label}
      </label>
      <input {...rest} id={name} name={name} class='form-control form-action' />
    </div>
  );
};

export default Field;
