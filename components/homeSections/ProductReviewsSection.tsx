import StarRating from "../StarRating";
import Product1Img from "@/public/product-1.png";
import Product2Img from "@/public/product-1.png";
import { getRandomNumber } from "@/utils";
import Image, { StaticImageData } from "next/image";

interface ProductReview {
  title: string;
  img: StaticImageData;
  rating: number;
  author: string;
}

const productReviews: ProductReview[] = [
  {
    title:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    author: "Rachel Dill",
    rating: 5,
    img: Product1Img,
  },
  {
    title:
      "It really helps me fall right to sleep compared to melatonin pills.",
    author: "Javier Mendez",
    img: Product2Img,
    rating: getRandomNumber(0, 5),
  },
  {
    title:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    author: "Naomi Nwazurike",
    img: Product2Img,
    rating: getRandomNumber(0, 5),
  },
  {
    title: "I have been falling asleep faster and sleeping thru the night.",
    author: "Nate Jacobs",
    img: Product1Img,
    rating: getRandomNumber(0, 5),
  },
  {
    title:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    author: "Rachel Dill",
    rating: 5,
    img: Product1Img,
  },
  {
    title:
      "It really helps me fall right to sleep compared to melatonin pills.",
    author: "Javier Mendez",
    img: Product2Img,
    rating: getRandomNumber(0, 5),
  },
  {
    title:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    author: "Naomi Nwazurike",
    img: Product2Img,
    rating: getRandomNumber(0, 5),
  },
  {
    title: "I have been falling asleep faster and sleeping thru the night.",
    author: "Nate Jacobs",
    img: Product1Img,
    rating: getRandomNumber(0, 5),
  },
];

const ProductReviewsSection = (): JSX.Element => {
  return (
    <>
      <hr className="mx-auto mb-20 max-w-7xl border-[1px] border-appLightGray200" />
      <h5 className="mx-auto mb-12 w-full max-w-7xl px-5 text-xl font-bold text-appGreen100 md:text-2xl lg:text-3xl 2xl:px-0">
        Product Reviews
      </h5>
      <section className="pb-56">
        <ul className="hidden-scroll flex w-full gap-7 overflow-x-auto pb-5">
          {productReviews?.map(({ author, img, rating, title }, key) => (
            <li
              className="shrink-0 rounded-lg bg-white shadow-2xl first:ml-7 last:mr-7 lg:first:ml-28"
              key={key}
            >
              <figure className="flex h-full max-w-64 flex-col md:max-w-72 lg:max-w-[19.125rem]">
                <Image className="w-full" src={img} alt="product" />
                <figcaption className="flex h-full flex-col px-5 pb-6 pt-4 md:px-6 md:pb-7 lg:px-7 lg:pb-8">
                  <blockquote className="text-sm italic text-appGreen100 sm:text-base">
                    {title}
                  </blockquote>
                  <p className="mt-auto pb-2 pt-5 text-sm font-bold text-appGreen100 sm:text-base">
                    {author}
                  </p>

                  <StarRating rating={rating} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProductReviewsSection;
