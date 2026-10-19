
import type { Character } from "./types";

export const juanita: Character = {
  slug: "juanita",
  name: "Juanita",
  tagline: "MIRA • ESCUCHA • NO MUERAS",
  subtitle: "Watch. Listen. Don't die.",

  intro: `
Juanita came north from Mexico looking for opportunity and a chance to build a better life.

In the fields of the Pajaro Valley, she found demanding field work, a community, and the beginnings of a place to belong. The labor hardened her hands and taught her what her body could endure. It also gave her a practical understanding of effort, limits, and survival.

When the world begins to unravel, Juanita must draw on more than physical toughness. She must learn to observe, make difficult decisions, act with courage, and grow from her mistakes.

Her greatest challenge is not simply to survive. It is to remain human in a world that increasingly rewards those who abandon their humanity.
`,

  heroImage: "/images/characters/juanita/hero.png",

  personality: [
    {
      title: "Assertive",
      description:
        "Finds the courage to make decisions, speak up, and act even when uncertain.",
    },
    {
      title: "Resourceful",
      description:
        "Finds creative solutions and uses what she has rather than defaulting to force.",
    },
    {
      title: "Protective",
      description:
        "Cares deeply about the people around her and looks out for them.",
    },
    {
      title: "Resilient",
      description:
        "Endures hardship and adapts without surrendering her humanity.",
    },
  ],

  gear: [
    "🧥 Hoodie",
    "🧢 Trucker's Hat",
    "🧣 Bandana",
    "👖 Jeans",
    "🥾 Boots",
  ],

  narrative: [
    {
      title: "Observe",
      description:
        "Understands people, places, patterns, and changes before reacting.",
    },
    {
      title: "Decide",
      description:
        "Makes choices despite uncertainty and accepts responsibility for them.",
    },
    {
      title: "Act",
      description:
        "Turns judgment into action through courage, creativity, and cooperation.",
    },
    {
      title: "Learn",
      description:
        "Grows through mistakes, experience, and the wisdom of others.",
    },
  ],

  gallery: {
    expressionSheet:
      "/images/characters/juanita/gallery/expression-sheet-v1.png",
  },

  profile: {
    age: "17",
    origin: "Mexico",
    occupation: "Fieldworker",
    languages: "Spanish, developing English",
    role: "Observer • Navigator • Protector",
    status: "Protagonist",
  },

  traits: [
    "Assertive",
    "Resourceful",
    "Protective",
    "Resilient",
  ],

  symbols: [
    "Strawberry",
    "Artichoke",
    "Bell",
    "Map",
  ],
};
