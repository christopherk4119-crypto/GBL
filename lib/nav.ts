import type { MenuKey, MenuLink } from "./site";
import { SERVICES, getService } from "./services";

// Dropdown contents for the header. Built on the server so the client bundle
// only gets names and links, not page content.
const RESIDENTIAL = ["heating", "heating/24-hour-furnace-repair", "air-conditioning", "water-heaters", "ventilation", "maintenance-plans"];
const COMMERCIAL = [
  "rooftop-units",
  "refrigeration",
  "refrigeration/walk-in-coolers-freezers",
  "refrigeration/ice-machines",
  "ventilation/hood-fans-make-up-air",
  "maintenance-plans",
];

function links(slugs: string[]): MenuLink[] {
  return slugs.map((slug) => {
    const s = getService(slug);
    if (!s) throw new Error(`Unknown service in nav: ${slug}`);
    return { name: s.name, href: `/${s.slug}` };
  });
}

// Services menu: hubs in order, each followed by its spokes.
function allServices(): MenuLink[] {
  return SERVICES.filter((s) => !s.parent).flatMap((hub) => [
    { name: hub.name, href: `/${hub.slug}` },
    ...SERVICES.filter((s) => s.parent === hub.slug).map((s) => ({ name: s.name, href: `/${s.slug}`, sub: true })),
  ]);
}

export function navMenus(): Record<MenuKey, MenuLink[]> {
  return { services: allServices(), residential: links(RESIDENTIAL), commercial: links(COMMERCIAL) };
}
