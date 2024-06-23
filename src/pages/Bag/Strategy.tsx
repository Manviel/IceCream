import { For, Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Select } from '@kobalte/core/select';

import ArrowDownIcon from '../../assets/icons/arrow-down-circle.svg';

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
    const execute = (v: string) => props.onChange(name, v);

    return (
      <Select
        onChange={execute}
        options={values}
        class="provision flex col"
        itemComponent={(props) => (
          <Select.Item item={props.item} class="select_item control">
            <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
          </Select.Item>
        )}
      >
        <Select.Label class="select_label">{name}</Select.Label>

        <Select.Trigger class="select_trigger flex justify-between items-center token control">
          <Select.Value<string> class="concise">
            {(state) => state.selectedOption()}
          </Select.Value>
          <Select.Icon class="select_icon flex">
            <ArrowDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content class="select_content control">
            <Select.Listbox class="select_listbox flex col tab" />
          </Select.Content>
        </Select.Portal>
      </Select>
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
      <legend class="card-sub">Customize Your Laptop</legend>

      <For each={options}>
        {(optionType) => optionType.render({ onChange: handleChange })}
      </For>
    </fieldset>
  );
};
