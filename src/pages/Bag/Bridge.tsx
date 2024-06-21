import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type ProductViewProps = {
  implementation: JSX.Element;
};

const ProductView: Component<ProductViewProps> = props => {
  return props.implementation;
};

export const ListProductView: Component<ProductViewProps> = ({ implementation }) => {
  return (
    <section class="flex col line-item">
      <ProductView implementation={implementation} />
    </section>
  );
};

export const GridProductView: Component<ProductViewProps> = ({ implementation }) => {
  return (
    <div class='grid-item'>
      <ProductView implementation={props.implementation} />
    </div>
  );
};

export const NumericOption = (name: string, values: number[]): OptionType => ({
  name,
  values,
  render: (props) => (
    <select
      onChange={(e) => props.onChange(name, Number(e.currentTarget.value))}
    >
      <For each={values}>
        {(value) => <option value={value}>{value}</option>}
      </For>
    </select>
  ),
});

export const TextOption = (name: string, values: string[]): OptionType => ({
  name,
  values,
  render: (props) => (
    <select onChange={(e) => props.onChange(name, e.currentTarget.value)}>
      <For each={values}>
        {(value) => <option value={value}>{value}</option>}
      </For>
    </select>
  ),
});

export const OptionSelector: Component<OptionSelectorProps> = (props) => {
  const handleChange = (name: string, value: string | number) => {
    const newOptions = { ...props.selectedOptions, [name]: value };
    props.onSelect(newOptions);
  };

  return (
    <fieldset>
      <legend>Customize Your Laptop</legend>
      <For each={props.options}>
        {(optionType) => (
          <div>
            <label>{optionType.name}: </label>
            {optionType.render({ onChange: handleChange })}
          </div>
        )}
      </For>
    </fieldset>
  );
};
