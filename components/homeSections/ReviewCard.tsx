import StarRating from "../StarRating";

export interface ReviewCardProps {
  title: string;
  author: string;
  rating: number;
}

const ReviewCard = (props: ReviewCardProps): JSX.Element => {
  const { author, rating, title } = props;

  return (
    <li className="flex aspect-video max-w-64 flex-col rounded-lg bg-appLightGray100 px-5 py-5 shadow-sm sm:max-w-96 md:px-6 lg:px-7">
      <blockquote className="text-sm italic text-appGreen100 sm:text-base">
        {title}
      </blockquote>
      <p className="mt-auto pb-2 pt-5 text-sm font-bold text-appGreen100 sm:text-base">
        {author}
      </p>
      <StarRating rating={rating} />
    </li>
  );
};

export default ReviewCard;
