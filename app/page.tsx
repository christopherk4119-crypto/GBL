import Hero from "./components/Hero";
import EmergencyBanner from "./components/EmergencyBanner";
import Services from "./components/Services";
import HomeBusiness from "./components/HomeBusiness";
import InstallRepairMaintain from "./components/InstallRepairMaintain";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import LightStreak from "./components/LightStreak";

export default function Page() {
  return (
    <>
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
    </>
  );
}
