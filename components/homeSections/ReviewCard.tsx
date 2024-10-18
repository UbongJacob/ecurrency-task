import { StarIcon } from "../icons";

export interface ReviewCardProps {
  title: string;
  author: string;
  rating: number;
}

const ReviewCard = (props: ReviewCardProps): JSX.Element => {
  const { author, rating, title } = props;
  const formattedRating = rating < 0 ? 0 : rating > 5 ? 5 : rating;
  const remainder = 5 - formattedRating;

  return (
    <li className="bg-appLightGray100 flex aspect-video max-w-64 flex-col rounded-lg px-5 py-5 shadow-sm sm:max-w-96 md:px-6 lg:px-7">
      <blockquote className="text-appGreen100 text-sm italic sm:text-base">
        {title}
      </blockquote>
      <p className="text-appGreen100 mt-auto pb-2 pt-5 text-sm font-bold sm:text-base">
        {author}
      </p>
      <ul className="flex flex-wrap items-center gap-3">
        {formattedRating > 0 &&
          [...Array(formattedRating)]?.map((_, key) => (
            <li key={key}>
              <StarIcon className="text-appGreen200 text-sm" />
            </li>
          ))}
        {remainder > 0 &&
          [...Array(remainder)]?.map((_, key) => (
            <li key={key}>
              <StarIcon className="text-sm text-gray-500" />
            </li>
          ))}
      </ul>
    </li>
  );
};

export default ReviewCard;
