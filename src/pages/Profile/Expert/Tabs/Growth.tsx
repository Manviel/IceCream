import { Component, createSignal } from 'solid-js';

import Card from '../../../../components/Card';
import Field from '../../../../components/Field';

const Growth: Component = () => {
  const [budget, setBudget] = createSignal(1000);
  const [ticker, setTicker] = createSignal('');

  const handleChange = ({ target }: any) => setBudget(target.value);

  const handleText = ({ target }: any) => setTicker(target.value);

  return (
    <div class='grid products portfolio'>
      <Field
        name='price-data'
        label='Price (in $)'
        type='number'
        value={budget()}
        min={1000}
        step={200}
        max={100000}
        onChange={handleChange}
      />

      <Field
        name='shares-out'
        label='Shares Outstanding (in M)'
        type='number'
        value={budget()}
        min={1000}
        step={200}
        max={100000}
        onChange={handleChange}
      />

      <Field
        name='revenue'
        label='Sales (in M)'
        type='number'
        value={budget()}
        min={1000}
        step={200}
        max={100000}
        onChange={handleChange}
      />

      <Field
        name='revenue-growth'
        label='Sales past 5Y (in %)'
        type='number'
        value={budget()}
        min={1000}
        step={200}
        max={100000}
        onChange={handleChange}
      />

      <Field
        name='p-s'
        label='P / S'
        type='number'
        value={budget()}
        min={1000}
        step={200}
        max={100000}
        onChange={handleChange}
      />

      <Field
        name='ticker'
        label='Ticker'
        type='text'
        value={ticker()}
        onChange={handleText}
      />

      <Card title='Fair Price' number={0} measure='$' description='' />
      <Card title='Fair Price' number={1} measure='%' description='' />
    </div>
  );
};

export default Growth;
