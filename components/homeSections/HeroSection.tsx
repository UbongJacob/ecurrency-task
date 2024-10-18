import routes from "@/navigation/routes";
import BloombergLogo from "@/public/bloomberg-logo.png";
import ForbesLogo from "@/public/forbes-logo.png";
import GoogleLogo from "@/public/google-logo.png";
import InflunciveLogo from "@/public/influncive-logo.png";
import SleepReviewLogo from "@/public/sleep-review-logo.png";
import Image from "next/image";
import Link from "next/link";

const logos = [
  BloombergLogo,
  ForbesLogo,
  GoogleLogo,
  SleepReviewLogo,
  InflunciveLogo,
];

const HeroSection = (): JSX.Element => {
  return (
    <>
      <div className="h-[100dvh] bg-[url('/home-hero.png')] bg-cover bg-center bg-no-repeat">
        <section className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5 2xl:px-0">
          <h1 className="text-base text-appBlue100">We're here to help you</h1>
          <h2 className="my-4 text-3xl font-bold text-appBlue100 md:text-4xl lg:text-5xl">
            Relax & Rest
          </h2>
          <h3 className="mb-6 max-w-xl text-base text-appBlue100">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </h3>
          <Link
            className="max-w-56 rounded-md bg-appRed100 py-3 text-center font-openSans text-white transition-all duration-300 hover:scale-105 active:scale-95"
            href={routes.SHOP_PAGE}
          >
            Visit Shop
          </Link>
        </section>
      </div>
      <ul className="-mt-10 ml-auto flex max-w-[88rem] flex-wrap items-center justify-around gap-x-10 gap-y-4 rounded bg-white p-5 shadow-2xl lg:gap-x-4 lg:gap-y-7">
        {logos?.map((value, key) => (
          <li key={key}>
            <Image className="w-full max-w-32" src={value} alt="logo" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroSection;
