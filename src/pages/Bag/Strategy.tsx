import { For, Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

export type OptionType = {
  name: string;
  values: (string | number)[];
  render: (props: {
    onChange: (name: string, value: string | number) => void;
  }) => JSX.Element;
};

type OptionSelectorProps = {
  options: OptionType[];
  selectedOptions: Record<string, string | number>;
  onSelect: (newOptions: Record<string, string | number>) => void;
};

export const NumericOption = (name: string, values: number[]): OptionType => ({
  name,
  values,
  render: (props) => {
    const execute = ({ currentTarget }: any) =>
      props.onChange(name, Number(currentTarget.value));

    return (
      <select onChange={execute}>
        <For each={values}>
          {(value) => <option value={value}>{value}</option>}
        </For>
      </select>
    );
  },
});

export const TextOption = (name: string, values: string[]): OptionType => ({
  name,
  values,
  render: (props) => {
    const execute = ({ currentTarget }: any) =>
      props.onChange(name, currentTarget.value);

    return (
      <select onChange={execute}>
        <For each={values}>
          {(value) => <option value={value}>{value}</option>}
        </For>
      </select>
    );
  },
});

export const OptionSelector: Component<OptionSelectorProps> = (props) => {
  const { selectedOptions, onSelect, options } = props;

  const handleChange = (name: string, value: string | number) => {
    onSelect({
      ...selectedOptions,
      [name]: value,
    });
  };

  return (
    <fieldset>
      <legend class='card-sub'>Customize Your Laptop</legend>

      <For each={options}>
        {(optionType) => (
          <div class='provision'>
            <label>{optionType.name}: </label>
            {optionType.render({ onChange: handleChange })}
          </div>
        )}
      </For>
    </fieldset>
  );
};
