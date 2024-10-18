import {
  FacebookIcon,
  GooglePlusIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons";
import { AppLightLogo } from "../icons/AppLogo";

const navs = ["About", "Blog", "Contact", "Jobs"];

const contact = [
  "Phone",
  "+234 708 507 3128",
  "Address",
  "16, Ogindipe Close, Upston  Close",
];

const socials = [
  <FacebookIcon />,
  <TwitterIcon />,
  <GooglePlusIcon />,
  <LinkedInIcon />,
];

const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative bg-appBlue100 px-5 py-10 2xl:px-0">
      <AppLightLogo className="mx-auto text-4xl" />

      <div className="mx-auto grid max-w-[82.813rem] grid-cols-2 gap-x-5 gap-y-10 pt-12 text-white md:grid-cols-4 xl:grid-cols-11">
        <ul className="col-span-1 flex flex-col gap-y-5">
          <li className="pb-5 text-sm font-semibold sm:text-base">COMPANY</li>

          {navs?.map((value, key) => (
            <li
              className="text-appGray100 cursor-pointer transition-all duration-300 hover:scale-105 hover:text-white active:scale-95"
              key={key}
            >
              {value}
            </li>
          ))}
        </ul>

        <ul className="col-span-1 flex flex-col gap-y-5 xl:col-span-3">
          <li className="pb-5 text-sm font-semibold sm:text-base">CONTACT</li>

          {contact?.map((value, key) => (
            <li
              className="text-appGray100 odd:hover:text-appBlue300 transition-all duration-300 odd:cursor-pointer odd:font-semibold odd:text-white odd:hover:scale-105 active:scale-95"
              key={key}
            >
              {value}
            </li>
          ))}
        </ul>

        <dl className="col-span-2 xl:col-span-4">
          <dt className="pb-5 text-sm font-semibold sm:text-base">
            CONSUMER ADVISORY
          </dt>
          <dd className="flex flex-col gap-y-5 text-sm sm:text-base">
            <p>
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </p>

            <p>
              By using our website or product, you agree to follow our{" "}
              <span className="text-appBlue300">terms of service.</span>
            </p>
          </dd>
        </dl>

        <div className="col-span-2 flex flex-col md:col-span-4 md:justify-center xl:col-span-3">
          <p className="pb-5 text-sm font-semibold sm:text-base">
            GET IN TOUCH
          </p>

          <p className="text-appGray100 sm:text-base xl:max-w-64">
            Feel free to get in touch with us via email
          </p>

          <p className="py-6 text-base font-bold md:text-lg lg:text-xl">
            hello@sleepstiq.com
          </p>

          <ul className="flex items-center gap-3">
            {socials?.map((value, key) => (
              <li
                className="text-appBlue300 cursor-pointer text-2xl transition-all duration-300 hover:scale-110 hover:text-white active:scale-90 sm:text-3xl"
                key={key}
              >
                {value}
              </li>
            ))}
          </ul>
          <p className="text-appGray100 mt-auto py-5">
            © 2020@sleepstiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
