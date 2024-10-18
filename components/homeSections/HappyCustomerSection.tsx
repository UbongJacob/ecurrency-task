const HappyCustomerSection = (): JSX.Element => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 px-5 pb-40 pt-44 2xl:px-0">
      <article className="flex h-full flex-col justify-center text-appBlue100 md:max-w-lg">
        <h4>Our Amazing Story</h4>
        <p className="pb-10 pt-6 text-xl font-bold md:text-2xl lg:text-3xl">
          10k+Happy Customers
        </p>
        <p className="text-appBlue200 pb-7 text-sm sm:text-base">
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>

        <span className="flex items-center gap-1 text-base text-appBlue100 transition-all duration-300 hover:text-appRed100">
          <span className="font-medium underline underline-offset-2">
            Know More About Us
          </span>
        </span>
      </article>
    </section>
  );
};

export default HappyCustomerSection;
