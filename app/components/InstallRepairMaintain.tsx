import { CalendarCheck, Hammer, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: Hammer, title: "Install", text: "New systems and full replacements, sized right for your space." },
  { icon: Wrench, title: "Repair", text: "Fast diagnosis. Fixed right the first time." },
  { icon: CalendarCheck, title: "Maintain", text: "Scheduled service that prevents emergencies." },
];

export default function InstallRepairMaintain() {
  return (
    <section className="relative border-y border-ice/10 bg-gradient-to-r from-flame/10 via-navy to-ice/10 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 100} className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-ice/50 bg-navy-dark text-ice shadow-[0_0_24px_rgba(168,221,232,0.25)]">
                <Icon className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="text-2xl font-black">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-white/75">{s.text}</p>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <a href="#contact" className="btn-flame">
          Tell Us What You Need
        </a>
      </div>
    </section>
  );
}
