import { JSX } from "solid-js/jsx-runtime";

type CardDateType = {
  date: string;
};

function CardDate({ date }: CardDateType): JSX.Element {
  const extractMonth = (str: string) =>
    new Date(str).toDateString().slice(4, 7);

  return (
    <div>
      <p className="card-description">{extractMonth(date)}</p>

      <strong className="subtitle">{new Date(date).getDate()}</strong>
    </div>
  );
}

export default CardDate;
