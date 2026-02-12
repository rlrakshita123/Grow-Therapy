import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import OfficeSection from "@/components/OfficeSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OfficeSection />
      <FinalCTASection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
