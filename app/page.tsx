import HomeNavBar from "@/components/HomeNavBar";
import routes from "@/navigation/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-[100dvh] bg-[url('/home-hero.png')] bg-cover bg-center bg-no-repeat">
        <HomeNavBar />
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
            className="font-openSans max-w-56 rounded-md bg-appRed100 py-3 text-center text-white transition-all duration-300 hover:scale-105 active:scale-95"
            href={routes.SHOP_PAGE}
          >
            Visit Shop
          </Link>
        </section>
      </div>
    </main>
  );
}
