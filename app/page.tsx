import Header from "./components/Header";
import Hero from "./components/Hero";
import EmergencyBanner from "./components/EmergencyBanner";
import Services from "./components/Services";
import HomeBusiness from "./components/HomeBusiness";
import InstallRepairMaintain from "./components/InstallRepairMaintain";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import LightStreak from "./components/LightStreak";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <HomeBusiness />
        <InstallRepairMaintain />
        <WhyChoose />
        <Testimonials />
        <LightStreak flip className="bg-navy-dark" />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
