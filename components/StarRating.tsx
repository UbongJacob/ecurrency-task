import { StarIcon } from "./icons";

const StarRating = ({ rating }: { rating: number }): JSX.Element => {
  const formattedRating = rating < 0 ? 0 : rating > 5 ? 5 : rating;
  const remainder = 5 - formattedRating;
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {formattedRating > 0 &&
        [...Array(formattedRating)]?.map((_, key) => (
          <li key={key}>
            <StarIcon className="text-sm text-appGreen200" />
          </li>
        ))}
      {remainder > 0 &&
        [...Array(remainder)]?.map((_, key) => (
          <li key={key}>
            <StarIcon className="text-sm text-gray-500" />
          </li>
        ))}
    </ul>
  );
};

export default StarRating;
