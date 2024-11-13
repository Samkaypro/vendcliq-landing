import HeroLanding from "@/components/sections/inventory/hero-landing";
import PreviewLanding from "@/components/sections/inventory/preview-landing";
import Gettoknowus from "@/components/sections/inventory/get-to-know-us"
import Whyvendcliq from "@/components/sections/inventory/why-vendcliq"
import Testimonial from "@/components/sections/inventory/testimonials"

export default function IndexPage() {
  return (
    <>
      <HeroLanding /> 
      <PreviewLanding />
      <Gettoknowus />
      <Whyvendcliq />
      <Testimonial />
    </>
  );
}
