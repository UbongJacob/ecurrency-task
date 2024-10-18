import HappyCustomerSection from "@/components/homeSections/HappyCustomerSection";
import HeroSection from "@/components/homeSections/HeroSection";
import ProductReviewsSection from "@/components/homeSections/ProductReviewsSection";
import ReviewsSection from "@/components/homeSections/ReviewsSection";
import ShopNowSection from "@/components/homeSections/ShopNowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HappyCustomerSection />
      <ReviewsSection />
      <ShopNowSection />
      <ProductReviewsSection />
    </>
  );
}
