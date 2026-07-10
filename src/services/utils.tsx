export const secureRandom = (): number => {
  const buf = new Uint8Array(4);
  crypto.getRandomValues(buf);
  const uint32 = (buf[0] << 24) | (buf[1] << 16) | (buf[2] << 8) | buf[3];

  return (uint32 >>> 0) / 0x100000000;
};

export const commasAdapter = (x: number) => new Intl.NumberFormat().format(x);

export const useObserver = (
  query: string,
  execute: (e: IntersectionObserverEntry) => void,
  options = {}
) => {
  const initObserver = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => execute(entry));
    }, options);

    const entries = document.querySelectorAll(query);

    if (entries.length > 0) {
      entries.forEach(item => observer.observe(item));
    } else {
      queueMicrotask(() => initObserver());
    }
  };

  initObserver();
};

export const total = (arr: number[]) => arr.reduce((a: number, b: number) => a + b, 0);

export const average = (arr: number[]) => total(arr) / arr.length;

export const sortByAsc = (obj: object) => Object.entries(obj).sort((x, y) => x[1] - y[1]);

export const transformCase = (str: string) => str.replace(/\s+/g, '-').toLowerCase();
