import Image from "next/image";
import HappyManImg from "@/public/happy-man.png";
import { RiArrowDropRightFill } from "../icons";

const HappyCustomerSection = (): JSX.Element => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-5 gap-y-10 px-5 pb-40 pt-44 md:grid-cols-2 2xl:px-0">
      <article className="flex h-full flex-col justify-center text-appBlue100 md:max-w-lg">
        <h4>Our Amazing Story</h4>
        <div className="relative mb-10 mt-6 max-w-max overflow-hidden">
          <div className="bg-appYellow100 absolute right-0 z-[1] h-full w-[55%]" />
          <p className="z-[2] text-xl font-bold md:text-2xl lg:text-3xl">
            10k+Happy Customers
          </p>
        </div>
        <p className="pb-7 text-sm text-appBlue200 sm:text-base">
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>

        <span className="flex items-center text-base text-appBlue100 transition-all duration-300 hover:text-appRed100">
          <RiArrowDropRightFill className="shrink-0 text-2xl" />
          <span className="font-semibold underline underline-offset-2">
            Know More About Us
          </span>
        </span>
      </article>

      <div className="flex h-full w-full items-center justify-center">
        <blockquote className="bg-appLightGray100 shadow-testimonyShadow max-w-[29.625rem] rounded px-6 pb-8 pt-14 md:px-8 lg:px-10">
          <p className="text-appGreen100 block pb-14 text-base italic md:text-lg lg:max-w-[23.25rem] lg:text-xl">
            I’m a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.
          </p>
          <figure className="flex flex-wrap items-center gap-8">
            <Image
              alt="James Miller"
              className="aspect-square w-20 rounded-full"
              src={HappyManImg}
            />
            <figcaption>
              <data
                className="text-appGreen100 mb-2 text-base font-bold md:text-lg lg:text-xl"
                value="James Miller"
              >
                James Miller
              </data>
              <p className="text-base text-appBlue100">CEO, Techbias</p>
            </figcaption>
          </figure>
        </blockquote>
      </div>
    </section>
  );
};

export default HappyCustomerSection;
