import Image from "next/image";
import VapePenImg from "@/public/vape-pen.png";
import routes from "@/navigation/routes";
import Link from "next/link";
import OurMissionImg from "@/public/our-mission.png";

const aims = [
  "Promote Calm",
  "Support Sleep",
  "Reduce Stress",
  "Aid Relaxation",
];

const ShopNowSection = (): JSX.Element => {
  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-5 gap-y-10 px-5 pb-40 md:grid-cols-2 2xl:px-0">
        <figure className="relative">
          <Image src={VapePenImg} className="w-full" alt="vape pen" />
          <figcaption className="shadow-vapeShadow absolute bottom-0 right-0 rounded-lg bg-white p-6 text-sm italic text-appGreen100 sm:text-base md:-bottom-10 lg:bottom-0">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect. </p>
            <p>
              ✅ 100% drug-free, plant-based ingredients. ‍<br />
              ⚕️ 3rd-party lab tested.
            </p>
          </figcaption>
        </figure>
        <article className="flex flex-col justify-center gap-y-7">
          <h5 className="text-xl font-bold text-appBlue100 md:text-2xl lg:text-3xl">
            Shop Now
          </h5>
          <p className="max-w-[26.313rem] text-sm text-appBlue100 sm:text-base">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Link
            className="max-w-56 rounded-md bg-appRed100 py-3 text-center font-openSans text-white transition-all duration-300 hover:scale-105 active:scale-95"
            href={routes.SHOP_PAGE}
          >
            Visit Shop
          </Link>
        </article>
      </section>

      <figure className="ml-auto grid max-w-[88rem] gap-x-5 gap-y-10 px-5 md:grid-cols-2 2xl:px-0">
        <figcaption className="flex flex-col justify-center gap-y-6">
          <h5 className="text-xl font-bold text-appBlue100 md:text-2xl lg:text-3xl">
            Our Mission
          </h5>
          <p className="text-sm text-appBlue200 sm:text-base md:max-w-[26.313rem]">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>
          <ul className="text-sm text-appBlue200 sm:text-base">
            {aims?.map((value, key) => <li key={key}>{"✓ " + value}</li>)}
          </ul>
        </figcaption>

        <Image alt="Our Mission" src={OurMissionImg} className="w-full" />
      </figure>

      <article className="flex flex-col items-center gap-y-6 px-5 pb-40 pt-36 text-center 2xl:px-0">
        <h5 className="text-xl font-bold text-appBlue100 md:text-2xl lg:text-3xl">
          Visit Our Shop
        </h5>
        <p className="text-sm text-appBlue200 sm:text-base md:max-w-[57.188rem]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Link
          className="w-full max-w-56 rounded-md bg-appRed100 py-3 text-center font-openSans text-white transition-all duration-300 hover:scale-105 active:scale-95"
          href={routes.SHOP_PAGE}
        >
          Visit Shop
        </Link>
      </article>
    </>
  );
};

export default ShopNowSection;
