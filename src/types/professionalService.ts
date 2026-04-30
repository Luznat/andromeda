import type { ImageSourcePropType } from 'react-native';

export type ProfessionalService = {
  id: string;
  professionalName: string;
  specialty: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  duration: string;
  rating: string;
  image: string;
  profileImageSource?: ImageSourcePropType;
  tags: string[];
  isPremium?: boolean;
};
