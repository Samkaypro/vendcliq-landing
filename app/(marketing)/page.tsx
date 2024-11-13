import HeroLanding from "@/components/sections/hero-landing";
import About from "@/components/sections/home/home-about";
import Features from "@/components/sections/home/home-features";
import Hometestimonials from "@/components/sections/home/home-testimonials";


export default function IndexPage() {
  return (
    <>
      <HeroLanding /> 
      <About />
      <Hometestimonials />
      <Features />
     
    </>
  );
}
