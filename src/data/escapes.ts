import type { Escape } from "./types";

export const escapes: readonly Escape[] = [
  {
    id: "slow-mornings",
    title: "Slow Mornings",
    tagline: "Breakfast that runs into noon, and a walk with no start time.",
    meta: "Unhurried · half days",
    description:
      "The first half of every day is left deliberately empty. A terrace, a second coffee, a book you keep not finishing — and a walk that begins whenever it begins.",
    practice: [
      { label: "Pace", value: "One thing planned, two things possible" },
      { label: "Hours", value: "Before nine, and after lunch" },
      { label: "Setting", value: "A terrace, a balcony, a kitchen worth sitting in" },
    ],
    plate: {
      src: "/images/escape-slow-mornings.jpg",
      alt: "Bougainvillea spilling over a white balustrade above the sea at Positano.",
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "into-the-wild",
    title: "Into the Wild",
    tagline: "Long approaches, a hut lunch, and quiet above the treeline.",
    meta: "On foot · full days",
    description:
      "Distance is the point, not the achievement. We plan routes that earn their views, build in time at the top, and keep the descent for the golden hour.",
    practice: [
      { label: "Pace", value: "Full days, deliberately unambitious mileage" },
      { label: "Hours", value: "Start in the dark, finish before dusk" },
      { label: "Setting", value: "Above the treeline, with a hut at the midpoint" },
    ],
    plate: {
      src: "/images/escape-into-the-wild.jpg",
      alt: "A boy in a rucksack adding a stone to a cairn on a mountainside in the Dolomites.",
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "coastal-living",
    title: "Coastal Living",
    tagline: "Swim before the boats are out, eat whatever came in that morning.",
    meta: "Tide-led · open water",
    description:
      "Days organised around water rather than by the clock. Early swims, a long table at two, and the particular appetite that only comes from salt and walking.",
    practice: [
      { label: "Pace", value: "Tide-led, weather-permitting, forgiving" },
      { label: "Hours", value: "In the water before nine, again at six" },
      { label: "Setting", value: "A village with a harbour and a swimming rock" },
    ],
    plate: {
      src: "/images/escape-coastal-living.jpg",
      alt: "Small boats moored in a sheltered bay below the cliffs of the Amalfi Coast.",
      width: 1600,
      height: 1200,
    },
  },
];
