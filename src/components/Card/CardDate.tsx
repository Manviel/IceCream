import { JSX } from 'solid-js/jsx-runtime';

type CardDateType = {
  date: string;
};

function CardDate({ date }: CardDateType): JSX.Element {
  const extractMonth = (str: string) => str.slice(0, 6);

  return (
    <div class='flex col'>
      <time class='card-description'>{extractMonth(date)}</time>

      <strong class='subtitle'>{date}</strong>
    </div>
  );
}

export default CardDate;
