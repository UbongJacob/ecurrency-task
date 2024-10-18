import ReviewsSection from "@/components/homeSections/ReviewsSection";
import Image from "next/image";
import VapePenImg from "@/public/vape-pen.png";
import Link from "next/link";

const ShopPage = (): JSX.Element => {
  return (
    <>
      <section className="h-[33rem] bg-[url('/shop-hero.png')] bg-cover bg-center bg-no-repeat md:h-[35rem] lg:h-[37.25rem]">
        <section className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5 2xl:px-0">
          <h1 className="text-base text-appBlue100">We're here to help you</h1>
          <h2 className="my-4 text-3xl font-bold text-appBlue100 md:text-4xl lg:text-5xl">
            Relax & Rest
          </h2>
        </section>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-5 gap-y-10 px-5 pb-28 pt-20 md:grid-cols-2 2xl:px-0">
        <Image src={VapePenImg} className="w-full" alt="vape pen" />

        <div className="flex flex-col justify-center pt-24">
          <h3 className="mb-6 text-xl font-bold text-appBlue100 md:text-2xl lg:text-3xl">
            About Product
          </h3>

          <h5 className="mb-3 text-appBlue200 sm:text-base lg:max-w-[26.313rem]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </h5>

          <article className="italic text-appGreen100 sm:text-base">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect. </p>
            <p>
              ✅ 100% drug-free, plant-based ingredients. ‍<br />
              ⚕️ 3rd-party lab tested.
            </p>
          </article>

          <div className="flex gap-14 pt-5">
            <div>
              <p className="sm:text-base">Price</p>
              <data
                value="50"
                className="block pt-3 font-semibold sm:text-base"
              >
                USD 50
              </data>
            </div>
            <div>
              <label htmlFor="unit" className="block pb-2 sm:text-base">
                Unit
              </label>
              <input
                className="focus:ring-appBlue300 h-8 w-full max-w-16 rounded-md px-2 outline-0 ring-1 ring-appBlue100 transition-all duration-300"
                type="number"
                name="unit"
                defaultValue={0}
                id="unit"
              />
            </div>
          </div>
          <button
            className="mt-9 max-w-56 rounded-md bg-appRed100 py-3 text-center font-openSans text-white transition-all duration-300 hover:scale-105 active:scale-95"
            type="button"
          >
            Buy
          </button>
        </div>
      </section>

      <hr className="mx-auto mb-20 max-w-7xl border-[1px] border-appLightGray200" />

      <ReviewsSection hideLine />
      <div className="h-24"></div>
    </>
  );
};

export default ShopPage;
