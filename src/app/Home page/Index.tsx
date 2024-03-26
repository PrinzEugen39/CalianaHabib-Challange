import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopSection from "./TopSection";
import Features from "./Features";
import OurProduct from "./OurProduct";
import OurIndustry from "./OurIndustry";
import Testimonial from "./Testimonial";
import FormCaliana from "./FormCaliana";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="py-12 lg:py-28">
        <TopSection />
        <Features />
        <OurProduct />
        <OurIndustry />
        <Testimonial />
      </MaxWidthWrapper>
      <FormCaliana />
    </>
  );
}
