// Content for the service pages (hub-and-spoke).
// Rules (see SEO-PLAYBOOK.md): one topic per page, real detail, no pricing claims,
// no credential claims until the client confirms them, no doorway pages.

export type Faq = { q: string; a: string };

export type ServicePage = {
  slug: string; // URL path without leading slash, e.g. "heating" or "heating/24-hour-furnace-repair"
  name: string; // short name for cards, breadcrumbs and links
  serviceType: string; // schema.org Service.serviceType
  tone: "warm" | "cool";
  title: string; // full <title>, under 60 characters, keyword first
  description: string; // meta description, under 155 characters
  h1: string;
  lede: string;
  intro: string[];
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  included: string[];
  faqs: Faq[];
  related: string[]; // slugs of related pages (cross-links)
  parent?: string; // hub slug, for spokes
  image: { src: string; alt: string };
};

const VAN = {
  src: "/images/gbl-hvac-service-van-calgary.jpg",
  alt: "GBL HVAC LTD service van in a Calgary residential neighbourhood",
};

export const SERVICES: ServicePage[] = [
  {
    slug: "heating",
    name: "Heating",
    serviceType: "Furnace and boiler installation, repair and maintenance",
    tone: "warm",
    title: "Furnace Repair Calgary | 24/7 Heating Service",
    description:
      "Furnace and boiler repair, installation and maintenance in Calgary. Open 24 hours, 7 days, for homes and businesses. Call 403-970-6988.",
    h1: "Furnace Repair in Calgary",
    lede: "Furnace and boiler repair, installation and maintenance for Calgary homes and businesses. Open 24 hours, every day of the year.",
    intro: [
      "Furnace dies on a January night? We pick up 24/7 and get your heat back on.",
    ],
    sections: [
      {
        heading: "Signs your furnace needs service",
        body: [],
        bullets: [
          "Cool air: furnace runs but vents blow cool or barely warm",
          "Short cycling: starts, runs a few minutes, shuts off, repeats",
          "Cold rooms: some rooms much colder than others",
          "New noises: banging, squealing, rattling or a boom at start-up",
          "No ignition: igniter clicks but burners don't light",
          "Rising gas bill: with no change in how you use heat",
          "Older unit: several repairs in the last few winters",
        ],
      },
      {
        heading: "Furnace repair",
        body: [],
        bullets: [
          "Full diagnosis: thermostat, filter, igniter, flame sensor, switches, inducer, blower, venting, safety controls",
          "Plain-language answer: what's wrong and what it takes, before work starts",
          "Common culprit: snow or frost blocking the pipes on the outside wall",
        ],
      },
      {
        heading: "Installation & replacement",
        body: [],
        bullets: [
          "Honest advice: repair vs. replace, your call",
          "Typical lifespan: around 15 to 20 years, depending on maintenance",
          "Sized right: for your actual home, ducts and venting",
          "Boilers too: hot water boilers for homes and commercial buildings",
          "Permits: some heating work needs a City permit. Ask us",
        ],
      },
      {
        heading: "Businesses",
        body: [],
        bullets: [
          "Commercial furnaces and unit heaters",
          "Boilers and rooftop unit heating sections",
          "Scheduled maintenance so it doesn't fail during opening hours",
        ],
      },
      {
        heading: "Quick checks before you call",
        body: [
          "Two minutes. Sometimes it fixes the problem. If not, call any time.",
        ],
        bullets: [
          "Thermostat: set to Heat, above room temp, fresh batteries",
          "Furnace switch: the light-style switch near the unit is on",
          "Breaker: not tripped",
          "Filter: replace if dirty, a clogged filter can shut it down",
          "Outside pipes: clear snow and frost",
        ],
      },
    ],
    included: [
      "Furnace diagnosis and repair",
      "High-efficiency furnace installation and replacement",
      "Hot water boiler installation and repair",
      "Thermostat installation and troubleshooting",
      "Commercial heating and rooftop unit heating sections",
      "Seasonal furnace tune-ups",
    ],
    faqs: [
      {
        q: "Do you really answer at night and on weekends?",
        a: "Yes. GBL HVAC LTD is open 24 hours, 7 days a week, including holidays. Call 403-970-6988 and you'll talk to Quinn directly, not a call centre.",
      },
      {
        q: "Should I repair or replace my furnace?",
        a: "It depends on the furnace's age, its condition and what the repair involves. A newer furnace with a failed part is usually worth repairing. An older furnace that needs a major component, or keeps breaking down, is often better replaced. We'll give you both options and let you decide.",
      },
      {
        q: "What should I do if I smell gas?",
        a: "Don't touch light switches or use anything that could spark. Leave the building, then call 911 or your gas utility's emergency line from outside. Once the utility has made it safe, call us to repair the appliance.",
      },
      {
        q: "My furnace keeps shutting off in very cold weather. Why?",
        a: "On high-efficiency furnaces, a common cause is snow or frost blocking the intake or exhaust pipes outside. Other causes include a dirty flame sensor, a clogged filter or a failing pressure switch. Clear the pipes if it's safe to do so, and call us if it keeps happening.",
      },
      {
        q: "Do you work on commercial heating?",
        a: "Yes. We service furnaces, boilers, unit heaters and rooftop unit heating sections for restaurants, stores, offices and other businesses in Calgary.",
      },
    ],
    related: ["heating/24-hour-furnace-repair", "rooftop-units", "maintenance-plans", "water-heaters"],
    image: VAN,
  },
  {
    slug: "heating/24-hour-furnace-repair",
    parent: "heating",
    name: "24 Hour Furnace Repair",
    serviceType: "Emergency furnace repair",
    tone: "warm",
    title: "24 Hour Furnace Repair Calgary | Call 403-970-6988",
    description:
      "Furnace out in the middle of the night? GBL HVAC LTD answers 24/7 across Calgary. Emergency furnace and boiler repair for homes and businesses.",
    h1: "24 Hour Furnace Repair in Calgary",
    lede: "No heat at 2am, minus 30 outside. Call 403-970-6988. We pick up 24 hours a day, 7 days a week.",
    intro: [
      "No heat at 2am? Call 403-970-6988. You talk to Quinn, the owner, not an answering service.",
    ],
    sections: [
      {
        heading: "Do this right now",
        body: [],
        bullets: [
          "Gas smell or CO alarm: get everyone out and call 911 from outside",
          "Basic checks: thermostat on Heat, furnace switch on, breaker not tripped",
          "Filter: swap it if you have a spare",
          "Outside pipes: clear snow and frost",
          "Stay warm: close blinds, shut unused rooms, keep everyone together",
          "Never: heat the house with a gas stove, oven or barbecue",
        ],
      },
      {
        heading: "Protect your pipes",
        body: [
          "A burst pipe can cost more than the furnace repair.",
        ],
        bullets: [
          "Pipes on outside walls, crawl spaces and garages freeze first",
          "Open cabinet doors under sinks on outside walls",
          "Let a tap drip slightly",
          "Leaving the house? Tell us so we can talk through the risk",
        ],
      },
      {
        heading: "When you call",
        body: [],
        bullets: [
          "Tell us: no heat, cold air, short cycling, noises, error lights",
          "We narrow it down on the phone",
          "On site: diagnose, explain, get heat back on safely",
          "Part on order? We'll talk through keeping you warm meanwhile",
        ],
      },
      {
        heading: "Common causes",
        body: [],
        bullets: [
          "Snow, ice or frost blocking intake or exhaust pipes",
          "Failed hot surface igniter",
          "Dirty or failed flame sensor",
          "Inducer motor or pressure switch faults",
          "Blower motor or capacitor failure",
          "Clogged filter causing overheat lockout",
          "Thermostat or wiring faults",
        ],
      },
      {
        heading: "Businesses too",
        body: [],
        bullets: [
          "Restaurants, stores and offices answered around the clock",
          "Furnaces, unit heaters, boilers and rooftop units",
        ],
      },
      {
        heading: "Stop the next one",
        body: [],
        bullets: [
          "Fall tune-ups catch cracked igniters, dirty sensors and weak capacitors",
          "Ask about seasonal maintenance once your heat is back",
        ],
      },
    ],
    included: [
      "24/7 phone answer, 365 days a year",
      "Emergency diagnosis and repair",
      "Residential and commercial furnaces",
      "Boilers and unit heaters",
      "Honest repair-or-replace advice",
      "Follow-up maintenance to prevent repeat breakdowns",
    ],
    faqs: [
      {
        q: "Are you really open 24 hours?",
        a: "Yes. GBL HVAC LTD answers 24 hours a day, 7 days a week, including holidays. Call 403-970-6988.",
      },
      {
        q: "Do you charge extra for after-hours calls?",
        a: "Ask when you call. We'll explain how the visit is charged before we come out, so there are no surprises.",
      },
      {
        q: "How cold will my house get without heat?",
        a: "It depends on the outside temperature, your insulation and how airtight the house is. In a deep cold snap a house can lose a lot of heat overnight, which is why we recommend protecting pipes on outside walls and calling right away rather than waiting until morning.",
      },
      {
        q: "My carbon monoxide alarm went off. Should I call you?",
        a: "Call 911 first and get everyone out of the house. Once emergency responders say it's safe, call us to inspect and repair the furnace or other appliance involved.",
      },
      {
        q: "Do you handle emergency calls for businesses?",
        a: "Yes. We answer commercial heating emergencies around the clock for restaurants, stores, offices and other businesses in Calgary.",
      },
    ],
    related: ["heating", "maintenance-plans", "water-heaters", "refrigeration"],
    image: {
      src: "/images/gbl-hvac-van-24-7-emergency-service.jpg",
      alt: "Rear of the GBL HVAC LTD van showing 24/7 emergency service and phone number 403-970-6988",
    },
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    serviceType: "Air conditioning installation, repair and maintenance",
    tone: "cool",
    title: "AC Installation Calgary | Repair & Tune-Ups",
    description:
      "Central air conditioning installation, repair and tune-ups in Calgary for homes and businesses. Open 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "AC Installation & Repair in Calgary",
    lede: "Central air conditioning installed, repaired and tuned up for Calgary homes and businesses, so you're ready before the heat arrives.",
    intro: [
      "Calgary summers are short, but the hot stretches are real. Get your AC installed, fixed or tuned up before the heat hits.",
    ],
    sections: [
      {
        heading: "AC installation",
        body: [],
        bullets: [
          "Uses your ducts: most homes with a forced-air furnace can add central air",
          "Sized right: not too big, not too small, based on your home",
          "Smart placement: level ground, airflow clearance, away from bedroom windows",
        ],
      },
      {
        heading: "Call us if",
        body: [],
        bullets: [
          "Vents blow warm air",
          "Outdoor unit won't run",
          "Ice on the lines or indoor coil",
          "Water pooling near the furnace",
          "Buzzing, clicking or grinding outside",
          "Breaker trips when AC starts",
          "Some rooms stay hot",
        ],
      },
      {
        heading: "What we check",
        body: [],
        bullets: [
          "Thermostat, capacitor, contactor and fan motors",
          "Compressor and refrigerant pressures",
          "Condensate drain and airflow",
          "Low refrigerant: means a leak, we find it instead of just topping up",
        ],
      },
      {
        heading: "Spring tune-up",
        body: [],
        bullets: [
          "Clean outdoor coil",
          "Check electrical connections and refrigerant",
          "Test capacitor, clear condensate drain",
          "Your part: keep the outdoor unit clear of grass and cottonwood fluff",
        ],
      },
      {
        heading: "Commercial cooling",
        body: [],
        bullets: [
          "Commercial split systems",
          "Rooftop unit cooling",
          "Scheduled maintenance before summer",
        ],
      },
    ],
    included: [
      "Central air conditioning installation",
      "AC diagnosis and repair",
      "Spring AC tune-ups",
      "Thermostat upgrades",
      "Commercial split systems and rooftop unit cooling",
      "Airflow and comfort troubleshooting",
    ],
    faqs: [
      {
        q: "Can I add central AC to my house?",
        a: "If your home has a forced-air furnace and ductwork, central air can usually be added using the existing system. We'll check your furnace, ducts and electrical service and tell you what's involved.",
      },
      {
        q: "Why is my AC running but not cooling?",
        a: "Common causes include a dirty filter, a failed capacitor or contactor at the outdoor unit, low refrigerant from a leak, or a frozen indoor coil. Turn the system off if you see ice and call us.",
      },
      {
        q: "When should I book AC installation?",
        a: "Spring is ideal, before the first heat wave when demand jumps. That said, we install and repair year-round.",
      },
      {
        q: "How often should my AC be serviced?",
        a: "Once a year, ideally in spring before you need it. Pairing it with a fall furnace tune-up keeps both systems checked on a regular schedule.",
      },
      {
        q: "Do you service commercial air conditioning?",
        a: "Yes. We work on commercial split systems and rooftop units for offices, stores and restaurants across Calgary.",
      },
    ],
    related: ["rooftop-units", "maintenance-plans", "ventilation", "heating"],
    image: VAN,
  },
  {
    slug: "refrigeration",
    name: "Refrigeration",
    serviceType: "Commercial refrigeration and walk-in cooler service",
    tone: "cool",
    title: "Commercial Refrigeration Calgary | 24/7 Service",
    description:
      "Walk-in cooler, freezer and commercial refrigeration repair in Calgary. Open 24/7 for restaurants, stores and businesses. Call 403-970-6988.",
    h1: "Commercial Refrigeration Repair in Calgary",
    lede: "Walk-in coolers, freezers and commercial refrigeration for Calgary restaurants, stores and businesses. Answered 24/7.",
    intro: [
      "A failing cooler means product on the line. We answer 24/7 for restaurants, stores and food businesses.",
    ],
    sections: [
      {
        heading: "What we work on",
        body: [],
        bullets: [
          "Walk-in coolers and freezers",
          "Condensing units and evaporators",
          "Reach-in coolers and freezers",
          "Display cases and merchandisers",
          "Prep tables and under-counter units",
          "Ice machines",
        ],
      },
      {
        heading: "Warning signs",
        body: [],
        bullets: [
          "Temperature creeping up or slow to recover",
          "Ice on the evaporator coil or door",
          "Condensing unit running non-stop or short cycling",
          "Water on the walk-in floor",
          "Doors not sealing, torn gaskets",
          "New fan or compressor noises",
        ],
      },
      {
        heading: "Failing right now?",
        body: [],
        bullets: [
          "Keep the door shut",
          "Move valuable product to a working unit",
          "Thermometer inside: record temps and times",
          "Food safety: cold-held food generally at 4°C or below",
          "Call 403-970-6988: tell us the unit, temp and symptoms",
        ],
      },
      {
        heading: "Repair",
        body: [],
        bullets: [
          "Thermostat and controls",
          "Defrost timers and heaters",
          "Evaporator and condenser fans",
          "Coils, refrigerant, compressor, electrical",
          "Dirty condenser coils: a top cause in busy kitchens",
        ],
      },
      {
        heading: "Preventive maintenance",
        body: [],
        bullets: [
          "Clean condenser coils",
          "Check refrigerant and pressures",
          "Inspect fans, test defrost and controls",
          "Check gaskets and hinges, clear drains",
          "Scheduled around your opening hours",
        ],
      },
    ],
    included: [
      "24/7 emergency refrigeration calls",
      "Walk-in cooler and freezer repair",
      "Reach-in, display and prep unit service",
      "Ice machine service",
      "Door gasket and closer checks",
      "Scheduled preventive maintenance",
    ],
    faqs: [
      {
        q: "Do you answer refrigeration calls after hours?",
        a: "Yes. We're open 24 hours, 7 days a week. Call 403-970-6988 any time a cooler or freezer starts failing.",
      },
      {
        q: "What should I do while I wait for a technician?",
        a: "Keep the door closed, move high-value product to another working unit if you can, and keep a thermometer inside so you know the real temperature. Write down the readings and times.",
      },
      {
        q: "Why is there ice on my walk-in's evaporator coil?",
        a: "Usually a defrost problem, a failing evaporator fan, a door that isn't sealing, or low refrigerant. Heavy ice blocks airflow and the box warms up, so it should be checked soon.",
      },
      {
        q: "How often should commercial refrigeration be maintained?",
        a: "It depends on the equipment and the environment. Busy kitchens with grease and heat usually need more frequent coil cleaning than a dry storage area. We'll recommend a schedule after looking at your equipment.",
      },
      {
        q: "Do you also handle the building's heating and cooling?",
        a: "Yes. One company for every system in your building: refrigeration, heating, air conditioning, ventilation and water heaters.",
      },
    ],
    related: ["refrigeration/walk-in-coolers-freezers", "refrigeration/ice-machines", "maintenance-plans", "ventilation/hood-fans-make-up-air"],
    image: VAN,
  },
  {
    slug: "ventilation",
    name: "Ventilation",
    serviceType: "Ventilation, air exchanger and ductwork service",
    tone: "cool",
    title: "Ventilation & HRV Service Calgary | Ductwork",
    description:
      "HRV and air exchanger service, ventilation and ductwork for Calgary homes and businesses. Cleaner, healthier air. Call GBL HVAC LTD, open 24/7.",
    h1: "Ventilation, HRVs & Ductwork in Calgary",
    lede: "Air exchangers, ventilation and ductwork for cleaner, healthier air in Calgary homes and businesses.",
    intro: [
      "Tight new homes trap moisture and stale air. Good ventilation swaps it for fresh air without wasting heat.",
    ],
    sections: [
      {
        heading: "Signs you need better ventilation",
        body: [],
        bullets: [
          "Condensation or frost on inside windows",
          "Musty or lingering cooking smells",
          "Stuffy bedrooms overnight",
          "Mould near windows or in bathrooms",
          "HRV noisy, iced up or never cleaned",
          "Rooms always too hot or too cold",
        ],
      },
      {
        heading: "HRVs & air exchangers",
        body: [],
        bullets: [
          "What it does: swaps stale air for fresh, keeps the heat",
          "Needs care: filters, core, drain and outdoor hoods",
          "Neglected units: can move very little air",
          "We service, troubleshoot and install",
        ],
      },
      {
        heading: "Ductwork",
        body: [],
        bullets: [
          "Repairs and sealing leaky joints",
          "New runs for renovations and basements",
          "Airflow balancing so every room gets air",
        ],
      },
      {
        heading: "Commercial ventilation",
        body: [],
        bullets: [
          "Fresh air for offices, stores and restaurants",
          "Make-up air to replace what kitchen hoods pull out",
          "Rooftop unit ventilation",
          "Signs of trouble: hard-to-open doors, drafts",
        ],
      },
      {
        heading: "Easy wins at home",
        body: [],
        bullets: [
          "Run bathroom fans during and after showers",
          "Use the range hood when cooking",
          "Clean HRV filters per the manual",
          "Keep outdoor hoods clear of snow",
          "Don't cover vents with furniture or rugs",
        ],
      },
    ],
    included: [
      "HRV and air exchanger service and repair",
      "HRV installation",
      "Ductwork repair, sealing and modifications",
      "Airflow balancing",
      "Exhaust fan installation",
      "Commercial ventilation and make-up air",
    ],
    faqs: [
      {
        q: "What is an HRV and do I have one?",
        a: "A heat recovery ventilator exchanges stale indoor air for fresh outdoor air while recovering heat. It's usually a box near the furnace with two insulated ducts running to the outside wall. Many newer Calgary homes have one.",
      },
      {
        q: "Why are my windows covered in condensation in winter?",
        a: "Usually indoor humidity is too high for the outdoor temperature, and the house isn't getting enough ventilation. Running an HRV correctly and using bathroom and kitchen fans normally helps. We can check whether your ventilation is working as it should.",
      },
      {
        q: "How often should an HRV be serviced?",
        a: "Filters and the core need regular cleaning, often every few months, according to the manufacturer's manual. A yearly professional check is a good idea, and it fits naturally with a furnace tune-up.",
      },
      {
        q: "Can you add ductwork for my basement development?",
        a: "Yes. We add and modify duct runs for renovations and basement developments so new rooms get proper heating and airflow.",
      },
    ],
    related: ["rooftop-units", "heating", "air-conditioning", "maintenance-plans"],
    image: VAN,
  },
  {
    slug: "water-heaters",
    name: "Water Heater",
    serviceType: "Water heater installation and repair",
    tone: "warm",
    title: "Hot Water Tank Repair Calgary | Water Heaters",
    description:
      "Hot water tank repair and replacement in Calgary for homes and businesses. Leaks and no hot water answered 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Hot Water Tank Repair & Replacement in Calgary",
    lede: "Hot water tank repair and replacement for Calgary homes and businesses.",
    intro: [
      "No hot water means no showers, no laundry, and for some businesses, no opening. We fix it 24/7.",
    ],
    sections: [
      {
        heading: "Signs it needs attention",
        body: [],
        bullets: [
          "No hot water, or it runs out fast",
          "Water around the base of the tank",
          "Rusty or discoloured hot water",
          "Rumbling or popping sounds",
          "Pilot won't stay lit",
          "Tank older than about 10 years",
        ],
      },
      {
        heading: "Leaking? Do this",
        body: [],
        bullets: [
          "Shut off: the cold water valve on top of the tank",
          "Gas tank: turn the control to Off or Pilot",
          "Electric tank: switch off its breaker",
          "Then call us",
          "Fitting drip: often repairable. Tank leak: needs replacing",
        ],
      },
      {
        heading: "Tank water heaters",
        body: [],
        bullets: [
          "Typical lifespan: around 8 to 12 years",
          "Calgary's hard water: leaves sediment that shortens life",
          "Repairs: burners, thermocouples, gas valves, venting, elements",
          "Replacement: sized for your household",
        ],
      },
      {
        heading: "Choosing a new tank",
        body: [],
        bullets: [
          "Gas or electric: matched to what your home is set up for",
          "Right size: based on how many people and bathrooms you have",
          "Too small: you run out. Too big: you heat water you don't use",
          "Honest repair vs. replace advice first",
        ],
      },
      {
        heading: "Commercial & permits",
        body: [],
        bullets: [
          "Commercial water heaters for restaurants, salons and gyms",
          "Is yours keeping up with demand? We'll check",
          "Some replacements need a City permit. Ask us",
        ],
      },
    ],
    included: [
      "Hot water tank repair",
      "Hot water tank replacement",
      "Gas and electric tanks",
      "Commercial water heater service",
      "24/7 response for leaks and no hot water",
    ],
    faqs: [
      {
        q: "How long does a hot water tank last?",
        a: "Typically somewhere around 8 to 12 years, depending on water quality, usage and maintenance. If yours is in that range and starting to show problems, it's worth planning a replacement before it fails.",
      },
      {
        q: "Do you install tankless water heaters?",
        a: "No. We focus on hot water tanks: repair, replacement and commercial water heaters. If your tank is failing, we'll give you an honest repair-or-replace answer.",
      },
      {
        q: "Why does my water heater make popping noises?",
        a: "Usually sediment built up in the bottom of the tank. Water trapped under the sediment boils and pops. Flushing can help on a newer tank. On an older tank it's often a sign it's near the end of its life.",
      },
      {
        q: "My water heater is leaking. What do I do?",
        a: "Shut off the cold water supply to the tank, turn the gas control to Off or Pilot (or switch off the breaker on an electric tank), and call 403-970-6988. We answer 24/7.",
      },
    ],
    related: ["heating", "maintenance-plans", "ventilation", "heating/24-hour-furnace-repair"],
    image: VAN,
  },
  {
    slug: "maintenance-plans",
    name: "Maintenance Plans",
    serviceType: "Seasonal HVAC maintenance and tune-ups",
    tone: "warm",
    title: "Furnace & AC Maintenance Calgary | Tune-Ups",
    description:
      "Seasonal furnace and AC tune-ups in Calgary that prevent breakdowns and lower energy bills. Homes and commercial contracts. Call 403-970-6988.",
    h1: "Furnace & AC Maintenance in Calgary",
    lede: "Seasonal furnace and AC tune-ups that prevent breakdowns and help keep energy bills down. Homes and businesses.",
    intro: [
      "Most breakdowns start small. A scheduled visit catches them before 2am in January.",
    ],
    sections: [
      {
        heading: "Fall furnace tune-up",
        body: [
          "Book before the first cold snap.",
        ],
        bullets: [
          "Clean burners and flame sensor",
          "Check igniter, inducer and pressure switches",
          "Inspect heat exchanger area and venting",
          "Test safety controls and limit switches",
          "Check blower, motor and capacitor",
          "Check thermostat and the right filter",
        ],
      },
      {
        heading: "Spring AC tune-up",
        body: [
          "Book before everyone else calls.",
        ],
        bullets: [
          "Clean outdoor condenser coil",
          "Check refrigerant pressures",
          "Test capacitor, contactor and fan motor",
          "Clear condensate drain",
          "Confirm temperature drop and airflow",
        ],
      },
      {
        heading: "Why it's worth it",
        body: [],
        bullets: [
          "Efficiency: a clean system uses less gas and power",
          "Fewer emergencies: less likely to fail on the worst day",
          "No surprises: see replacement coming and plan for it",
          "Warranty: many manufacturers expect regular maintenance",
        ],
      },
      {
        heading: "Commercial contracts",
        body: [],
        bullets: [
          "Rooftop units, furnaces and boilers",
          "Make-up air, walk-ins and refrigeration",
          "Timed around your business hours",
          "Every visit documented",
        ],
      },
      {
        heading: "Between visits",
        body: [],
        bullets: [
          "Check the furnace filter monthly in winter",
          "Keep the outdoor AC unit clear",
          "Keep furnace pipes clear of snow",
          "Clean HRV filters",
          "Test smoke and CO alarms",
        ],
      },
    ],
    included: [
      "Fall furnace tune-ups",
      "Spring AC tune-ups",
      "Boiler, HRV and water heater checks",
      "Commercial rooftop unit maintenance",
      "Commercial refrigeration maintenance",
      "Written notes on every visit",
    ],
    faqs: [
      {
        q: "How often should my furnace be serviced?",
        a: "Once a year, ideally in early fall before heating season. It's the best way to catch small problems before they cause a breakdown.",
      },
      {
        q: "Can you tune up my furnace and AC in one visit?",
        a: "Yes. Many homeowners book both together. We can also split them into a fall furnace visit and a spring AC visit so each is checked right before it's needed.",
      },
      {
        q: "Do you offer maintenance contracts for businesses?",
        a: "Yes. We set up scheduled maintenance for commercial heating, cooling, ventilation and refrigeration, timed around your business hours.",
      },
      {
        q: "How often should I change my furnace filter?",
        a: "It depends on the filter type, pets and how much the system runs. Check it monthly during heating season and replace it when it looks dirty. Your filter's packaging gives the maximum interval.",
      },
    ],
    related: ["heating", "air-conditioning", "rooftop-units", "refrigeration/walk-in-coolers-freezers"],
    image: VAN,
  },
  {
    slug: "rooftop-units",
    name: "Rooftop Units",
    serviceType: "Commercial rooftop unit (RTU) repair, installation and maintenance",
    tone: "cool",
    title: "Rooftop Unit Repair Calgary | Commercial RTU Service",
    description:
      "Commercial rooftop unit (RTU) repair, replacement and maintenance in Calgary. Heating and cooling for businesses, answered 24/7. Call 403-970-6988.",
    h1: "Rooftop Unit Repair & Service in Calgary",
    lede: "Heating and cooling for stores, restaurants, offices and warehouses. Rooftop units repaired, replaced and maintained, with calls answered 24/7.",
    intro: [
      "One box on the roof heats, cools and ventilates your building. When it quits, everyone feels it. We answer 24/7.",
    ],
    sections: [
      {
        heading: "Signs it needs service",
        body: [],
        bullets: [
          "No heat or can't hold temperature",
          "Warm air in summer",
          "Short cycling",
          "Squealing belts or grinding fans",
          "Water through the ceiling under the unit",
          "Ice on the lines or coil",
          "Higher energy bills",
          "Hot and cold zones",
        ],
      },
      {
        heading: "Heating side",
        body: [],
        bullets: [
          "Gas-fired heating sections",
          "Igniters, flame sensors, inducers, gas valves, limit switches",
          "Winter check: snow and ice blocking air openings",
        ],
      },
      {
        heading: "Cooling side",
        body: [],
        bullets: [
          "Compressors, fans, contactors, capacitors",
          "Refrigerant circuits and coils",
          "Dirty condenser coils: a top cause on hot days",
          "Leaks found and fixed, not just topped up",
        ],
      },
      {
        heading: "Fresh air & controls",
        body: [],
        bullets: [
          "Economizer dampers and actuators",
          "Stuck damper: freezing air in winter, wasted energy in summer",
          "Sensors, thermostats and building controls",
        ],
      },
      {
        heading: "Replacement",
        body: [],
        bullets: [
          "Honest repair vs. replace comparison",
          "Crane lift, curb and connections planned",
          "Scheduled around your business hours",
        ],
      },
      {
        heading: "Maintenance visit",
        body: [],
        bullets: [
          "Filters, belts and pulleys",
          "Clean condenser and evaporator coils",
          "Inspect heating section and venting",
          "Check refrigerant pressures",
          "Test economizer and controls",
          "Clear condensate drains to stop roof leaks",
          "Check electrical connections",
        ],
      },
    ],
    included: [
      "24/7 rooftop unit service calls",
      "Heating section diagnosis and repair",
      "Cooling and refrigerant repair",
      "Economizer and controls troubleshooting",
      "Rooftop unit replacement",
      "Scheduled commercial maintenance",
    ],
    faqs: [
      {
        q: "Do you answer rooftop unit calls after hours?",
        a: "Yes. GBL HVAC LTD is open 24 hours, 7 days a week. Call 403-970-6988 any time your unit stops heating or cooling.",
      },
      {
        q: "Why is water leaking through my ceiling under the rooftop unit?",
        a: "Often a blocked condensate drain, damaged curb seal or failed roof flashing around the unit. A blocked drain is something we check and clear on every maintenance visit. If the leak is in the roof itself, you may also need a roofer.",
      },
      {
        q: "How often should a rooftop unit be maintained?",
        a: "At least twice a year is common: once before heating season and once before cooling season. Filters may need changing more often, depending on the building and the environment.",
      },
      {
        q: "Should I repair or replace my rooftop unit?",
        a: "It depends on the unit's age and condition and what the repair involves. We'll give you both options with the trade-offs so you can decide.",
      },
      {
        q: "Can you service the rooftop unit over a restaurant kitchen?",
        a: "Yes. We also work on kitchen hood fans and make-up air units, which often sit on the same roof and affect how the building's heating and cooling perform.",
      },
    ],
    related: ["ventilation/hood-fans-make-up-air", "air-conditioning", "heating", "maintenance-plans"],
    image: VAN,
  },
  {
    slug: "refrigeration/walk-in-coolers-freezers",
    parent: "refrigeration",
    name: "Walk-In Coolers & Freezers",
    serviceType: "Walk-in cooler and walk-in freezer repair and maintenance",
    tone: "cool",
    title: "Walk-In Cooler & Freezer Repair Calgary | 24/7",
    description:
      "Walk-in cooler and walk-in freezer repair in Calgary, answered 24/7. Restaurants, grocery and convenience stores. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Walk-In Cooler & Freezer Repair in Calgary",
    lede: "When a walk-in starts warming up, every hour counts. We answer 24/7 for restaurants, grocers and food businesses across Calgary.",
    intro: [
      "Your walk-in holds most of your stock. When it warms up, every hour counts. We answer 24/7.",
    ],
    sections: [
      {
        heading: "Failing right now?",
        body: [],
        bullets: [
          "Keep the door shut",
          "Thermometer inside: record real temps and times",
          "Move valuable product to a working unit",
          "Coolers: food generally at 4°C or below. Freezers: frozen solid",
          "Call 403-970-6988: cooler or freezer, temperature, symptoms",
        ],
      },
      {
        heading: "Call early if you see",
        body: [],
        bullets: [
          "Temperature creeping up after deliveries",
          "Ice on the evaporator coil",
          "Frost around the door frame",
          "Water or ice on the floor",
          "Condensing unit running non-stop",
          "New fan or compressor noises",
          "Torn gaskets or a door that won't close",
        ],
      },
      {
        heading: "How it works",
        body: [],
        bullets: [
          "Inside: evaporator coil and fans pull heat out",
          "Outside: condensing unit dumps the heat",
          "Controls: tell it when to run and defrost",
          "Problem anywhere = warm box, so we check the whole system",
        ],
      },
      {
        heading: "Freezer-specific",
        body: [],
        bullets: [
          "Defrost: heaters and timers melt coil ice on schedule",
          "Failed defrost: coil turns to ice, airflow stops",
          "Door heaters: stop doors freezing shut",
          "Drain heaters: stop defrost water freezing in the line",
        ],
      },
      {
        heading: "What we check",
        body: [],
        bullets: [
          "Thermostat, controls and sensors",
          "Evaporator coil and fans",
          "Defrost heaters, timers, drain heaters",
          "Condensing unit, compressor, condenser fan",
          "Refrigerant charge and pressures",
          "Condenser coil condition",
          "Gaskets, hinges, closers, door heaters",
        ],
      },
      {
        heading: "Maintenance",
        body: [],
        bullets: [
          "Catches dirty coils, failing fans and bad gaskets early",
          "Schedule that suits your kitchen",
          "Worked around opening hours",
        ],
      },
    ],
    included: [
      "24/7 emergency walk-in calls",
      "Walk-in cooler repair",
      "Walk-in freezer repair",
      "Defrost and drain line repair",
      "Door gasket, closer and heater repair",
      "Scheduled preventive maintenance",
    ],
    faqs: [
      {
        q: "Can you come out at night or on a weekend?",
        a: "Yes. GBL HVAC LTD is open 24 hours, 7 days a week. Call 403-970-6988 as soon as you notice the temperature rising.",
      },
      {
        q: "Why is my walk-in freezer's coil covered in ice?",
        a: "Usually a defrost problem: a failed heater, timer or control. A door that isn't sealing, a failing evaporator fan or low refrigerant can also cause it. Heavy ice blocks airflow, so the box warms up. Call us before it gets worse.",
      },
      {
        q: "There's water on the floor of my walk-in cooler. What's wrong?",
        a: "Commonly a blocked or frozen drain line, or ice on the coil melting during defrost faster than the drain can handle. We'll find the cause and clear it.",
      },
      {
        q: "What temperature should my walk-in be at?",
        a: "Coolers holding food generally need to keep it at 4°C or below. Freezers should keep food frozen solid; many operators aim for around -18°C. Check your local health requirements for your operation.",
      },
      {
        q: "Do you also service reach-ins and ice machines?",
        a: "Yes. We service reach-in coolers and freezers, display cases, prep tables and ice machines as well.",
      },
    ],
    related: ["refrigeration/ice-machines", "ventilation/hood-fans-make-up-air", "rooftop-units", "maintenance-plans"],
    image: VAN,
  },
  {
    slug: "refrigeration/ice-machines",
    parent: "refrigeration",
    name: "Ice Machines",
    serviceType: "Commercial ice machine repair and maintenance",
    tone: "cool",
    title: "Ice Machine Repair Calgary | Commercial Service",
    description:
      "Commercial ice machine repair, cleaning and maintenance in Calgary for restaurants, bars and hotels. Answered 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Ice Machine Repair in Calgary",
    lede: "Commercial ice machines repaired, cleaned and maintained for Calgary restaurants, bars, cafés and hotels.",
    intro: [
      "Out of ice on a Friday night? We repair, clean and maintain commercial ice machines, 24/7.",
    ],
    sections: [
      {
        heading: "Common problems",
        body: [],
        bullets: [
          "Not making ice",
          "Making ice slowly",
          "Small, thin or cloudy cubes",
          "Ice that tastes or smells off",
          "Leaks around the machine or bin",
          "Running constantly or shutting off",
          "Scale or slime on water parts",
        ],
      },
      {
        heading: "Calgary water & scale",
        body: [],
        bullets: [
          "Moderately hard water leaves scale behind",
          "Scale slows production and causes breakdowns",
          "Fix: regular descaling and a good water filter",
        ],
      },
      {
        heading: "Ice is food",
        body: [],
        bullets: [
          "Health inspectors treat it that way",
          "Cold, damp, dark: slime and mould love it",
          "Pink or black slime: needs a full clean and sanitize",
        ],
      },
      {
        heading: "How we diagnose",
        body: [],
        bullets: [
          "Refrigeration side: condenser, fans, compressor, refrigerant",
          "Water side: scale, filter, inlet valve, pump",
          "Controls: sensors, harvest cycle, bin control",
        ],
      },
      {
        heading: "Placement matters",
        body: [],
        bullets: [
          "Air-cooled machines need room to breathe",
          "Next to fryers or boxed in = less ice",
          "We'll tell you if location is costing you",
        ],
      },
      {
        heading: "Maintenance visit",
        body: [],
        bullets: [
          "Clean and descale water system",
          "Sanitize bin and food-contact parts",
          "Clean condenser",
          "Check water filter",
          "Test harvest cycle and bin control",
        ],
      },
    ],
    included: [
      "Ice machine diagnosis and repair",
      "Cleaning, descaling and sanitizing",
      "Water filter checks and replacement",
      "Condenser cleaning",
      "Leak and drain repair",
      "Scheduled maintenance",
    ],
    faqs: [
      {
        q: "Why is my ice machine making less ice than it used to?",
        a: "Common causes are scale build-up, a dirty condenser, a clogged water filter or a hot location. Low production can also point to a refrigeration or water valve problem. We'll find the actual cause.",
      },
      {
        q: "How often should an ice machine be cleaned?",
        a: "Follow the manufacturer's schedule as a minimum. Many machines need cleaning and sanitizing every few months, and more often in busy kitchens, warm locations or with hard water.",
      },
      {
        q: "Why does my ice taste or smell bad?",
        a: "Usually slime or mould in the water system or bin, an overdue water filter, or the machine picking up odours from nearby food. A full clean and sanitize normally fixes it.",
      },
      {
        q: "My ice machine is leaking. What should I do?",
        a: "Turn off the water supply to the machine if you can do so safely, and call 403-970-6988. Common causes are a blocked drain, a cracked water line or a failing water valve.",
      },
    ],
    related: ["refrigeration/walk-in-coolers-freezers", "refrigeration", "maintenance-plans", "water-heaters"],
    image: VAN,
  },
  {
    slug: "ventilation/hood-fans-make-up-air",
    parent: "ventilation",
    name: "Hood Fans & Make-Up Air",
    serviceType: "Kitchen hood fan and make-up air unit repair and maintenance",
    tone: "cool",
    title: "Hood Fan & Make-Up Air Unit Repair Calgary",
    description:
      "Commercial kitchen hood fan and make-up air unit repair and maintenance in Calgary. Restaurants and food businesses, answered 24/7. Call 403-970-6988.",
    h1: "Hood Fan & Make-Up Air Unit Repair in Calgary",
    lede: "Kitchen exhaust hood fans and the make-up air units that feed them, repaired and maintained for Calgary restaurants and food businesses.",
    intro: [
      "Your hood fan pulls smoke and heat out. Your make-up air unit replaces that air. When one fails, both feel it.",
    ],
    sections: [
      {
        heading: "Signs of trouble",
        body: [],
        bullets: [
          "Smoke rolling out from under the hood",
          "Kitchen hotter or smokier than usual",
          "Front doors hard to open or slamming",
          "Cold drafts in winter",
          "Squealing or grinding from the roof fan",
          "Make-up air not heating: freezing air in the kitchen",
          "Fans not starting",
        ],
      },
      {
        heading: "Hood exhaust fans",
        body: [],
        bullets: [
          "Belts: stretch, wear and slip",
          "Motors and bearings: wear out",
          "Grease on the fan wheel: causes vibration and noise",
          "We repair: motors, belts, pulleys, bearings, switches, controls",
          "Separate specialties: hood/duct grease cleaning and fire suppression. Ask us who to call",
        ],
      },
      {
        heading: "Make-up air units",
        body: [],
        bullets: [
          "Replaces air the hood removes",
          "Too little: hard doors, poor smoke capture, venting problems",
          "Winter: heats incoming air, often with a gas burner",
          "We service: burners, igniters, flame safety, blowers, belts, filters, dampers, controls",
        ],
      },
      {
        heading: "Working as a pair",
        body: [],
        bullets: [
          "Usually interlocked to start and stop together",
          "Failed interlock or switch: one runs without the other",
          "We test the whole system so the kitchen is balanced",
        ],
      },
      {
        heading: "Maintenance",
        body: [],
        bullets: [
          "Inspect and replace belts",
          "Check motors, bearings and fan wheels",
          "Replace make-up air filters",
          "Check burner and safety controls before winter",
          "Test dampers, interlocks and controls",
        ],
      },
    ],
    included: [
      "Hood exhaust fan repair and replacement",
      "Fan belts, motors and bearings",
      "Make-up air unit heating repair",
      "Make-up air filters, dampers and controls",
      "Hood and make-up air interlock troubleshooting",
      "Scheduled kitchen ventilation maintenance",
    ],
    faqs: [
      {
        q: "Why are my restaurant's doors hard to open?",
        a: "Usually the kitchen exhaust is pulling out more air than is coming back in, often because the make-up air unit isn't running or isn't bringing in enough air. We'll check both units and the controls that link them.",
      },
      {
        q: "Why is freezing air coming into my kitchen in winter?",
        a: "The make-up air unit is most likely running without heating the air. Common causes are an igniter, flame sensor, gas valve or control problem. Call us and we'll get it heating again.",
      },
      {
        q: "My hood fan is squealing. Is that urgent?",
        a: "A squeal often means a slipping or worn belt, or failing bearings. It's best dealt with soon, before the belt breaks or the motor fails mid-service.",
      },
      {
        q: "Do you clean grease out of hoods and ducts?",
        a: "Grease cleaning of hoods and ducts is a separate specialty from fan and make-up air repair. Ask us if you're not sure who to call and we'll point you in the right direction.",
      },
      {
        q: "Can you come out during or after service hours?",
        a: "Yes. We're open 24 hours, 7 days a week, so we can work around your kitchen's schedule.",
      },
    ],
    related: ["rooftop-units", "refrigeration/walk-in-coolers-freezers", "ventilation", "maintenance-plans"],
    image: VAN,
  },
];

export const HUBS = SERVICES.filter((s) => !s.parent);

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function childrenOf(slug: string) {
  return SERVICES.filter((s) => s.parent === slug);
}
