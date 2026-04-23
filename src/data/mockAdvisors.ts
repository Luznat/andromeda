import { OracleAdvisor } from '../types/domain';

export const mockAdvisors: OracleAdvisor[] = [
  {
    id: '1',
    name: 'Luna Mirela',
    specialty: 'Tarot',
    rating: 4.9,
    pricePerMinute: 4.5,
    isOnline: true,
    bio: 'Focused on love, personal cycles, and difficult decisions.',
  },
  {
    id: '2',
    name: 'Caio Oxossi',
    specialty: 'Buzios',
    rating: 4.7,
    pricePerMinute: 3.8,
    isOnline: true,
    bio: 'Spiritual guidance for family, work, and protection paths.',
  },
  {
    id: '3',
    name: 'Freya North',
    specialty: 'Runes',
    rating: 4.8,
    pricePerMinute: 4.2,
    isOnline: false,
    bio: 'Rune readings for self-knowledge and life transition periods.',
  },
];
