import ReviewsSection from "@/components/homeSections/ReviewsSection";

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
      <ReviewsSection />
    </>
  );
};

export default ShopPage;
