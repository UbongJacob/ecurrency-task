import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/homeSections/FooterSection";
import HomeNavBar from "@/components/HomeNavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "E-currency task",
  description: "E-currency task done by Ubong Jacob <ubongjacob14@gmail.com>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        <main className="mx-auto max-w-[200rem] bg-white">
          <HomeNavBar />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}
