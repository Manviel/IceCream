export const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const commasAdapter = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
