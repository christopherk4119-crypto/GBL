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
      "A Calgary winter doesn't wait for business hours. When the furnace quits on a January night, the house starts losing heat right away, and pipes, pets and people all feel it. That's why GBL HVAC LTD answers the phone 24 hours a day, 7 days a week.",
      "We repair, install and maintain furnaces and boilers in houses, townhomes, rental properties, shops, restaurants and offices across Calgary and the surrounding area. One call gets you a straight answer about what's wrong and what it takes to fix it.",
    ],
    sections: [
      {
        heading: "Signs your furnace needs service",
        body: [
          "Most furnaces give some warning before they fail completely. Catching these early is usually cheaper and far less stressful than a 2am breakdown.",
        ],
        bullets: [
          "The furnace runs but the air from the vents is cool or barely warm",
          "It short-cycles: starts, runs a few minutes, shuts off, repeats",
          "Some rooms are much colder than others",
          "New noises: banging, squealing, rattling or a loud boom at start-up",
          "The igniter clicks but the burners don't light",
          "Your gas bill has climbed with no change in how you use heat",
          "The furnace is old and has needed several repairs in the last few winters",
        ],
      },
      {
        heading: "Furnace repair",
        body: [
          "A repair visit starts with a proper diagnosis. We check the thermostat, filter, igniter, flame sensor, pressure switches, inducer motor, blower, venting and safety controls, then tell you what we found in plain language before any work starts.",
          "Many no-heat calls come down to a single failed part or a blocked intake or exhaust pipe. Snow and frost can block the PVC pipes on the outside wall of high-efficiency furnaces during a Calgary cold snap, and the furnace shuts itself off to stay safe. We'll show you what to watch for so it doesn't catch you out again.",
        ],
      },
      {
        heading: "Furnace and boiler installation",
        body: [
          "When a furnace is near the end of its life, repeated repairs stop making sense. Most furnaces last somewhere around 15 to 20 years, depending on how well they were maintained. If yours is in that range and needs a major part, we'll lay out repair versus replacement honestly so you can decide.",
          "A new system should be sized for your actual home or building, not just matched to whatever was there before. We look at the space, the existing ductwork and venting, and how you use the building, then recommend equipment that fits. We also install and service hot water boilers for homes and commercial buildings that heat with hydronic systems.",
          "Some heating work in Calgary needs a City permit and inspection. Ask us whether yours does and we'll explain the steps before the job starts.",
        ],
      },
      {
        heading: "Heating for businesses",
        body: [
          "A cold restaurant, store or office costs you customers and staff comfort. We service commercial furnaces, unit heaters, boilers and the heating side of rooftop units, and we can set up regular maintenance so problems are caught on a scheduled visit instead of during opening hours.",
        ],
      },
      {
        heading: "Before you call: quick checks",
        body: ["These take two minutes and sometimes solve the problem outright. If they don't, call us any time."],
        bullets: [
          "Make sure the thermostat is set to Heat and above room temperature, and replace its batteries if it has them",
          "Check the furnace switch (it looks like a light switch near the unit) is on",
          "Check the breaker for the furnace hasn't tripped",
          "Replace a dirty filter. A clogged filter can make the furnace overheat and shut down",
          "Clear snow and frost from the intake and exhaust pipes outside",
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
      "Furnaces don't pick a good time to fail. They quit on the coldest night of the year, on a long weekend, or right after the family has gone to bed. When that happens, you need someone who actually answers.",
      "GBL HVAC LTD is open 24 hours. When you call 403-970-6988 you talk directly to Quinn, the owner, not an answering service that takes a message for the morning.",
    ],
    sections: [
      {
        heading: "What to do right now",
        body: ["While you're waiting for us, these steps keep your family and your home safe and warm."],
        bullets: [
          "If you smell gas or a carbon monoxide alarm is sounding, get everyone out and call 911 from outside. Don't wait for an HVAC company",
          "Check the thermostat is on Heat, the furnace switch is on and the breaker hasn't tripped",
          "Swap a dirty filter if you have a spare",
          "Clear snow and frost off the furnace pipes on the outside wall",
          "Close curtains and blinds, shut doors to unused rooms and keep everyone in one warm area",
          "Use electric space heaters only as directed. Never use a gas stove, oven or barbecue to heat the house",
        ],
      },
      {
        heading: "Protect your pipes",
        body: [
          "In a deep Calgary cold snap, a house without heat can get cold enough for water lines to freeze, especially pipes on outside walls, in crawl spaces and in unheated garages. A burst pipe can do far more damage than the furnace repair itself.",
          "While the heat is off, open cabinet doors under sinks on outside walls so warmer room air reaches the pipes, and let a tap drip slightly. If you're leaving the house, tell us so we can talk through the risk.",
        ],
      },
      {
        heading: "What happens when you call",
        body: [
          "Tell us what the furnace is doing: no heat at all, cold air, short cycling, strange noises, error codes or lights blinking on the control board. A few questions on the phone often narrow down the problem before we arrive.",
          "On site we diagnose the actual cause, explain it in plain language and get your heat back on as soon as it's safe to do so. If a part has to be ordered, we'll tell you straight and talk through options for keeping the house warm in the meantime.",
        ],
      },
      {
        heading: "Common causes of a no-heat call",
        body: ["Most overnight no-heat calls trace back to a short list of problems:"],
        bullets: [
          "Blocked intake or exhaust pipes from snow, ice or frost",
          "A failed hot surface igniter",
          "A dirty or failed flame sensor that shuts the burners off seconds after lighting",
          "Inducer motor or pressure switch faults",
          "A failed blower motor or capacitor",
          "A severely clogged filter causing the furnace to overheat and lock out",
          "Thermostat or wiring faults",
        ],
      },
      {
        heading: "Businesses too",
        body: [
          "A restaurant with no heat before the lunch rush, a store with frozen staff, or an office that can't open: commercial heating failures cost money by the hour. We answer commercial calls around the clock as well, and we work on furnaces, unit heaters, boilers and rooftop units.",
        ],
      },
      {
        heading: "Stop the next one before it starts",
        body: [
          "Many emergency calls could have been caught on a fall tune-up: a cracked igniter, a dirty flame sensor or a weak capacitor are all visible before they fail. Once your heat is back on, ask us about seasonal maintenance so your furnace is checked before the cold arrives.",
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
      "Calgary summers are short, but the hot stretches are real. Upper floors and newer homes with big windows can get uncomfortable fast, and once a heat wave hits, everyone wants their AC fixed at the same time.",
      "GBL HVAC LTD installs, repairs and maintains central air conditioning for houses, townhomes, offices and stores. We're open 24 hours, so you can reach us when the AC quits on the hottest day of the year.",
    ],
    sections: [
      {
        heading: "AC installation",
        body: [
          "Most Calgary homes with forced-air furnaces can add central air conditioning using the existing ductwork. The outdoor unit is paired with an indoor coil that sits on top of the furnace, and the furnace blower moves the cool air through the house.",
          "Sizing matters. An undersized system runs constantly and never catches up. An oversized one cools quickly but cycles on and off, leaving the house clammy and wearing out parts. We look at your home's size, layout, windows and existing ducts before recommending equipment.",
          "We'll also talk through where the outdoor unit should go: level ground, clearance for airflow, and away from bedroom windows where the noise would bother you.",
        ],
      },
      {
        heading: "AC repair",
        body: ["Call us if you notice any of these:"],
        bullets: [
          "The AC runs but the air from the vents isn't cold",
          "The outdoor unit isn't running when the thermostat calls for cooling",
          "Ice on the refrigerant lines or the indoor coil",
          "Water pooling around the furnace or indoor coil",
          "Loud buzzing, clicking or grinding from the outdoor unit",
          "The breaker trips when the AC starts",
          "Some rooms stay hot no matter how long it runs",
        ],
      },
      {
        heading: "What we check on a repair",
        body: [
          "We test the thermostat, capacitor, contactor, fan motors, compressor, refrigerant pressures, condensate drain and airflow through the filter and coil. A failed capacitor or contactor is one of the most common reasons an outdoor unit won't start, and it's usually a quick repair.",
          "If the system is low on refrigerant, that means there's a leak somewhere. Topping it up without finding the leak only buys time, so we'll explain the options for locating and repairing it.",
        ],
      },
      {
        heading: "Tune-ups before summer",
        body: [
          "A spring tune-up catches weak parts before the first hot day and keeps the system running efficiently. We clean the outdoor coil, check electrical connections and refrigerant, test the capacitor, clear the condensate drain and confirm the system is cooling properly.",
          "Between visits, keep the outdoor unit clear of grass clippings, leaves and cottonwood fluff, and change your furnace filter regularly. The AC uses the same filter and blower as your furnace.",
        ],
      },
      {
        heading: "Commercial cooling",
        body: [
          "Offices, stores and restaurants need reliable cooling for staff, customers and equipment. We service commercial split systems and the cooling side of rooftop units, and we can set up scheduled maintenance so your system is checked before summer every year.",
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
      "When a walk-in cooler starts warming up, the clock is running on every case of product inside it. A failure at closing time or over a long weekend can mean throwing out thousands of dollars of stock.",
      "GBL HVAC LTD services commercial refrigeration for restaurants, cafés, grocery and convenience stores, bars, caterers and other businesses across Calgary. We answer 24 hours a day, so a cooler failure at midnight gets a real answer at midnight.",
    ],
    sections: [
      {
        heading: "What we work on",
        bullets: [
          "Walk-in coolers and walk-in freezers",
          "Condensing units and evaporators",
          "Reach-in coolers and freezers",
          "Display cases and merchandisers",
          "Prep tables and under-counter units",
          "Ice machines",
        ],
        body: [],
      },
      {
        heading: "Warning signs",
        body: ["Call before it becomes an emergency if you notice:"],
        bullets: [
          "The box temperature creeping up, or slow to recover after the door has been open",
          "Ice building up on the evaporator coil or around the door",
          "The condensing unit running constantly or short cycling",
          "Water on the floor of the walk-in",
          "Doors that don't seal or close properly, or torn gaskets",
          "New noises from fans or the compressor",
        ],
      },
      {
        heading: "If your cooler is failing right now",
        body: [
          "Keep the door shut as much as possible. Every opening lets cold air out and warm air in. Move the most valuable or most perishable product to another working cooler or freezer if you have one, and keep a thermometer inside so you know the actual temperature.",
          "Food safety rules generally require cold-held food to stay at 4°C or below. Keep a record of temperatures and times so you can make an informed decision about product with your health inspector's guidance.",
          "Then call 403-970-6988. Tell us the unit type, what temperature it's at and what it's doing, and we'll go from there.",
        ],
      },
      {
        heading: "Repair",
        body: [
          "We diagnose the whole system: thermostat and controls, defrost timer and heaters, evaporator and condenser fans, coils, refrigerant charge, compressor and electrical components. Dirty condenser coils are one of the most common causes of poor performance, especially in busy kitchens where grease and dust build up fast.",
        ],
      },
      {
        heading: "Preventive maintenance",
        body: [
          "Most refrigeration breakdowns build up over weeks: a coil getting dirtier, a fan motor starting to fail, a door gasket letting warm air in. Scheduled maintenance catches these early, keeps the system running efficiently and cuts the risk of losing stock.",
          "A typical maintenance visit includes cleaning condenser coils, checking refrigerant and operating pressures, inspecting fans, testing defrost and controls, checking door gaskets and hinges, and clearing drain lines. We can set up a schedule that suits your business and your opening hours.",
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
      "Newer homes are built tight to save energy. That's great for heating bills, but it also traps moisture, cooking smells and stale air inside. Good ventilation swaps that air for fresh air without throwing away the heat you've paid for.",
      "GBL HVAC LTD installs, services and repairs heat recovery ventilators (HRVs), air exchangers, exhaust fans and ductwork for homes and commercial spaces across Calgary.",
    ],
    sections: [
      {
        heading: "Signs your ventilation isn't keeping up",
        bullets: [
          "Heavy condensation or frost on the inside of windows in winter",
          "Musty smells, or cooking smells that linger",
          "Stuffy rooms, especially bedrooms overnight",
          "Mould spots around window frames or in bathrooms",
          "An HRV that's noisy, iced up, or hasn't been cleaned in years",
          "Rooms that are always too hot or too cold",
        ],
        body: [],
      },
      {
        heading: "HRVs and air exchangers",
        body: [
          "An HRV pulls stale air out of the house and brings fresh outdoor air in. Inside, the two airstreams pass through a core that transfers heat from the outgoing air to the incoming air, so you get fresh air without a blast of cold.",
          "Many newer Calgary homes already have an HRV, but a lot of owners don't know it needs care. The filters and core need regular cleaning, the condensate drain needs to stay clear, and the outdoor hoods need to be free of snow, frost and debris. A neglected HRV can move very little air.",
          "We service existing units, troubleshoot noise, icing and drainage problems, and install new HRVs where homes need better ventilation.",
        ],
      },
      {
        heading: "Ductwork",
        body: [
          "Ductwork moves the air your furnace, air conditioner and HRV produce. Leaky, undersized or poorly balanced ducts mean some rooms never get enough air while the system works harder than it should.",
          "We repair and modify ductwork, add runs for renovations and basement developments, seal leaky joints, and balance airflow so heat and cooling reach the rooms that need them.",
        ],
      },
      {
        heading: "Commercial ventilation",
        body: [
          "Offices, stores and restaurants need enough fresh air for the people inside, and kitchens need make-up air to replace what the exhaust hood pulls out. When make-up air falls short, doors become hard to open, the space feels drafty and equipment can struggle.",
          "We service commercial ventilation, make-up air units and the ventilation side of rooftop units, and we can include it in a regular maintenance schedule.",
        ],
      },
      {
        heading: "Simple things you can do",
        bullets: [
          "Run bathroom fans during and for a while after showers",
          "Use the range hood when cooking",
          "Clean or replace HRV filters as the manual recommends",
          "Keep outdoor HRV and exhaust hoods clear of snow in winter",
          "Keep supply and return vents uncovered by furniture and rugs",
        ],
        body: [],
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
    title: "Water Heater Calgary | Tank & Tankless Install",
    description:
      "Hot water tank and tankless water heater installation and repair in Calgary. Homes and businesses, open 24/7. Call GBL HVAC LTD at 403-970-6988.",
    h1: "Water Heater Installation & Repair in Calgary",
    lede: "Hot water tank and tankless water heater installation and repair for Calgary homes and businesses.",
    intro: [
      "No hot water is more than an inconvenience. It means no showers, no laundry and no dishes, and for a restaurant or salon it can mean closing the doors.",
      "GBL HVAC LTD installs and repairs hot water tanks and tankless water heaters across Calgary. We're open 24 hours, so a leaking tank at night gets an answer at night.",
    ],
    sections: [
      {
        heading: "Signs your water heater needs attention",
        bullets: [
          "No hot water, or hot water that runs out much faster than it used to",
          "Water pooling around the base of the tank",
          "Rusty or discoloured hot water",
          "Rumbling or popping sounds from the tank",
          "The pilot light won't stay lit",
          "A tank that's more than about 10 years old",
        ],
        body: [],
      },
      {
        heading: "If your tank is leaking",
        body: [
          "Turn off the cold water supply valve on the pipe going into the top of the tank. For a gas tank, turn the gas control knob to Off or Pilot. For an electric tank, switch off its breaker. Then call us.",
          "A small drip from a fitting can sometimes be repaired. A leak from the tank itself means the tank has failed and needs replacing.",
        ],
      },
      {
        heading: "Tank water heaters",
        body: [
          "Most Calgary homes have a gas-fired hot water tank. A typical tank lasts somewhere around 8 to 12 years, depending on water quality and maintenance. Calgary's water is moderately hard, which leaves sediment in the bottom of the tank over time and makes it work harder.",
          "We repair burners, thermocouples, gas valves, venting and elements, and replace tanks when they've reached the end of their life. When replacing, we'll help you choose the right size for your household so you're not running out of hot water or heating more than you need.",
        ],
      },
      {
        heading: "Tankless water heaters",
        body: [
          "A tankless water heater heats water as you use it, so it never runs out the way a tank does and takes up much less space. It's a good fit for many households and businesses, but not every home: the gas line, venting and electrical have to support it.",
          "We'll look at your current setup and tell you honestly whether tankless makes sense for you. Tankless units need regular descaling, especially with Calgary's hard water, and we service existing tankless systems as well as installing new ones.",
        ],
      },
      {
        heading: "Commercial water heaters",
        body: [
          "Restaurants, salons, gyms and other businesses use a lot more hot water than a house. We service and replace commercial water heaters and can help you figure out whether your current system is keeping up with demand.",
        ],
      },
      {
        heading: "Permits",
        body: [
          "Replacing a water heater in Calgary may require a City permit and inspection. Ask us whether your job does and we'll explain the steps before work starts.",
        ],
      },
    ],
    included: [
      "Hot water tank repair",
      "Hot water tank replacement",
      "Tankless water heater installation",
      "Tankless descaling and service",
      "Commercial water heater service",
      "24/7 response for leaks and no hot water",
    ],
    faqs: [
      {
        q: "How long does a hot water tank last?",
        a: "Typically somewhere around 8 to 12 years, depending on water quality, usage and maintenance. If yours is in that range and starting to show problems, it's worth planning a replacement before it fails.",
      },
      {
        q: "Is a tankless water heater worth it?",
        a: "For many households it is: endless hot water and a smaller footprint. It depends on your gas line, venting and how you use hot water. We'll look at your setup and give you an honest recommendation.",
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
      "The best furnace repair is the one you never need. Most breakdowns start as small problems: a cracked igniter, a dirty flame sensor, a weak capacitor, a clogged drain. They're easy to spot on a scheduled visit and expensive to discover at 2am in January.",
      "GBL HVAC LTD offers seasonal tune-ups for furnaces, air conditioners, boilers, HRVs and water heaters, plus scheduled maintenance for commercial heating, cooling and refrigeration.",
    ],
    sections: [
      {
        heading: "Fall furnace tune-up",
        body: ["Book it before the first real cold snap. A typical furnace tune-up covers:"],
        bullets: [
          "Inspecting and cleaning the burners and flame sensor",
          "Checking the igniter, inducer motor and pressure switches",
          "Inspecting the heat exchanger area and venting",
          "Testing safety controls and limit switches",
          "Checking the blower, motor and capacitor",
          "Checking the thermostat and system operation",
          "Replacing or recommending the right filter",
        ],
      },
      {
        heading: "Spring AC tune-up",
        body: ["Book it before the first hot stretch, when everyone else calls at once. A typical AC tune-up covers:"],
        bullets: [
          "Cleaning the outdoor condenser coil",
          "Checking refrigerant operating pressures",
          "Testing the capacitor, contactor and fan motor",
          "Clearing the condensate drain",
          "Checking electrical connections",
          "Confirming temperature drop and airflow",
        ],
      },
      {
        heading: "Why it's worth it",
        body: [
          "A clean, properly adjusted system runs more efficiently, which helps with gas and power bills. It's also less likely to fail on the coldest or hottest day of the year, when repair demand is highest.",
          "Regular maintenance also gives you a record of your system's condition. When a furnace or AC is getting near the end of its life, you'll see it coming and can plan a replacement on your schedule instead of in an emergency.",
          "Many equipment manufacturers expect regular professional maintenance as a condition of their warranty. Check your warranty paperwork for the details.",
        ],
      },
      {
        heading: "Commercial maintenance contracts",
        body: [
          "For restaurants, stores, offices and other businesses, a breakdown costs more than the repair. We set up scheduled maintenance for rooftop units, furnaces, boilers, make-up air, walk-in coolers and other refrigeration, timed around your business hours.",
          "Every visit is documented, so you know what was checked, what was found and what's coming up. Tell us what equipment you have and we'll suggest a schedule.",
        ],
      },
      {
        heading: "Between visits",
        bullets: [
          "Check your furnace filter monthly in winter and replace it when it's dirty",
          "Keep the outdoor AC unit clear of grass, leaves and cottonwood fluff",
          "Keep furnace intake and exhaust pipes clear of snow",
          "Clean HRV filters as the manufacturer recommends",
          "Test smoke and carbon monoxide alarms regularly",
        ],
        body: [],
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
      "Most commercial buildings in Calgary are heated and cooled by rooftop units. One box on the roof handles heat in January, cooling in July and fresh air all year. When it stops working, the whole space feels it: staff, customers, product and equipment.",
      "GBL HVAC LTD repairs, replaces and maintains rooftop units for strip malls, restaurants, retail stores, offices, shops and light industrial buildings. We answer 24 hours a day, so a unit that quits overnight or on a weekend gets a real answer, not a voicemail.",
    ],
    sections: [
      {
        heading: "Signs your rooftop unit needs service",
        body: [],
        bullets: [
          "No heat, or the space can't hold temperature on cold days",
          "No cooling, or warm air from the vents in summer",
          "The unit short-cycles, starting and stopping over and over",
          "Squealing belts, grinding fan motors or banging on the roof",
          "Water leaking through the ceiling under the unit",
          "Ice on the refrigerant lines or coil",
          "Higher energy bills with no change in hours or use",
          "Areas of the building that are always too hot or too cold",
        ],
      },
      {
        heading: "Heating side",
        body: [
          "Most rooftop units in Calgary have a gas-fired heating section. Over a long winter it runs hard, and the common failures are similar to a furnace: igniters, flame sensors, inducer motors, pressure switches, gas valves and limit switches. We diagnose the cause, explain it in plain language and get the heat back on as soon as it's safe.",
          "Snow and ice matter on a roof too. Drifting snow can block fresh-air and combustion openings, and ice can build up around the unit. We check those as part of any winter call.",
        ],
      },
      {
        heading: "Cooling side",
        body: [
          "In summer the same unit cools the building. We service compressors, condenser fans, contactors, capacitors, refrigerant circuits and coils. Dirty condenser coils are one of the most common reasons a rooftop unit struggles on hot days, especially on roofs near cottonwoods or dusty lots.",
          "If the system is low on refrigerant, there's a leak. We'll explain the options for finding and fixing it rather than just topping it up.",
        ],
      },
      {
        heading: "Fresh air, economizers and controls",
        body: [
          "Rooftop units also bring in outside air for the people inside. Many have an economizer that uses cool outdoor air instead of running the compressor when the weather allows. A stuck economizer damper can let freezing air pour in during winter or waste energy in summer.",
          "We check dampers, actuators, sensors and thermostats or building controls so the unit is bringing in the right amount of air and responding to the space properly.",
        ],
      },
      {
        heading: "Replacement",
        body: [
          "When a rooftop unit is old and needs a major component, replacement can make more sense than another repair. We'll give you an honest comparison. Replacing a rooftop unit usually means planning a crane lift, checking the curb and connections, and scheduling around your business hours. We'll walk you through what's involved before you decide.",
        ],
      },
      {
        heading: "Maintenance that prevents shutdowns",
        body: [
          "Rooftop units are out of sight, so they're often out of mind until something fails. Scheduled maintenance catches the small problems first. A typical visit includes:",
        ],
        bullets: [
          "Replacing filters and checking belts and pulleys",
          "Cleaning condenser and evaporator coils",
          "Inspecting the heating section, burners and venting",
          "Checking refrigerant operating pressures",
          "Testing economizer dampers and controls",
          "Clearing condensate drains to prevent roof leaks",
          "Checking electrical connections, contactors and capacitors",
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
      "A walk-in cooler or freezer holds most of the stock in a restaurant, café, grocery store or catering kitchen. When it fails, the cost isn't just the repair. It's the product inside, and potentially a day of business.",
      "GBL HVAC LTD repairs and maintains walk-in coolers and walk-in freezers across Calgary. We're open 24 hours, so when the box starts warming up at closing time, on a Sunday or in the middle of the night, you can call 403-970-6988 and talk to Quinn directly.",
    ],
    sections: [
      {
        heading: "If your walk-in is failing right now",
        body: [
          "Keep the door shut. Every opening lets cold air out. Put a thermometer inside so you know the real temperature, not just what the display says, and write down readings and times.",
          "Move the most valuable or most perishable product to another working cooler or freezer if you have one. Cold-held food generally needs to stay at 4°C or below, and frozen food should stay frozen solid. Your health inspector can advise on product that has warmed up.",
          "Then call us. Tell us whether it's a cooler or a freezer, what temperature it's at and what you see and hear, and we'll go from there.",
        ],
      },
      {
        heading: "Warning signs to call about early",
        body: [],
        bullets: [
          "Temperature creeping up, or slow to recover after deliveries",
          "Ice building up on the evaporator coil in the box",
          "Frost or ice around the door frame, or a door that won't seal",
          "Water on the floor, or ice on the floor of a freezer",
          "The condensing unit running non-stop or short cycling",
          "New noises from the evaporator fans or condensing unit",
          "Torn door gaskets or a door that doesn't close by itself",
        ],
      },
      {
        heading: "How a walk-in works",
        body: [
          "Inside the box, an evaporator coil and fans pull heat out of the air. Outside, usually on the roof or a wall, a condensing unit with a compressor and fan gets rid of that heat. Refrigerant lines connect the two, and controls tell the system when to run and when to defrost.",
          "A problem anywhere in that loop shows up as a warm box. That's why we diagnose the whole system rather than guessing at one part.",
        ],
      },
      {
        heading: "Freezer-specific problems",
        body: [
          "Walk-in freezers run far below zero, so defrost is critical. Defrost heaters and timers or controls melt ice off the evaporator coil on a schedule. When defrost fails, the coil turns into a block of ice, airflow stops and the box warms up.",
          "Freezer doors have heated frames to stop them freezing shut. A failed door heater can leave the door iced up or let warm, moist air in. Drain lines need heat too, or the defrost water freezes in the line and backs up.",
        ],
      },
      {
        heading: "What we check",
        body: [],
        bullets: [
          "Thermostat, controls and temperature sensors",
          "Evaporator coil and fans",
          "Defrost heaters, timers and drain line heaters",
          "Condensing unit, compressor and condenser fan",
          "Refrigerant charge and operating pressures",
          "Condenser coil condition (dirty coils are a common cause)",
          "Door gaskets, hinges, closers and door frame heaters",
        ],
      },
      {
        heading: "Maintenance",
        body: [
          "Most walk-in failures build up over weeks: coils getting dirtier, a fan motor starting to fail, a gasket letting warm air in. A scheduled maintenance visit catches those early and keeps the system running efficiently. We'll recommend a schedule that suits your equipment and your kitchen, and work around your opening hours.",
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
      "Running out of ice on a busy Friday night means watered-down service, unhappy customers and staff running to the store for bags. An ice machine that's producing slowly, making poor ice or leaking needs attention before it stops completely.",
      "GBL HVAC LTD repairs and maintains commercial ice machines across Calgary for restaurants, bars, cafés, hotels, convenience stores and anyone else who depends on a steady supply of ice. We answer 24 hours a day, 7 days a week.",
    ],
    sections: [
      {
        heading: "Common ice machine problems",
        body: [],
        bullets: [
          "Not making ice at all",
          "Making ice much more slowly than it used to",
          "Small, thin, cloudy or misshapen cubes",
          "Ice that tastes or smells off",
          "Water leaking around the machine or bin",
          "The machine runs constantly or keeps shutting off",
          "Scale or slime visible on the evaporator or water parts",
        ],
      },
      {
        heading: "Calgary water and scale",
        body: [
          "Calgary's water is moderately hard. As an ice machine freezes water over and over, the minerals stay behind as scale on the evaporator plate, water distribution tubes, pump and valves. Scale makes the machine slower, makes harvest unreliable and eventually causes breakdowns.",
          "Regular cleaning and descaling, along with a properly maintained water filter, keeps scale under control. If your machine has never been descaled, it's worth having it looked at.",
        ],
      },
      {
        heading: "Ice is food",
        body: [
          "Health inspectors treat ice as food. The inside of an ice machine is cold, damp and dark, which is exactly where slime and mould like to grow. Bins, chutes and water parts need regular cleaning and sanitizing, following the manufacturer's procedure.",
          "If you see pink or black slime, or the ice tastes off, the machine needs a thorough clean. We'll clean and sanitize it and check that everything is working properly at the same time.",
        ],
      },
      {
        heading: "How we diagnose a machine",
        body: [
          "An ice machine is a small refrigeration system with a water system and a harvest cycle on top. When ice production drops, the cause can be on the refrigeration side (a dirty condenser, a failing fan or compressor, a refrigerant problem), the water side (scale, a clogged filter, a failing inlet valve or pump) or the controls (sensors, the harvest cycle or the bin level control).",
          "We check all three so the fix actually solves the problem, rather than just getting the machine running for a few days.",
        ],
      },
      {
        heading: "Placement matters",
        body: [
          "Air-cooled ice machines need room to breathe. Jammed into a hot corner of a kitchen next to the fryers, or with the condenser blocked by boxes, they produce less ice and work harder. We'll tell you if your machine's location is costing you ice and what can be done about it.",
        ],
      },
      {
        heading: "Maintenance",
        body: [
          "A maintenance visit typically includes cleaning and descaling the water system, sanitizing the bin and food-contact parts, cleaning the condenser, checking the water filter, and confirming the harvest cycle and bin control work. We'll recommend how often based on your machine, water and how much ice you use.",
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
      "A commercial kitchen can't run without its hood fan. It pulls smoke, heat and grease-laden air away from the cooking line. Every bit of air it removes has to be replaced, and that's the job of the make-up air unit. The two work as a pair, so a problem with one shows up as a problem with both.",
      "GBL HVAC LTD repairs and maintains kitchen exhaust hood fans and make-up air units for restaurants, cafés, food trucks with commissary kitchens, institutional kitchens and other food businesses across Calgary. We answer 24 hours a day.",
    ],
    sections: [
      {
        heading: "Signs of a hood fan or make-up air problem",
        body: [],
        bullets: [
          "Smoke rolling out from under the hood instead of being captured",
          "The kitchen getting hotter or smokier than usual",
          "Front doors that are hard to open or slam shut",
          "Cold drafts in the kitchen or dining room in winter",
          "Squealing, rattling or grinding from the exhaust fan on the roof",
          "The make-up air unit not heating, so the kitchen fills with freezing air",
          "The hood fan or make-up air unit not starting when switched on",
        ],
      },
      {
        heading: "Hood exhaust fans",
        body: [
          "Most kitchen exhaust fans sit on the roof above the hood. They're often belt-driven, and belts stretch, wear and slip. Motors and bearings wear out, and grease build-up on the fan wheel throws it out of balance, causing vibration and noise.",
          "We repair and replace exhaust fan motors, belts, pulleys and bearings, and troubleshoot the switches and controls that run them. Grease cleaning of hoods and ducts and the fire-suppression system are separate specialties. If you're not sure who handles what, ask us and we'll point you in the right direction.",
        ],
      },
      {
        heading: "Make-up air units",
        body: [
          "When the hood fan pulls air out, the same amount of air has to come back in. Without enough make-up air, the building goes into negative pressure: doors become hard to open, the hood stops capturing smoke properly and appliances with flues may not vent as they should.",
          "In a Calgary winter, that replacement air can be well below freezing, so make-up air units usually heat it as it comes in, often with a gas burner. A make-up air unit that isn't heating dumps freezing air into the kitchen. We service burners, igniters, flame safety controls, blowers, belts, filters, dampers and controls.",
        ],
      },
      {
        heading: "Working as a pair",
        body: [
          "Hood fans and make-up air units are usually interlocked so they start and stop together. If the interlock, a switch or a control fails, one may run without the other. We test the whole system together so the kitchen is balanced, not just each unit on its own.",
        ],
      },
      {
        heading: "Maintenance",
        body: ["Kitchen exhaust and make-up air equipment works hard every service. Regular maintenance usually includes:"],
        bullets: [
          "Inspecting and adjusting or replacing belts",
          "Checking motors, bearings and fan wheels",
          "Replacing make-up air filters",
          "Inspecting the make-up air burner and safety controls before winter",
          "Checking dampers, interlocks and controls",
          "Confirming the hood and make-up air are running together properly",
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
