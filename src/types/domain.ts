export type OracleSpecialty = 'Tarot' | 'Buzios' | 'Runes' | 'Astrology';

export type OracleAdvisor = {
  id: string;
  name: string;
  specialty: OracleSpecialty;
  rating: number;
  pricePerMinute: number;
  isOnline: boolean;
  bio: string;
};
