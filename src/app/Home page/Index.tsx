import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopSection from "../../components/HomePage/TopSection";
import Features from "../../components/HomePage/Features";
import OurProduct from "../../components/HomePage/OurProduct";
import OurIndustry from "../../components/HomePage/OurIndustry";
import Testimonial from "../../components/HomePage/Testimonial";
import FormCaliana from "../../components/HomePage/FormCaliana";

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
