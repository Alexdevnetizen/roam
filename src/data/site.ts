import type { NavItem, PhotoCredit, Principle, WorldClock } from "./types";

export const brand = {
  name: "ROAM",
  tagline: "The world, a little closer.",
  statement:
    "ROAM curates a small number of places we know well, and the hours worth having in them.",
  positioning: "Curated travel for the quietly adventurous.",
} as const;

export const navItems: readonly NavItem[] = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#escapes" },
  { label: "Our Story", href: "#story" },
];

export const primaryCta = { label: "Explore escapes", href: "#escapes" } as const;
export const closingCta = { label: "Find your escape", href: "#destinations" } as const;

export const worldClocks: readonly WorldClock[] = [
  { place: "Amalfi", timeZone: "Europe/Rome" },
  { place: "Marrakech", timeZone: "Africa/Casablanca" },
];

export const principles: readonly Principle[] = [
  {
    id: "chosen",
    title: "Thoughtfully chosen",
    body: "A short list, revised often. If we cannot say why a place is on it, it comes off.",
  },
  {
    id: "pace",
    title: "Travel at your pace",
    body: "An unhurried morning is not a gap in the itinerary. Around here it is the itinerary.",
  },
  {
    id: "local",
    title: "A local perspective",
    body: "Introduced by people who live there, not briefed by people who sell there.",
  },
  {
    id: "remember",
    title: "Made to remember",
    body: "We plan for what you will still recall a year later: the light, the table, the walk back.",
  },
];

export const elsewhere: readonly NavItem[] = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Pinterest", href: "https://www.pinterest.com/" },
  { label: "Are.na", href: "https://www.are.na/" },
];

/**
 * Photography is sourced from Wikimedia Commons. CC BY / CC BY-SA require
 * attribution, so these are listed in the footer's credits disclosure and in
 * public/images/CREDITS.md. Every file below is a cropped, colour-graded
 * derivative of the named original.
 */
export const photoCredits: readonly PhotoCredit[] = [
  { file: "hero — Amalfi Coast at dusk", author: "Bruno Rijsman", license: "CC BY-SA 2.0" },
  { file: "horizon band — Alpe di Siusi", author: "mendhak", license: "CC BY-SA 2.0" },
  { file: "philosophy — Val d'Orcia", author: "Repuli", license: "CC BY-SA 4.0" },
  { file: "dest-amalfi — Positano", author: "Cris Saur", license: "CC0" },
  { file: "dest-marrakech — Souk Haddadine lanterns", author: "Petar Milošević", license: "CC BY-SA 4.0" },
  { file: "dest-dolomites — a peak in the Dolomites", author: "Robert J Heath", license: "CC BY 2.0" },
  { file: "escape — terrace above Positano", author: "Rudolfo Kithera", license: "CC0" },
  { file: "escape — cairn, Dolomites", author: "Schi11", license: "CC BY-SA 4.0" },
  { file: "escape — boat off Positano", author: "Nan Palmero", license: "CC BY 2.0" },
  { file: "journal-marrakech — lamp maker", author: "Petar Milošević", license: "CC BY-SA 4.0" },
  { file: "journal-coast — open water", author: "miketnorton", license: "CC BY 2.0" },
  { file: "journal-slow — Val d'Orcia fields", author: "kuhnmi", license: "CC BY 2.0" },
  { file: "detail-amalfi — Amalfi by night", author: "Bruno Rijsman", license: "CC BY-SA 2.0" },
  { file: "detail-marrakech — Souk Semmarine", author: "DimiTalen", license: "CC0" },
  { file: "detail-dolomites — Lago di Braies", author: "Roberto Monti", license: "CC BY-SA 4.0" },
];

export const fictionNote =
  "ROAM is a fictional brand, built as a front-end design study. Nothing here is for sale, there is no mailing list, and nothing is connected to a booking service. Social links lead to the platforms themselves.";

export const copyright = `© ${new Date().getFullYear()} ROAM`;
