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
  steps?: string[]; // "How the job runs", in order
  notes?: { heading: string; bullets: string[] }; // safety notes / what we don't do
  // Draft pages are written but NOT published (no route, sitemap, nav or links) until
  // Quinn confirms he offers the service. Remove `draft: true` to publish.
  draft?: boolean;
};

const VAN = {
  src: "/images/gbl-hvac-service-van-calgary.jpg",
  alt: "GBL HVAC LTD service van in a Calgary residential neighbourhood",
};

const ALL_SERVICES: ServicePage[] = [
  {
    slug: "heating",
    name: "Heating",
    serviceType: "Furnace and boiler installation, repair and maintenance",
    tone: "warm",
    title: "Heating & Furnace Service Calgary | Open 24/7",
    description:
      "Furnace and boiler repair, installation and maintenance in Calgary for homes and businesses. Open 24 hours, 7 days. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Heating & Furnace Service in Calgary",
    lede: "Furnace repair, new furnaces, boilers and tune-ups for Calgary homes and businesses. Open 24 hours, every day of the year.",
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
    steps: [
      "Call 403-970-6988: you talk to Quinn, the owner, any hour",
      "Quick questions: what the furnace is doing, any error lights, how old it is",
      "On site: we check the whole system, not just the first part we see",
      "Straight answer: what's wrong and your options, before any work starts",
      "Fix and test: we run a full heating cycle and check the safety controls",
    ],
    notes: {
      heading: "Safety first",
      bullets: [
        "Smell gas: leave the building and call 911 or your gas utility from outside",
        "CO alarm sounding: get everyone out and call 911",
        "Never heat the house with an oven, stove or barbecue",
      ],
    },
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
      {
        q: "Do you install new furnaces too?",
        a: "Yes. We replace old furnaces with high-efficiency units sized for your home. See our furnace installation page for how it works.",
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
    steps: [
      "Call any hour: Quinn answers, no answering service",
      "Stay safe: we walk you through keeping the house warm and pipes safe",
      "Diagnosis: we find the actual failed part",
      "Heat back on: as soon as it's safe to do so",
      "Follow-up: if a part has to be ordered, we tell you straight and plan the next step",
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
      {
        q: "How do I know it's an emergency?",
        a: "No heat in cold weather, a gas smell, a CO alarm, or water near the furnace are all reasons to call right away. If you're unsure, call and ask.",
      },
    ],
    related: ["heating/furnace-repair", "heating/furnace-installation", "maintenance-plans", "water-heaters"],
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
    title: "Air Conditioning Calgary | AC Repair & Install",
    description:
      "Central air conditioning repair, installation and tune-ups in Calgary for homes and businesses. Open 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Air Conditioning in Calgary",
    lede: "AC repair, new central air and spring tune-ups for Calgary homes and businesses, so you're ready before the heat arrives.",
    intro: [
      "Calgary summers are short, but the hot stretches are real. Get your AC installed, fixed or tuned up before the heat hits.",
    ],
    sections: [
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
    steps: [
      "Call or request a quote: tell us what the AC is doing",
      "Quick checks by phone: thermostat, breaker, filter",
      "On site: test electrical, refrigerant, airflow and drainage",
      "Options explained: repair, tune-up or replacement, before work starts",
      "Cooling confirmed: we check the temperature drop before we leave",
    ],
    notes: {
      heading: "If you see ice",
      bullets: [
        "Turn the AC off at the thermostat. Running it frozen can damage the compressor",
        "Set the fan to ON to help it thaw, and check the filter",
        "Call us if it freezes again",
      ],
    },
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
      {
        q: "Do you fix hail-damaged AC units?",
        a: "We can check the condenser coil and fins after a hailstorm and tell you whether it needs repair or replacement.",
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
    steps: [
      "Call 403-970-6988 any hour: tell us the unit, the temperature and what it's doing",
      "Protect product: we tell you what to do while we're on the way",
      "Diagnose the system: controls, defrost, fans, coils, refrigerant, compressor",
      "Repair and pull down: we fix it and watch the temperature come back",
      "Prevent the next one: we recommend maintenance that fits your kitchen",
    ],
    notes: {
      heading: "Food safety is your call",
      bullets: [
        "Keep a thermometer in every cooler and log temperatures",
        "Cold-held food generally needs to stay at 4°C or below",
        "Decisions about warmed product belong to you and your health inspector",
      ],
    },
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
    title: "Ventilation & Ductwork Calgary | Homes & Business",
    description:
      "HRV and air exchanger service, ventilation and ductwork for Calgary homes and businesses. Cleaner, healthier air. Call GBL HVAC LTD, open 24/7.",
    h1: "Ventilation & Ductwork in Calgary",
    lede: "HRVs, ventilation and ductwork for cleaner, healthier air in Calgary homes and businesses.",
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
    steps: [
      "Tell us the symptoms: condensation, smells, stuffy rooms, drafts",
      "Inspect: HRV, fans, ductwork, hoods and airflow",
      "Explain: what's not keeping up and what fixes it",
      "Fix: clean, repair, seal or add ductwork",
      "Balance: confirm air is moving where it should",
    ],
    notes: {
      heading: "What we don't do",
      bullets: [
        "Duct cleaning: we don't offer it",
        "Grease cleaning of kitchen hoods and ducts: a separate specialty",
      ],
    },
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
      {
        q: "Do you do duct cleaning?",
        a: "No. We repair, seal, modify and balance ductwork, but we don't offer duct cleaning.",
      },
      {
        q: "Why do some rooms never get enough air?",
        a: "Often leaky or undersized ducts, closed or blocked vents, or an unbalanced system. We check the ductwork and balance the airflow.",
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
    title: "Water Heaters Calgary | Hot Water Tank Service",
    description:
      "Hot water tank repair and replacement in Calgary for homes and businesses. Leaks and no hot water answered 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Water Heater Service in Calgary",
    lede: "Hot water tank repair, replacement and commercial water heaters for Calgary homes and businesses.",
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
        heading: "Commercial & permits",
        body: [],
        bullets: [
          "Commercial water heaters for restaurants, salons and gyms",
          "Is yours keeping up with demand? We'll check",
          "Some replacements need a City permit. Ask us",
        ],
      },
    ],
    steps: [
      "Call: leaks and no hot water answered 24/7",
      "Make it safe: we walk you through shutting off water and gas or power",
      "Diagnose: burner, thermocouple, gas valve, venting, elements, the tank itself",
      "Repair or replace: honest answer on which makes sense",
      "Test: hot water confirmed before we leave",
    ],
    notes: {
      heading: "What we don't do",
      bullets: [
        "Tankless water heaters: we don't install or service them",
      ],
    },
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
      {
        q: "Can a hot water tank be repaired?",
        a: "Often, yes: burners, thermocouples, gas valves and elements can be replaced. A leak from the tank itself means it needs replacing.",
      },
    ],
    related: ["water-heaters/hot-water-tank-replacement", "heating/boilers", "maintenance-plans", "heating/24-hour-furnace-repair"],
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
    steps: [
      "Book: fall for furnaces, spring for AC, or both",
      "Inspect: the full checklist for each system",
      "Clean and adjust: burners, sensors, coils, drains",
      "Report: what we found and anything coming up",
      "Next visit: we remind you before the next season",
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
      {
        q: "What happens if you find a problem during a tune-up?",
        a: "We explain what we found and what it would take to fix, and you decide. Nothing is done without your OK.",
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
    steps: [
      "Call any hour: tell us what the space is doing",
      "Roof access: we coordinate with you or your building",
      "Diagnose: heating section, cooling, economizer, controls",
      "Repair, or a straight repair-vs-replace answer",
      "Test: heating or cooling confirmed from inside the space",
    ],
    notes: {
      heading: "Good to know",
      bullets: [
        "Roof leaks from damaged curbs or flashing may also need a roofer",
        "Replacing a rooftop unit usually means planning a crane lift",
      ],
    },
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
    steps: [
      "Call 403-970-6988: cooler or freezer, temperature, symptoms",
      "Keep the door shut and move high-value product if you can",
      "Diagnose the whole system, inside and out",
      "Repair and pull down to temperature",
      "Maintenance plan to stop repeat failures",
    ],
    notes: {
      heading: "Don't",
      bullets: [
        "Chip ice off the evaporator coil with tools. You can puncture it",
        "Prop the door open to 'let it breathe'",
      ],
    },
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
    steps: [
      "Tell us the symptom: no ice, slow, bad taste, leaks",
      "Diagnose: refrigeration, water system and controls",
      "Repair what failed",
      "Clean, descale and sanitize if needed",
      "Confirm a full harvest cycle before we leave",
    ],
    notes: {
      heading: "Don't",
      bullets: [
        "Chip ice off the evaporator with tools",
        "Skip the water filter. Calgary's hard water scales machines fast",
      ],
    },
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
      {
        q: "Do you service ice machines in bars and hotels?",
        a: "Yes. We service commercial ice machines for restaurants, bars, cafés, hotels and convenience stores.",
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
    steps: [
      "Call: tell us what the hood and kitchen are doing",
      "Schedule around service, any hour",
      "Check both units: exhaust fan and make-up air",
      "Repair belts, motors, burners or controls",
      "Test them together so the kitchen is balanced",
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
  {
    slug: "heating/furnace-repair",
    parent: "heating",
    name: "Furnace Repair",
    serviceType: "Furnace repair",
    tone: "warm",
    title: "Furnace Repair Calgary | Open 24/7 | GBL HVAC",
    description: "Furnace repair in Calgary for homes and businesses: igniters, flame sensors, blowers, pressure switches and more. Open 24/7. Call 403-970-6988.",
    h1: "Furnace Repair in Calgary",
    lede: "Furnace acting up? We find the real cause, explain it in plain language and fix it. Answered 24/7.",
    intro: [
      "Most furnace problems come down to a handful of parts. We find the one that actually failed instead of guessing.",
    ],
    sections: [
      {
        heading: "What we fix most",
        body: [],
        bullets: [
          "Igniter: clicks or glows but the burners don't light",
          "Flame sensor: lights, then shuts off after a few seconds",
          "Inducer motor & pressure switch: starts up, then locks out",
          "Blower motor & capacitor: runs but no air from the vents",
          "Limit switch: overheats and shuts down",
          "Control board: blinking error codes, nothing happens",
          "Thermostat & wiring: furnace never gets the call for heat",
          "Vent pipes: blocked by snow or frost on the outside wall",
        ],
      },
      {
        heading: "Symptoms and likely causes",
        body: [],
        bullets: [
          "Cold air from the vents: ignition or gas supply problem",
          "Lights then shuts off: dirty flame sensor",
          "Short cycling: overheating, clogged filter or limit switch",
          "Loud squeal or hum: blower motor or capacitor",
          "Blinking light: the board is telling us where to look",
          "Quits in cold snaps: blocked intake or exhaust pipe",
        ],
      },
      {
        heading: "Why Calgary furnaces fail when they do",
        body: [],
        bullets: [
          "Cold snaps: furnaces run non-stop and weak parts fail first",
          "Chinooks: big temperature swings mean more on-off cycling",
          "Snow and frost: block high-efficiency pipes on the outside wall",
          "Dry, dusty winter air: clogs filters faster than you'd think",
        ],
      },
      {
        heading: "Before you call",
        body: [
          "Two minutes, and sometimes it solves the problem.",
        ],
        bullets: [
          "Thermostat on Heat and set above room temperature",
          "Furnace switch on, breaker not tripped",
          "Filter not clogged",
          "Outside pipes clear of snow and frost",
        ],
      },
    ],
    steps: [
      "Call 403-970-6988: you talk to Quinn, any hour",
      "Describe it: what the furnace does, error lights, its age",
      "Diagnose: we test the parts, not guess",
      "Price and options before any work starts",
      "Repair and test: full heating cycle and safety controls checked",
    ],
    notes: {
      heading: "Safety first",
      bullets: [
        "Smell gas: leave the building and call 911 or your gas utility from outside",
        "CO alarm sounding: get everyone out and call 911",
        "Never heat the house with an oven, stove or barbecue",
      ],
    },
    included: [
      "Full furnace diagnosis",
      "Igniter and flame sensor repair",
      "Blower motor and capacitor repair",
      "Pressure switch and inducer repair",
      "Control board and thermostat troubleshooting",
      "Residential and commercial furnaces",
    ],
    faqs: [
      {
        q: "What does furnace repair cost?",
        a: "It depends on what failed. We diagnose first and tell you the cost before any work starts, so you can decide.",
      },
      {
        q: "Why is my furnace blowing cold air?",
        a: "Usually the burners aren't lighting or staying lit: a failed igniter, dirty flame sensor, gas supply problem or a safety lockout. We'll find which.",
      },
      {
        q: "Can a dirty filter really stop my furnace?",
        a: "Yes. A clogged filter can make the furnace overheat and shut itself off. Check it first, and replace it if it's dirty.",
      },
      {
        q: "Is it worth repairing an old furnace?",
        a: "A single failed part on an otherwise healthy furnace is usually worth fixing. If it's near 15 to 20 years old and needs a major part, replacement may make more sense. We'll give you both options.",
      },
      {
        q: "Do you repair furnaces at night?",
        a: "Yes. We're open 24 hours, 7 days a week. For a no-heat emergency, see our 24 hour furnace repair page or just call.",
      },
    ],
    related: [
      "heating/24-hour-furnace-repair",
      "heating/furnace-installation",
      "maintenance-plans",
      "heating/boilers",
    ],
    image: VAN,
  },
  {
    slug: "heating/furnace-installation",
    parent: "heating",
    name: "Furnace Installation",
    serviceType: "Furnace installation and replacement",
    tone: "warm",
    title: "Furnace Replacement Calgary | New Furnace Install",
    description: "New furnace installation and furnace replacement in Calgary, sized for your home. Honest repair-vs-replace advice. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Furnace Installation & Replacement in Calgary",
    lede: "New high-efficiency furnaces, sized for your actual home, with an honest answer on whether you really need one.",
    intro: [
      "Replacing a furnace is a big decision. We start by telling you honestly whether a repair would do.",
    ],
    sections: [
      {
        heading: "Signs it's time to replace",
        body: [],
        bullets: [
          "Age: around 15 to 20 years or more",
          "Repairs piling up: several calls in the last few winters",
          "Rising gas bills: with no change in how you use heat",
          "Uneven heat: rooms that never get warm",
          "Safety concern: found during an inspection",
        ],
      },
      {
        heading: "Repair or replace?",
        body: [
          "We lay out both options and let you decide.",
        ],
        bullets: [
          "Age of the furnace and its overall condition",
          "Cost of the repair compared to its remaining life",
          "How often it has failed lately",
          "Your plans: staying long term or selling soon",
        ],
      },
      {
        heading: "Sized right, not just copied",
        body: [],
        bullets: [
          "Home size, insulation and windows",
          "Existing ductwork and venting",
          "How you use the space: basement suites, home offices",
          "Too big or too small both cause problems",
        ],
      },
      {
        heading: "What's involved",
        body: [],
        bullets: [
          "Remove the old furnace",
          "Set the new high-efficiency unit",
          "Venting, connections and condensate drain",
          "Thermostat hookup",
          "Start-up, testing and a walkthrough",
        ],
      },
    ],
    steps: [
      "Assessment: we look at your furnace, ducts and venting",
      "Options: repair vs. replace, and the right size",
      "Schedule: a time that works, including in winter",
      "Install: remove the old unit, set and connect the new one",
      "Test and walkthrough: full heating cycle, then we show you the basics",
    ],
    notes: {
      heading: "Permits",
      bullets: [
        "Some heating work in Calgary needs a City permit and inspection. Ask us whether yours does",
      ],
    },
    included: [
      "Repair vs. replace assessment",
      "Furnace sizing",
      "High-efficiency furnace installation",
      "Venting and condensate drain",
      "Thermostat hookup",
      "Start-up and testing",
    ],
    faqs: [
      {
        q: "How long does a furnace last?",
        a: "Most furnaces last around 15 to 20 years, depending on how well they've been maintained.",
      },
      {
        q: "What size furnace do I need?",
        a: "It depends on your home's size, insulation, windows and ductwork, not just the size of the old one. We work it out before recommending anything.",
      },
      {
        q: "Can you replace a furnace in winter?",
        a: "Yes. We install year-round. If your old furnace has failed, call and we'll talk through keeping the house warm in the meantime.",
      },
      {
        q: "Should I replace my AC at the same time?",
        a: "Sometimes it makes sense, since the AC coil sits on the furnace and shares the blower. If your AC is young and working well, there's no need. We'll tell you honestly.",
      },
      {
        q: "Do I need a permit?",
        a: "Some furnace work in Calgary needs a City permit and inspection. Ask us and we'll explain the steps for your job.",
      },
    ],
    related: [
      "heating/furnace-repair",
      "heating",
      "maintenance-plans",
      "air-conditioning/ac-installation",
    ],
    image: VAN,
  },
  {
    slug: "heating/boilers",
    parent: "heating",
    name: "Boilers",
    serviceType: "Hot water boiler repair and installation",
    tone: "warm",
    title: "Boiler Repair Calgary | Hot Water Heating Service",
    description: "Hot water boiler repair, installation and maintenance in Calgary for homes and commercial buildings. Open 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Boiler Repair & Installation in Calgary",
    lede: "Hot water boilers repaired, installed and maintained for Calgary homes and commercial buildings.",
    intro: [
      "Boilers heat water and pump it through baseboards, radiators or in-floor heating. When one quits, the whole building goes cold.",
    ],
    sections: [
      {
        heading: "Signs your boiler needs service",
        body: [],
        bullets: [
          "Cold radiators or baseboards",
          "Banging, gurgling or kettling noises",
          "Leaks around the boiler or pipes",
          "Pressure gauge too high or too low",
          "Pilot or burner won't stay lit",
          "Some zones heating, others not",
        ],
      },
      {
        heading: "What we service",
        body: [],
        bullets: [
          "Burners and ignition",
          "Circulator pumps",
          "Expansion tanks",
          "Pressure relief valves",
          "Zone valves and controls",
          "Thermostats",
        ],
      },
      {
        heading: "Repair or replace",
        body: [],
        bullets: [
          "Honest comparison based on age, condition and the repair",
          "New boilers sized for your building",
          "Homes and commercial buildings",
        ],
      },
    ],
    steps: [
      "Call: tell us what's cold, noisy or leaking",
      "Check pressure, burner, pump and valves",
      "Find the cause: air, a failed pump, a zone valve, a control",
      "Repair, or a straight repair-vs-replace answer",
      "Confirm heat in every zone before we leave",
    ],
    notes: {
      heading: "Safety first",
      bullets: [
        "Relief valve dripping or pressure climbing: call us, and never cap or plug the valve",
        "Smell gas: leave and call 911 or your gas utility from outside",
      ],
    },
    included: [
      "Boiler diagnosis and repair",
      "Circulator pump and zone valve repair",
      "Expansion tank and relief valve service",
      "New boiler installation",
      "Boiler maintenance",
      "Commercial boilers",
    ],
    faqs: [
      {
        q: "Why are some of my radiators cold?",
        a: "Common causes are air trapped in the system, a stuck zone valve or a failing circulator pump. We'll find which.",
      },
      {
        q: "What is boiler kettling?",
        a: "A rumbling or kettle-like noise, often from scale or sediment causing water to boil in spots. It should be checked.",
      },
      {
        q: "What pressure should my boiler be at?",
        a: "Many home systems run around 12 to 15 psi when cold, but check the label on your boiler. Big swings or constant drips from the relief valve mean it needs service.",
      },
      {
        q: "Do you install new boilers?",
        a: "Yes. We install hot water boilers for homes and commercial buildings, sized for the space.",
      },
      {
        q: "Do you work on commercial boilers?",
        a: "Yes. We service boilers in commercial buildings as well as homes, and answer 24/7.",
      },
    ],
    related: [
      "heating",
      "heating/furnace-repair",
      "maintenance-plans",
      "water-heaters",
    ],
    image: VAN,
  },
  {
    slug: "air-conditioning/ac-repair",
    parent: "air-conditioning",
    name: "AC Repair",
    serviceType: "Air conditioning repair",
    tone: "cool",
    title: "AC Repair Calgary | Air Conditioner Service 24/7",
    description: "Air conditioner repair in Calgary: no cooling, outdoor unit not running, ice, leaks and noise. Homes and businesses, open 24/7. Call 403-970-6988.",
    h1: "AC Repair in Calgary",
    lede: "AC quit on a hot day? We find the real cause and get you cooling again. Answered 24/7.",
    intro: [
      "Most AC breakdowns come down to a few parts. We test them properly instead of just topping up refrigerant.",
    ],
    sections: [
      {
        heading: "Call us if",
        body: [],
        bullets: [
          "Vents blow warm air",
          "Outdoor unit won't run",
          "Ice on the lines or indoor coil",
          "Water pooling near the furnace",
          "Buzzing, clicking or grinding outside",
          "Breaker trips when the AC starts",
          "Some rooms stay hot",
        ],
      },
      {
        heading: "What we check",
        body: [],
        bullets: [
          "Capacitor and contactor: the top reasons an outdoor unit won't start",
          "Fan motors and compressor",
          "Refrigerant pressures: low means a leak",
          "Condensate drain",
          "Filter, coil and airflow",
        ],
      },
      {
        heading: "Calgary AC problems",
        body: [],
        bullets: [
          "Cottonwood fluff: clogs the outdoor coil in early summer",
          "Hail: can flatten the condenser fins",
          "Short season: problems often show up on the first hot day",
        ],
      },
      {
        heading: "Before you call",
        body: [],
        bullets: [
          "Thermostat on Cool and set below room temperature",
          "Breaker and outdoor disconnect on",
          "Filter not clogged",
          "Outdoor unit clear of grass and debris",
        ],
      },
    ],
    steps: [
      "Call or request a quote: tell us what the AC is doing",
      "Quick phone checks: thermostat, breaker, filter",
      "On site: electrical, refrigerant, airflow, drainage",
      "Options explained before any work starts",
      "Cooling confirmed: we check the temperature drop before leaving",
    ],
    notes: {
      heading: "If you see ice",
      bullets: [
        "Turn the AC off. Running it frozen can damage the compressor",
        "Set the fan to ON to help it thaw, and check the filter",
      ],
    },
    included: [
      "AC diagnosis",
      "Capacitor and contactor replacement",
      "Fan motor repair",
      "Refrigerant leak options",
      "Condensate drain clearing",
      "Commercial AC repair",
    ],
    faqs: [
      {
        q: "Why is my AC running but not cooling?",
        a: "Common causes are a dirty filter, a failed capacitor or contactor, low refrigerant from a leak, or a frozen coil. We'll find which.",
      },
      {
        q: "Why won't my outdoor unit turn on?",
        a: "Often a failed capacitor or contactor, a tripped breaker or a thermostat problem. A capacitor is usually a quick repair.",
      },
      {
        q: "Can you just add refrigerant?",
        a: "Low refrigerant means there's a leak. Topping up without finding it only buys time, so we explain the options for fixing it properly.",
      },
      {
        q: "Do you repair AC at night or on weekends?",
        a: "Yes. We're open 24 hours, 7 days a week.",
      },
      {
        q: "Do you fix commercial AC?",
        a: "Yes: commercial split systems and rooftop unit cooling for offices, stores and restaurants.",
      },
    ],
    related: [
      "air-conditioning",
      "air-conditioning/ac-installation",
      "maintenance-plans",
      "rooftop-units",
    ],
    image: VAN,
  },
  {
    slug: "air-conditioning/ac-installation",
    parent: "air-conditioning",
    name: "AC Installation",
    serviceType: "Central air conditioning installation",
    tone: "cool",
    title: "AC Installation Calgary | Central Air for Homes",
    description: "Central air conditioning installation in Calgary, sized for your home and using your existing ductwork. Book before summer. Call 403-970-6988.",
    h1: "AC Installation in Calgary",
    lede: "Central air for Calgary homes and businesses, sized properly and installed before the heat arrives.",
    intro: [
      "If your home has a forced-air furnace, you can usually add central air using the ductwork you already have.",
    ],
    sections: [
      {
        heading: "Can I add central AC?",
        body: [],
        bullets: [
          "Forced-air furnace: usually yes, using existing ducts",
          "Boiler or baseboard heat: a different setup is needed",
          "We check your furnace, ducts and electrical first",
        ],
      },
      {
        heading: "Sized right",
        body: [],
        bullets: [
          "Too small: runs non-stop and never catches up",
          "Too big: cools fast, then cycles and leaves it clammy",
          "We size it to your home, windows and layout",
        ],
      },
      {
        heading: "What's involved",
        body: [],
        bullets: [
          "Outdoor condenser on a level pad",
          "Indoor coil on top of your furnace",
          "Refrigerant lines between them",
          "Electrical disconnect and wiring",
          "Condensate drain and thermostat",
        ],
      },
      {
        heading: "Where the outdoor unit goes",
        body: [],
        bullets: [
          "Level ground with room to breathe",
          "Away from bedroom windows",
          "Clear of dryer vents and heavy cottonwood areas if possible",
        ],
      },
    ],
    steps: [
      "Assessment: furnace, ductwork, electrical and layout",
      "Recommendation: the right size and placement",
      "Schedule: book in spring to beat the rush",
      "Install: condenser, coil, lines, electrical, drain",
      "Start-up: test cooling and walk you through it",
    ],
    notes: {
      heading: "Permits",
      bullets: [
        "Some AC installs need a permit. Ask us and we'll explain the steps for your home",
      ],
    },
    included: [
      "Home assessment",
      "System sizing",
      "Condenser and coil installation",
      "Refrigerant lines and electrical",
      "Thermostat setup",
      "Start-up and testing",
    ],
    faqs: [
      {
        q: "Can I add central AC to my house?",
        a: "If your home has a forced-air furnace and ductwork, usually yes. We'll check your furnace, ducts and electrical and tell you what's involved.",
      },
      {
        q: "When should I book AC installation?",
        a: "Spring is best, before the first heat wave when demand jumps. We install year-round though.",
      },
      {
        q: "How long does AC installation take?",
        a: "It depends on the home and what's needed. We'll give you a clear plan and schedule before we start.",
      },
      {
        q: "Do you install AC for businesses?",
        a: "Yes: commercial split systems and rooftop unit cooling for offices, stores and restaurants.",
      },
      {
        q: "How often does a new AC need service?",
        a: "Once a year, ideally in spring. A tune-up keeps it efficient and catches weak parts early.",
      },
    ],
    related: [
      "air-conditioning",
      "air-conditioning/ac-repair",
      "heating/furnace-installation",
      "maintenance-plans",
    ],
    image: VAN,
  },
  {
    slug: "water-heaters/hot-water-tank-replacement",
    parent: "water-heaters",
    name: "Hot Water Tank Replacement",
    serviceType: "Hot water tank replacement",
    tone: "warm",
    title: "Hot Water Tank Replacement Calgary | New Tanks",
    description: "Hot water tank replacement in Calgary: gas and electric tanks sized for your household. Leaking tank? Call GBL HVAC LTD 24/7 at 403-970-6988.",
    h1: "Hot Water Tank Replacement in Calgary",
    lede: "Old or leaking hot water tank? We replace it with the right size for your household.",
    intro: [
      "A leaking tank can't be patched. When it's time, we replace it with one sized for how you actually use hot water.",
    ],
    sections: [
      {
        heading: "Signs it's time",
        body: [],
        bullets: [
          "Water leaking from the tank itself",
          "Rusty or discoloured hot water",
          "Rumbling or popping from sediment",
          "Running out of hot water much faster",
          "Age: around 8 to 12 years or more",
        ],
      },
      {
        heading: "Choosing a new tank",
        body: [],
        bullets: [
          "Gas or electric: matched to what your home is set up for",
          "Right size: based on people and bathrooms",
          "Too small: you run out. Too big: you heat water you don't use",
        ],
      },
      {
        heading: "What's involved",
        body: [],
        bullets: [
          "Shut off and drain the old tank",
          "Disconnect water, gas or power, and venting",
          "Set and connect the new tank",
          "Fill, light or power up, and test",
        ],
      },
    ],
    steps: [
      "Call: leaks answered 24/7",
      "Make it safe: shut-off steps over the phone",
      "Confirm size and type for your home",
      "Replace: drain, disconnect, install, connect",
      "Test: hot water confirmed before we leave",
    ],
    notes: {
      heading: "Good to know",
      bullets: [
        "Tankless water heaters: we don't install them",
        "Some replacements need a City permit. Ask us",
      ],
    },
    included: [
      "Gas and electric tanks",
      "Sizing for your household",
      "Old tank drained and disconnected",
      "New tank installed and connected",
      "Venting checked",
      "Testing",
    ],
    faqs: [
      {
        q: "How long does a hot water tank last?",
        a: "Typically around 8 to 12 years, depending on water quality, usage and maintenance.",
      },
      {
        q: "My tank is leaking. Can it be repaired?",
        a: "A drip from a fitting can sometimes be fixed. A leak from the tank itself means it needs replacing.",
      },
      {
        q: "What size tank do I need?",
        a: "It depends on how many people and bathrooms you have and how you use hot water. We'll recommend the right size.",
      },
      {
        q: "Do you install tankless water heaters?",
        a: "No. We focus on hot water tanks: repair, replacement and commercial water heaters.",
      },
      {
        q: "Can you replace a tank the same day?",
        a: "Call us and we'll tell you what we can do based on the tank and timing.",
      },
    ],
    related: [
      "water-heaters",
      "heating/boilers",
      "maintenance-plans",
      "heating/furnace-repair",
    ],
    image: VAN,
  },
  {
    slug: "ventilation/hrv",
    parent: "ventilation",
    name: "HRVs & Air Exchangers",
    serviceType: "HRV and air exchanger service",
    tone: "cool",
    title: "HRV Service Calgary | Air Exchanger Repair",
    description: "HRV and air exchanger service, repair and installation in Calgary. Fresh air without losing heat. Homes and businesses. Call GBL HVAC LTD at 403-970-6988.",
    h1: "HRV & Air Exchanger Service in Calgary",
    lede: "Heat recovery ventilators serviced, repaired and installed so your home gets fresh air without losing heat.",
    intro: [
      "Many newer Calgary homes have an HRV. Most owners don't know it needs regular care.",
    ],
    sections: [
      {
        heading: "What an HRV does",
        body: [],
        bullets: [
          "Pulls stale, humid air out",
          "Brings fresh outdoor air in",
          "Transfers heat between the two through a core",
          "Result: fresh air without a blast of cold",
        ],
      },
      {
        heading: "Signs your HRV needs service",
        body: [],
        bullets: [
          "Heavy window condensation in winter",
          "Stuffy or musty rooms",
          "Loud, rattling or not running",
          "Ice or frost on the unit or outdoor hoods",
          "Water around the unit",
        ],
      },
      {
        heading: "What we service",
        body: [],
        bullets: [
          "Core and filters",
          "Fans and motors",
          "Condensate drain",
          "Defrost operation",
          "Controls and airflow balancing",
          "Outdoor hoods",
        ],
      },
      {
        heading: "What you can do",
        body: [],
        bullets: [
          "Clean filters as the manual recommends",
          "Keep outdoor hoods clear of snow",
          "Don't switch it off all winter",
        ],
      },
    ],
    steps: [
      "Tell us what you're noticing",
      "Inspect the unit, ducts and hoods",
      "Clean the core and filters",
      "Repair fans, drain or controls",
      "Balance and confirm airflow",
    ],
    notes: {
      heading: "What we don't do",
      bullets: [
        "Duct cleaning: we don't offer it",
      ],
    },
    included: [
      "HRV inspection",
      "Core and filter cleaning",
      "Fan and motor repair",
      "Drain and defrost fixes",
      "Airflow balancing",
      "HRV installation",
    ],
    faqs: [
      {
        q: "Do I have an HRV?",
        a: "Look for a box near your furnace with two insulated ducts running to an outside wall. Many newer Calgary homes have one.",
      },
      {
        q: "Should I turn my HRV off in winter?",
        a: "Usually not. It helps control humidity and condensation. If it's icing or noisy, have it checked.",
      },
      {
        q: "How often should an HRV be cleaned?",
        a: "Filters and the core often need cleaning every few months, per the manufacturer's manual, plus a yearly professional check.",
      },
      {
        q: "Can you install an HRV?",
        a: "Yes. We install HRVs in homes that need better ventilation.",
      },
      {
        q: "Why is my HRV freezing up?",
        a: "Often a defrost problem, a blocked drain or a balance issue. We'll find the cause.",
      },
    ],
    related: [
      "ventilation",
      "maintenance-plans",
      "heating",
      "air-conditioning",
    ],
    image: VAN,
  },
  {
    draft: true,
    slug: "heating/heat-pumps",
    parent: "heating",
    name: "Heat Pumps",
    serviceType: "Heat pump installation and repair",
    tone: "cool",
    title: "Heat Pumps Calgary | Install & Repair",
    description: "Heat pump installation and repair in Calgary, including furnace-backed systems for cold winters. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Heat Pumps in Calgary",
    lede: "Heat pumps heat and cool from one outdoor unit. In Calgary they're usually paired with a furnace for the coldest days.",
    intro: [
      "A heat pump moves heat instead of burning fuel. It cools in summer and heats on milder winter days.",
    ],
    sections: [
      {
        heading: "How they work in Calgary",
        body: [],
        bullets: [
          "Mild days: the heat pump heats the home",
          "Deep cold: a furnace or backup heat takes over",
          "Summer: it works as your air conditioner",
        ],
      },
      {
        heading: "Is it right for you?",
        body: [],
        bullets: [
          "Your ductwork and electrical service",
          "Whether you keep a furnace as backup",
          "How you heat and cool now",
        ],
      },
      {
        heading: "Signs of trouble",
        body: [],
        bullets: [
          "Not heating or cooling",
          "Heavy ice that doesn't clear",
          "Running constantly",
          "Strange noises",
        ],
      },
    ],
    steps: [
      "Assessment",
      "Options and sizing",
      "Install or repair",
      "Test heating and cooling",
      "Walkthrough",
    ],
    included: [
      "Heat pump assessment",
      "Installation",
      "Repair",
      "Furnace pairing",
      "Maintenance",
    ],
    faqs: [
      {
        q: "Do heat pumps work in Calgary winters?",
        a: "Many are paired with a furnace or backup heat that takes over in the deepest cold.",
      },
      {
        q: "Can a heat pump replace my AC?",
        a: "Yes. A heat pump cools in summer just like an air conditioner.",
      },
    ],
    related: [
      "heating",
      "air-conditioning",
      "heating/furnace-installation",
      "maintenance-plans",
    ],
    image: VAN,
  },
  {
    draft: true,
    slug: "air-conditioning/ductless-mini-splits",
    parent: "air-conditioning",
    name: "Ductless Mini-Splits",
    serviceType: "Ductless mini-split installation and repair",
    tone: "cool",
    title: "Ductless Mini-Split Calgary | Install & Repair",
    description: "Ductless mini-split installation and repair in Calgary for homes without ductwork, additions, garages and hot rooms. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Ductless Mini-Splits in Calgary",
    lede: "Cooling, and often heating, for rooms and homes without ductwork.",
    intro: [
      "Mini-splits connect an outdoor unit to wall-mounted indoor units, with no ducts needed.",
    ],
    sections: [
      {
        heading: "Good for",
        body: [],
        bullets: [
          "Homes with boilers or baseboard heat",
          "Additions and renovated spaces",
          "Hot upstairs rooms",
          "Garages and workshops",
        ],
      },
      {
        heading: "What's involved",
        body: [],
        bullets: [
          "Outdoor unit",
          "Wall-mounted indoor head",
          "Small line set through the wall",
          "Electrical and condensate drain",
        ],
      },
      {
        heading: "Signs of trouble",
        body: [],
        bullets: [
          "Not cooling",
          "Water dripping from the indoor unit",
          "Error codes",
          "Noisy operation",
        ],
      },
    ],
    steps: [
      "Assessment",
      "Placement plan",
      "Install",
      "Test",
      "Walkthrough",
    ],
    included: [
      "Assessment",
      "Installation",
      "Repair",
      "Cleaning and maintenance",
    ],
    faqs: [
      {
        q: "Do I need ductwork for a mini-split?",
        a: "No. Mini-splits are designed for spaces without ducts.",
      },
      {
        q: "Can one outdoor unit run several rooms?",
        a: "Some systems can connect multiple indoor units. We'll tell you what fits your space.",
      },
    ],
    related: [
      "air-conditioning",
      "air-conditioning/ac-installation",
      "ventilation",
      "maintenance-plans",
    ],
    image: VAN,
  },
  {
    draft: true,
    slug: "ventilation/humidifiers",
    parent: "ventilation",
    name: "Humidifiers",
    serviceType: "Furnace humidifier installation and service",
    tone: "cool",
    title: "Furnace Humidifiers Calgary | Install & Service",
    description: "Furnace humidifier installation and service in Calgary for dry winter air, static and comfort. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Furnace Humidifiers in Calgary",
    lede: "Calgary winters are dry. A furnace humidifier adds moisture back through your heating system.",
    intro: [
      "Dry winter air means static shocks, dry skin and cracked wood. A whole-home humidifier helps.",
    ],
    sections: [
      {
        heading: "Signs your air is too dry",
        body: [],
        bullets: [
          "Static shocks",
          "Dry skin and throat",
          "Gaps in hardwood floors",
          "Cracking wood furniture",
        ],
      },
      {
        heading: "Getting it right",
        body: [],
        bullets: [
          "Too much humidity in a cold snap causes window condensation",
          "Turn it down when it gets very cold outside",
          "Change the pad or filter every season",
        ],
      },
      {
        heading: "What we do",
        body: [],
        bullets: [
          "Install furnace-mounted humidifiers",
          "Replace pads and valves",
          "Fix leaks and drains",
          "Set the humidistat",
        ],
      },
    ],
    steps: [
      "Check your furnace and ducts",
      "Recommend a humidifier",
      "Install",
      "Set the humidistat",
      "Show you seasonal care",
    ],
    included: [
      "Humidifier installation",
      "Pad replacement",
      "Valve and drain repair",
      "Humidistat setup",
    ],
    faqs: [
      {
        q: "What humidity should I keep in winter?",
        a: "Lower humidity in very cold weather to avoid window condensation. We'll set it up and show you how to adjust.",
      },
      {
        q: "How often do humidifier pads need changing?",
        a: "Usually once a season, depending on use and water quality.",
      },
    ],
    related: [
      "ventilation",
      "heating",
      "ventilation/hrv",
      "maintenance-plans",
    ],
    image: VAN,
  },
  {
    draft: true,
    slug: "heating/garage-heaters",
    parent: "heating",
    name: "Garage Heaters",
    serviceType: "Garage and unit heater installation and repair",
    tone: "warm",
    title: "Garage Heaters Calgary | Unit Heater Install",
    description: "Garage and shop unit heater installation and repair in Calgary. Stay warm all winter. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Garage & Unit Heaters in Calgary",
    lede: "Heat for garages, workshops and warehouses through a Calgary winter.",
    intro: [
      "A properly installed unit heater keeps your garage or shop usable all winter.",
    ],
    sections: [
      {
        heading: "What we work on",
        body: [],
        bullets: [
          "Garage unit heaters",
          "Shop and warehouse heaters",
          "Thermostats",
          "Venting",
        ],
      },
      {
        heading: "Signs of trouble",
        body: [],
        bullets: [
          "Won't light",
          "Shuts off early",
          "Noisy fan",
          "Not keeping up",
        ],
      },
      {
        heading: "Placement and sizing",
        body: [],
        bullets: [
          "Sized for the space and insulation",
          "Proper clearances",
          "Venting done right",
        ],
      },
    ],
    steps: [
      "Assess the space",
      "Size the heater",
      "Install or repair",
      "Test",
      "Walkthrough",
    ],
    notes: {
      heading: "Safety first",
      bullets: [
        "Smell gas: leave the building and call 911 or your gas utility from outside",
        "CO alarm sounding: get everyone out and call 911",
        "Never heat the house with an oven, stove or barbecue",
      ],
    },
    included: [
      "Unit heater installation",
      "Repair",
      "Thermostats",
      "Venting checks",
    ],
    faqs: [
      {
        q: "What size heater does my garage need?",
        a: "It depends on the size, insulation and doors. We'll size it properly.",
      },
      {
        q: "Do you repair shop heaters?",
        a: "Yes. We repair unit heaters in garages, shops and warehouses.",
      },
    ],
    related: [
      "heating",
      "heating/furnace-repair",
      "rooftop-units",
      "maintenance-plans",
    ],
    image: VAN,
  },
];

// Only published pages. Everything (routes, sitemap, nav, footer, links) reads from this.
export const SERVICES = ALL_SERVICES.filter((s) => !s.draft);

export const HUBS = SERVICES.filter((s) => !s.parent);

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function childrenOf(slug: string) {
  return SERVICES.filter((s) => s.parent === slug);
}
