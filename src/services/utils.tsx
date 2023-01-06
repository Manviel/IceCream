export const randomInRange = (min: number, max: number) => {
  const byteArray = new Uint8Array(1);

  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;

  return min + (byteArray[0] % range);
};

export const commasAdapter = (x: number) => new Intl.NumberFormat().format(x);

export const useObserver = (query: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  });

  const animationItems = document.querySelectorAll(query);

  animationItems.forEach((item) => observer.observe(item));
};

export const total = (arr: number[]) =>
  arr.reduce((a: number, b: number) => a + b, 0);

export const average = (arr: number[]) => total(arr) / arr.length;

export const sortByAsc = (obj: {}) =>
  Object.entries(obj).sort((x: any, y: any) => x[1] - y[1]);
