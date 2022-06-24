import type { Component } from 'solid-js';

type RadioField = {
  id: string;
  name: string;
  title: string;
  onChange: (e: any) => void;
};

const RadioField: Component<RadioField> = (props) => {
  const { onChange, id, name, title } = props;

  return (
    <>
      <input
        type='radio'
        class='form-radio'
        id={id}
        name={name}
        value={id}
        onChange={onChange}
      />
      <label for={id} class='form-label'>
        {title}
      </label>
    </>
  );
};

export default RadioField;
