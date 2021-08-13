export const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
