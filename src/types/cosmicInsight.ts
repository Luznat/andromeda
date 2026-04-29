export type CosmicTransitAccent = 'secondary' | 'primary' | 'error';

export type CosmicTransitItem = {
  icon: string;
  label: string;
  description: string;
  accent: CosmicTransitAccent;
};

export type CosmicMoonBlock = {
  title: string;
  phaseLine: string;
  body: string;
};

export type CosmicOracleFeatured = {
  imageUri: string;
  eyebrow: string;
  title: string;
  quote: string;
  ctaLabel: string;
};

export type CosmicInsight = {
  id: string;
  heroImageUri: string;
  brandTitle?: string;
  heroKickerLeft?: string;
  heroKickerRight?: string;
  /** Legacy single-line kicker when split fields are omitted */
  kicker?: string;
  title: string;
  paragraphs: string[];
  horoscopeHeading?: string;
  moon?: CosmicMoonBlock;
  transits?: CosmicTransitItem[];
  oracleFeatured?: CosmicOracleFeatured;
};
