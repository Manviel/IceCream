import { For } from 'solid-js';

const ProductView = (props) => {
  return props.implementation;
};

export const ListProductView = (props) => {
  return (
    <li>
      <ProductView implementation={props.implementation} />
    </li>
  );
};

export const GridProductView = (props) => {
  return (
    <div class='grid-item'>
      <ProductView implementation={props.implementation} />
    </div>
  );
};

class OptionType {
  constructor(name, values) {
    this.name = name;
    this.values = values;
  }

  render(props) {
    // To be implemented by subclasses
  }
}

// Concrete option types
class NumericOption extends OptionType {
  render(props) {
    return (
      <select
        onChange={(e) => props.onChange(this.name, Number(e.target.value))}
      >
        <For each={this.values}>
          {(value) => <option value={value}>{value}</option>}
        </For>
      </select>
    );
  }
}

class TextOption extends OptionType {
  render(props) {
    return (
      <select onChange={(e) => props.onChange(this.name, e.target.value)}>
        <For each={this.values}>
          {(value) => <option value={value}>{value}</option>}
        </For>
      </select>
    );
  }
}

export const OptionSelector = (props) => {
  const optionTypes = [
    new NumericOption('RAM', [4, 8, 16, 32]),
    new NumericOption('Storage', [256, 512, 1024]),
    new TextOption('CPU', ['i3', 'i5', 'i7']),
  ];

  const handleChange = (name, value) => {
    const newOptions = { ...props.selectedOptions };
    newOptions[name] = value;
    props.onSelect(newOptions);
  };

  return (
    <div>
      <h3>Customize Your Laptop</h3>
      <For each={optionTypes}>
        {(optionType) => (
          <div>
            <label>{optionType.name}: </label>
            {optionType.render({ onChange: handleChange })}
          </div>
        )}
      </For>
    </div>
  );
};
