import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";
import ServiciosSection from "@/components/ServiciosSection";
import GaleriaSection from "@/components/GaleriaSection";
import FilosofiaSection from "@/components/FilosofiaSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HistoriaSection />
      <ServiciosSection />
      <GaleriaSection />
      <FilosofiaSection />
      <TestimoniosSection />
      <ContactoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
