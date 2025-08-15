import NavbarComponent from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import Partners from "@/components/shared/Partners";
import About from "@/components/shared/About";
import ServicesSection from "@/components/shared/ServicesSection";
import Footer from "@/components/shared/Footer";
import Portfolio from "@/components/shared/Portfolio";
import Pricing from "@/components/shared/Pricing";
import Testimonials from "@/components/shared/Testimonials";
import Tawk from '@/lib/Tawk'
export default function Home() {
  return (
    <div className="dark:bg-[#1A1A1A] bg-background h-full max-w-screen-xl mx-auto space-y-2 md:space-y-4">
      <NavbarComponent></NavbarComponent>
      <HeroSection></HeroSection>
      <About></About>
      <ServicesSection></ServicesSection>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Footer></Footer>
      {/* <Tawk></Tawk>  */}
    </div>
  );
}
