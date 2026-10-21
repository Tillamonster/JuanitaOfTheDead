
import type { Character } from "./types";

export const hector: Character = {
  slug: "hector",
  name: "Hector",

  tagline: "LOCAL • STEADFAST • PROVIDER",
  subtitle: "The backbone of his community.",

  intro: `
Hector is a man of hard work and quiet strength who carries responsibility without complaint.

He came to the United States from Mexico as a young man and began his working life as an agricultural field picker. Over the years, he gained experience as a heavy-equipment operator and mechanic, advanced to foreman, and became a field supervisor.

After years of migrant field work in Santa Barbara and other locations, Hector settled in the Watsonville and Pajaro Valley area. His experience has given him practical knowledge of the work, the equipment, the land, and the people who depend on it.

Dependable and disciplined, Hector believes in keeping his promises and providing for his family. He is resourceful when problems arise and unyielding when something important is at stake. He hopes to preserve what he has built and leave something lasting for future generations.
`,

  heroImage: "/images/episode2.png",

  personality: [
    {
      title: "Dependable",
      description:
        "Takes responsibility seriously and strives to keep his promises.",
    },
    {
      title: "Disciplined",
      description:
        "Relies on experience, hard work, and steady judgment rather than shortcuts.",
    },
    {
      title: "Resourceful",
      description:
        "Draws on his mechanical knowledge and practical experience to solve problems.",
    },
    {
      title: "Unyielding",
      description:
        "Stands firm when his family, responsibilities, or principles are at stake.",
    },
  ],

  gear: [
    "Work Jacket",
    "Jeans",
    "Work Boots",
    "Mechanic's Tools",
    "Heavy-Equipment Experience",
  ],

  narrative: [
    {
      title: "The Local",
      description:
        "Knows the Pajaro Valley through years of work and life in the area.",
    },
    {
      title: "The Provider",
      description:
        "Measures success by his ability to care for his family and keep his commitments.",
    },
    {
      title: "The Problem-Solver",
      description:
        "Brings practical mechanical and agricultural knowledge to difficult situations.",
    },
    {
      title: "The Steadfast",
      description:
        "Represents endurance, responsibility, and the determination to protect what matters.",
    },
  ],

  gallery: {
    expressionSheet: "/images/episode2.png",
  },

  profile: {
    age: "Mid-50s",
    origin: "Mexico",
    occupation: "Field Supervisor",
    languages: "Spanish, English",
    role: "Local • Steadfast • Provider",
    status: "Core Character",
  },

  traits: [
    "Dependable",
    "Disciplined",
    "Resourceful",
    "Unyielding",
  ],

  symbols: [
    "Tractor",
    "Tools",
    "Fields",
    "Train",
  ],
};
