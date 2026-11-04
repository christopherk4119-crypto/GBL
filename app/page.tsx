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
import FaqSection from "./components/FaqSection";
import { GENERAL_FAQS } from "@/lib/faq";
import Link from "next/link";

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
      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <FaqSection faqs={GENERAL_FAQS} heading="Common Questions" />
          <p className="mt-6 text-center">
            <Link href="/faq" className="font-bold text-ice hover:underline">
              More questions about furnaces, AC and refrigeration
            </Link>
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
