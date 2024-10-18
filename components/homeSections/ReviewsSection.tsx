"use client";

import { getRandomNumber } from "@/utils";
import ReviewCard, { ReviewCardProps } from "./ReviewCard";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

const reviewData: ReviewCardProps[] = [
  {
    title:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    author: "John Matthews",
    rating: 5,
  },
  {
    title:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    author: "Eunice Oliver",
    rating: getRandomNumber(0, 5),
  },
  {
    title: "It’s a really good product and helps me sleep better at night!",
    author: "Laura Davies",
    rating: getRandomNumber(0, 5),
  },
  {
    title:
      "Helps me relax and remember to breathe. Stress level definitely goes down",
    author: "Jane Bocks",
    rating: getRandomNumber(0, 5),
  },
];

const ReviewsSection = (): JSX.Element => {
  return (
    <>
      <InfiniteMovingCards items={reviewData} direction="right" speed="slow" />
      <hr className="border-appLightGray200 mx-auto my-14 max-w-7xl border-[1px]" />
    </>
  );
};

export default ReviewsSection;

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: ReviewCardProps[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-[9] overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <ReviewCard {...item} key={idx} />
        ))}
      </ul>
    </div>
  );
};
