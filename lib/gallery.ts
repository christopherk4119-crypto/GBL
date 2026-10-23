// Real job photos only, never stock. To add one: drop the file in /public/images/
// with a descriptive name, then add an entry here. Alt text: location + service + what's shown.
export type GalleryPhoto = { src: string; alt: string; caption: string; width: number; height: number };

export const GALLERY: GalleryPhoto[] = [
  {
    src: "/images/gbl-hvac-service-van-calgary.jpg",
    alt: "GBL HVAC LTD service van in a Calgary residential neighbourhood",
    caption: "Our service van on a residential call in Calgary",
    width: 1000,
    height: 750,
  },
  {
    src: "/images/gbl-hvac-van-24-7-emergency-service.jpg",
    alt: "Rear of the GBL HVAC LTD van showing 24/7 emergency service and phone number 403-970-6988",
    caption: "Heating, ventilation, AC and refrigeration. 24/7 emergency service",
    width: 348,
    height: 348,
  },
];
