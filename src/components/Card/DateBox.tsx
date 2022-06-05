import type { Component } from 'solid-js';

import './DateBox.css';

type DateBoxType = {
  date: string;
};

const DateBox: Component<DateBoxType> = ({ date }) => (
  <div class='flex col box rounded'>
    <time class='box-description'>{date.slice(7, 11)}</time>

    <strong class='subtitle'>{date.slice(0, 6)}</strong>
  </div>
);

export default DateBox;
