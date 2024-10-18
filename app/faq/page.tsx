import FaqCard from "@/components/homeSections/FaqCard";
import { SearchIcon } from "@/components/icons";

const navs = ["Sleepstiq Product", "Order", "Melantonin"];

const faqs = [
  "How does it work?",
  "Why inhale melatonin?",
  "How much melatonin is there per inhale?",
  "Is it an e-cigarette or tobacco product?",
  "What's in it?",
  "What's not in it?",
  "How long does it last?",
  "How do I know it has run out/died?",
];

const FAQPage = (): JSX.Element => {
  return (
    <>
      <section className="h-[33rem] bg-appLightGray100 md:h-[35rem] lg:h-[37.25rem]">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5 text-appBlue100 2xl:px-0">
          <h1 className="text-base sm:text-lg">We're here to help you</h1>
          <h2 className="py-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
            How can we assist?
          </h2>

          <div className="focus-within:ring-appBlue300 flex max-w-[45rem] items-center gap-3 rounded-lg bg-white px-5 ring-1 ring-transparent transition-all duration-300">
            <SearchIcon className="text-xl sm:text-2xl" />
            <input
              type="search"
              name="faq"
              id="faq"
              placeholder="Search FAQs here"
              className="h-11 w-full bg-transparent text-sm outline-0 sm:text-base md:h-12 lg:h-14"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:flex-row md:gap-11 lg:gap-14 2xl:px-0">
        <ul className="flex shrink-0 gap-x-5 gap-y-7 text-base text-appBlue100 sm:text-lg md:flex-col">
          {navs?.map((value, key) => (
            <li
              className="relative max-w-max overflow-y-hidden first:font-bold"
              key={key}
            >
              {key === 0 && (
                <div className="absolute right-0 z-[1] h-full w-[70%] bg-appYellow100" />
              )}
              {value}
            </li>
          ))}
        </ul>

        <ul>
          {faqs?.map((question, key) => (
            <FaqCard
              key={key}
              question={question}
              questionNumber={key + 1}
              answer="Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile."
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default FAQPage;
