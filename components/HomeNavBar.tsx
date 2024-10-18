"use client";

import routes from "@/navigation/routes";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppLogo from "./icons/AppLogo";
import { CloseLineIcon, MenuIcon } from "./icons";
import { usePathname } from "next/navigation";

const navs = [
  {
    title: "Home",
    route: routes.HOME_PAGE,
  },
  {
    title: "About",
    route: "",
  },
  {
    title: "Shop",
    route: routes.SHOP_PAGE,
  },
  {
    title: "FAQs",
    route: routes.FAQ_PAGE,
  },
];

const HomeNavBar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileVisible, setMobileVisiblity] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;
      setIsScrolled(scrollPosition > scrollThreshold);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClose = () => {
    setMobileVisiblity(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-10 w-full pt-5 ${
          isScrolled ? "bg-white pb-5 shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 2xl:px-0">
          <ul className="relative flex w-full items-center justify-center gap-7 py-7 lg:gap-10">
            <Link className="absolute left-0" href={routes.HOME_PAGE}>
              <AppLogo className="text-2xl" />
            </Link>
            {navs?.map(({ route, title }, key) => (
              <li key={key}>
                <Link
                  href={route}
                  className={`hidden cursor-pointer text-base text-appBlue100 transition-all duration-300 hover:scale-105 active:scale-95 md:block ${
                    pathName === route
                      ? "font-bold"
                      : "font-normal hover:text-appRed100"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-3 sm:gap-10 md:gap-3 lg:gap-7">
            <li
              onClick={() => setMobileVisiblity(true)}
              className="cursor-pointer md:hidden"
            >
              <MenuIcon className="text-2xl sm:text-3xl" />
            </li>
          </ul>
        </nav>
      </header>
      <nav
        className={`fixed inset-0 z-50 w-full bg-white px-5 transition-all duration-200 sm:w-[70%] md:-translate-x-full ${
          isMobileVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="border-appLightGray200 flex items-center justify-between border-b py-5">
          <AppLogo className="text-2xl" />

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-appBlue200 w-28 cursor-pointer rounded-lg py-3 text-center font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95 sm:w-32 sm:py-3"
            >
              Get Started
            </button>
            <button
              onClick={handleNavClose}
              className="ml-auto text-base md:hidden"
              type="button"
            >
              <CloseLineIcon className="text-3xl sm:text-4xl" />
            </button>
          </div>
        </header>

        <ul className="hidden-scroll flex h-[85%] flex-col items-start gap-y-6 overflow-y-auto py-6 text-base">
          {navs?.map(({ route, title }, key) => (
            <li key={key} className="app-nav-li">
              <Link
                onClick={handleNavClose}
                className={`cursor-pointer text-base text-appBlue100 transition-all duration-300 hover:scale-105 active:scale-95 ${
                  pathName === route
                    ? "font-bold"
                    : "font-normal hover:text-appRed100"
                }`}
                href={route}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HomeNavBar;
