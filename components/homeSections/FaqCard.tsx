"use client";

import { useState } from "react";

interface Props {
  questionNumber: number;
  question: string;
  answer: string;
}

const FaqCard = (props: Props): JSX.Element => {
  const { answer, question, questionNumber } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <li
      onClick={() => setIsActive((value) => !value)}
      className="border-appGray200 hover:bg-appBlue300/10 cursor-pointer border-t py-5 transition-all duration-300 last:border-b"
    >
      <p className="text-base font-semibold text-appBlue100 sm:text-lg">
        {`Q${questionNumber}: `} {question}
      </p>
      <div
        className={`app-collapse ${
          !isActive ? "app-collapse-close" : "app-collapse-open"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-black sm:text-base">{answer}</p>
        </div>
      </div>
    </li>
  );
};

export default FaqCard;
