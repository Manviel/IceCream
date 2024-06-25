export const randomInRange = (min: number, max: number) => {
  const byteArray = new Uint8Array(1);

  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;

  return min + (byteArray[0] % range);
};

export const commasAdapter = (x: number) => new Intl.NumberFormat().format(x);

export const useObserver = (
  query: string,
  execute: (e: IntersectionObserverEntry) => void,
  options = {}
) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => execute(entry));
  }, options);

  document.querySelectorAll(query).forEach(item => observer.observe(item));
};

export const total = (arr: number[]) => arr.reduce((a: number, b: number) => a + b, 0);

export const average = (arr: number[]) => total(arr) / arr.length;

export const sortByAsc = (obj: object) => Object.entries(obj).sort((x, y) => x[1] - y[1]);

export const transformCase = (str: string) => str.replace(/\s+/g, '-').toLowerCase();
