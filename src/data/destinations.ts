import type { Destination } from "./types";

export const destinations: readonly Destination[] = [
  {
    id: "amalfi",
    name: "Amalfi Coast",
    region: "Campania, Italy",
    coordinates: "40.6340° N · 14.6027° E",
    summary:
      "Lemon groves stacked above a sea the colour of old glass. Best walked in the hours when everyone else is at lunch.",
    intro:
      "The coast is a vertical place. Everything worth having — the shade, the view, the table with the good bread — is either above you or below you, and none of it is on the main road.",
    notes: [
      "Come in late September or May. The light softens, the ferries thin out, and the villages return to the pace they keep for the other ten months of the year.",
      "Walk the Path of the Gods early, before the day gets warm and the path gets busy. Start high and finish at the water; the descent is the reward and the swim at the end is the proof.",
      "Swim in the morning. The sea is calmest before nine and the beach clubs have not yet arranged themselves. By noon you will want shade, a long lunch, and nothing else.",
    ],
    fieldNotes: [
      { label: "Arrive", value: "Late May or late September" },
      { label: "Walk", value: "Above the road, before eight" },
      { label: "Stay", value: "High in the village, never on the coast road" },
    ],
    plate: {
      src: "/images/dest-amalfi.jpg",
      alt: "Pastel houses stacked on the cliffside of Positano above the Tyrrhenian Sea.",
      width: 1800,
      height: 1200,
    },
    detailPlate: {
      src: "/images/detail-amalfi.jpg",
      alt: "The floodlit piazza of Amalfi at night, empty tables under a stone arcade.",
      width: 1400,
      height: 933,
    },
  },
  {
    id: "marrakech",
    name: "Marrakech",
    region: "Marrakech-Safi, Morocco",
    coordinates: "31.6295° N · 7.9811° W",
    summary:
      "A city of courtyards and thresholds. Learn three streets and let the rest of the medina stay a mystery.",
    intro:
      "Marrakech rewards attention rather than coverage. The medina is not a maze to be solved; it is a set of habits, and it opens once you stop trying to reach the other side.",
    notes: [
      "Come in March or November. In between, the heat settles in for the afternoon and the city moves indoors, which is its own pleasure but a different trip.",
      "Souk Haddadine is where the lanterns are made: white metal, small hammers, and men who have been doing this for decades. Ask before you photograph. The answer is usually yes, and it is a better photograph for it.",
      "Spend the middle of the day in a courtyard. A riad's whole logic is that the noise stays outside and the light comes straight down; you will understand the city faster there than anywhere else.",
    ],
    fieldNotes: [
      { label: "Arrive", value: "March, while it is still cool" },
      { label: "Walk", value: "Haddadine, and the streets east of it" },
      { label: "Eat", value: "Wherever the bread is still warm" },
    ],
    plate: {
      src: "/images/dest-marrakech.jpg",
      alt: "Hanging brass and glass lanterns glowing in a workshop in the Marrakech medina.",
      width: 1200,
      height: 1500,
    },
    detailPlate: {
      src: "/images/detail-marrakech.jpg",
      alt: "A covered souk in Marrakech, shoppers between stalls of textiles and leather.",
      width: 1400,
      height: 933,
    },
  },
  {
    id: "dolomites",
    name: "The Dolomites",
    region: "Cortina d'Ampezzo, Italy",
    coordinates: "46.5405° N · 12.1357° E",
    summary:
      "Pale rock that turns rose at dusk. Days that begin in meadow and end above the cloud line.",
    intro:
      "Nowhere else makes scale feel this personal. The mountains are close enough to read, and the walking is less about distance than about the hour you choose to start.",
    notes: [
      "Late June gives you meadows in full flower; late September gives you larch, empty huts and air so clear the rock looks drawn. Both are better than August.",
      "Start early and stop often. The huts exist for exactly this — a plate of dumplings, a bench facing the wrong way, and no reason to move for an hour.",
      "Stay above the treeline once, even if only for a night. The light at the end of a long day up there is the reason people keep coming back.",
    ],
    fieldNotes: [
      { label: "Arrive", value: "Late June, or late September for the larch" },
      { label: "Walk", value: "Anywhere above the treeline, in the morning" },
      { label: "Stay", value: "In a hut, once, at least" },
    ],
    plate: {
      src: "/images/dest-dolomites.jpg",
      alt: "A pale limestone peak in the Dolomites rising above cloud, late snow along the ridge.",
      width: 1800,
      height: 1200,
    },
    detailPlate: {
      src: "/images/detail-dolomites.jpg",
      alt: "Lago di Braies seen from above, green water curving around a white shoreline.",
      width: 1400,
      height: 933,
    },
  },
];
