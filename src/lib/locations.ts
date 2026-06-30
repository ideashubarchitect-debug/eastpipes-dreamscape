/**
 * East Pipes physical locations shown on the Contact page.
 *
 * NOTE: The Head Office pin is provisional — it uses the official East Pipes
 * head office address (2nd Industrial City, Dammam). The client will confirm /
 * send an updated pin, after which `mapsUrl` / `embedUrl` should be replaced.
 *
 * The Spiral Plant and Coating Plant intentionally share the same location
 * (East Pipes Integrated Company for Industry, Street 86, Dammam 34333).
 */

export type Location = {
  id: string;
  name: string;
  kind: string;
  address: string[];
  /** Opens in a new tab on click. */
  mapsUrl: string;
  /** Embedded map iframe source. */
  embedUrl: string;
};

// Shared coordinates for the manufacturing complex (Spiral + Coating plants).
const PLANT_COORDS = "26.2471428,49.9653112";
const PLANT_PLACE =
  "https://www.google.com/maps/place/East+Pipes+Integrated+company+for+Industry/@26.2471428,49.9627363,17z/";

export const LOCATIONS: Location[] = [
  {
    id: "head-office",
    name: "Head Office",
    kind: "Headquarters",
    address: [
      "East Pipes Integrated Company",
      "Street No 89, 2nd Industrial City",
      "Dammam 31483, Kingdom of Saudi Arabia",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=East+Pipes+Integrated+Company+2nd+Industrial+City+Dammam",
    embedUrl:
      "https://www.google.com/maps?q=East+Pipes+Integrated+Company+2nd+Industrial+City+Dammam&output=embed",
  },
  {
    id: "spiral-plant",
    name: "Spiral Plant",
    kind: "Manufacturing",
    address: [
      "East Pipes Integrated Company for Industry",
      "Street 86, Dammam 34333",
      "Kingdom of Saudi Arabia",
    ],
    mapsUrl: PLANT_PLACE,
    embedUrl: `https://www.google.com/maps?q=${PLANT_COORDS}&output=embed`,
  },
  {
    id: "coating-plant",
    name: "Coating Plant",
    kind: "Manufacturing",
    address: [
      "East Pipes Integrated Company for Industry",
      "Street 86, Dammam 34333",
      "Kingdom of Saudi Arabia",
    ],
    mapsUrl: PLANT_PLACE,
    embedUrl: `https://www.google.com/maps?q=${PLANT_COORDS}&output=embed`,
  },
];
