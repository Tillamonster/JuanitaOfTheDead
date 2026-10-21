
import type { Character } from "./types";

export const lluvia: Character = {
  slug: "lluvia",
  name: "Lluvia",

  tagline: "LOYAL • COURAGEOUS • PROTECTOR",
  subtitle: "The heart of her community.",

  intro: `
Lluvia is a family friend of Juanita's from Mexico. They come from the same Mexican state, though its name remains unspecified.

Lluvia immigrated to the United States roughly ten years before Juanita. Now in her mid-30s, she has years of experience as an agricultural picker and understands the demands of field work and the people who depend on one another to get through it.

Loyal and resourceful, Lluvia has a deeply protective nature. She looks after Juanita and the people around her, offering care and steadiness when fear and uncertainty threaten to overwhelm them.

Where Juanita leads with courage and Hector solves problems through practical experience, Lluvia helps hold the group together. Her strength lies in recognizing that survival is not just about staying alive. It is also about caring for one another and preserving the bonds that make a community worth saving.
`,

  heroImage: "/images/episode1.png",

  personality: [
    {
      title: "Loyal",
      description:
        "Stands by her family, friends, and community, especially when circumstances become difficult.",
    },
    {
      title: "Protective",
      description:
        "Looks after the people around her and responds to their needs with practical, maternal care.",
    },
    {
      title: "Resourceful",
      description:
        "Draws on experience, intuition, and practical judgment to help people through difficult situations.",
    },
    {
      title: "Resilient",
      description:
        "Endures hardship without abandoning the people who depend on her.",
    },
  ],

  gear: [
    "Practical Field Clothing",
    "Work Boots",
    "Field Gloves",
    "Woven Shawl",
  ],

  narrative: [
    {
      title: "The Caregiver",
      description:
        "Provides practical and emotional care that helps the group endure hardship.",
    },
    {
      title: "The Protector",
      description:
        "Recognizes the needs and vulnerabilities of others and works to keep them safe.",
    },
    {
      title: "The Experienced Picker",
      description:
        "Brings years of agricultural field work and an understanding of the people who sustain the community.",
    },
    {
      title: "The Heart",
      description:
        "Reminds the group that survival means preserving human connections, not merely escaping danger.",
    },
  ],

  gallery: {
    expressionSheet: "/images/episode1.png",
  },

  profile: {
    age: "Mid-30s",
    origin: "Mexico",
    occupation: "Experienced Fieldworker",
    languages: "Spanish, English",
    role: "Caregiver • Protector • Community",
    status: "Core Character",
  },

  traits: [
    "Loyal",
    "Protective",
    "Resourceful",
    "Resilient",
  ],

  symbols: [
    "Shawl",
    "Hands",
    "Harvest",
    "Home",
  ],
};
