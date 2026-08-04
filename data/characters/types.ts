export interface PersonalityTrait {
  title: string;
  description: string;
}

export interface NarrativeRole {
  title: string;
  description: string;
}

export interface CharacterGallery {
  expressionSheet: string;
}

export interface CharacterProfile {
  age: string;
  origin: string;
  occupation: string;
  languages: string;
  role: string;
  status: string;
}

export interface Character {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  intro: string;

  heroImage: string;

  personality: PersonalityTrait[];

  gear: string[];

  narrative: NarrativeRole[];

  gallery: CharacterGallery;

  profile: CharacterProfile;

  traits: string[];

  symbols: string[];
}