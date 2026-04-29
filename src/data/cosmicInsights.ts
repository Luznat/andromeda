import type { CosmicInsight } from '../types/cosmicInsight';

const HERO_IMMERSIVE_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCgVap3vxJFynlWXLEjuB8Yvy3WO74dKNqLSJPLE55ylhUKZt7mN_6dv3mXSYzvxRPX4USgp80yLKwWXPiuRBUTINr9xnaPqautPAlYSWPhUeTZsyCOQ_3lTZLaSO4famZZAf6VAqZyQ42YNhO_BSSL-cxq2OoZEOUHqKu3c4INURJtE1HFpKONWRK7r9SWSL3CoItL3hlCOqeYtUSccfnXOgOsLKslF5t0MzIoW2UsNxfHILszoYbJK7MwK1VhIAEx29-6QH47dm4';

const ORACLE_CARD_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB7yJ3PyVXLtEiCNMveVOwuqX1sX1zfGHujeIoBRl8jOIpT5SfaFlHGfL9OYbLsA2W7lqlsdrkMTYXCOPZ28MuHPdKgSuF4NxFP36bVkSKf6sHgtUlYb5WBEE1sOtp__AOGPO1wPOJuyUISiuN5ugIqTXLKF0PEXqPrtM7sCZ-Z5R-rRVL6S9doZfnhEeVGDmd8JxtKoAQIncr8QMqP09LerfDCbiLMQSOGiThWr1n4E7dqpyhBPphtklNcW1msjLJJPgSLpo_H4OU';

const COSMIC_INSIGHTS: CosmicInsight[] = [
  {
    id: 'home-daily',
    heroImageUri: HERO_IMMERSIVE_URI,
    brandTitle: 'Cosmic Nocturne',
    heroKickerLeft: 'Sol em Escorpião',
    heroKickerRight: '24 de Outubro',
    title: 'O Caminho do Dia',
    horoscopeHeading: 'Horóscopo do Dia',
    paragraphs: [
      'Hoje, os astros alinham-se num trígono de água que convida à introspecção profunda. A energia de Escorpião permeia cada interação, revelando verdades que antes estavam ocultas sob a superfície. É um momento de regeneração; deixe que as velhas versões de si mesmo se dissolvam para dar espaço à nova aurora.',
      'A intuição está em seu ápice. Confie nos sussurros do seu espírito enquanto navega por decisões complexas. A clareza não virá da lógica, mas do sentir.',
    ],
    moon: {
      title: 'Influência da Lua',
      phaseLine: 'Lua Crescente em Aquário',
      body:
        'A fase atual impulsiona a inovação emocional. Aquário traz um ar de desapego saudável, permitindo que você observe seus sentimentos sob uma ótica racional e libertadora. Ideal para projetos em grupo e revoluções pessoais.',
    },
    transits: [
      {
        icon: 'favorite',
        label: 'Amor (Vênus)',
        description: 'Vênus em Sagitário pede aventura e liberdade nas relações.',
        accent: 'secondary',
      },
      {
        icon: 'chat',
        label: 'Comunicação (Mercúrio)',
        description: 'Pensamento analítico aguçado com Mercúrio em Virgem.',
        accent: 'primary',
      },
      {
        icon: 'bolt',
        label: 'Ação (Marte)',
        description: 'Energia focada para finalizar projetos pendentes.',
        accent: 'error',
      },
    ],
    oracleFeatured: {
      imageUri: ORACLE_CARD_URI,
      eyebrow: 'O Conselho do Oráculo',
      title: 'A Estrela',
      quote:
        'A esperança renasce onde a fé é plantada. Hoje, o universo te pede para descansar na certeza de que você é guiado por forças benevolentes. Deixe sua luz brilhar sem medo, pois você é um farol para os outros.',
      ctaLabel: 'Compartilhar Brilho',
    },
  },
];

const byId = new Map(COSMIC_INSIGHTS.map((item) => [item.id, item]));

export function getCosmicInsightById(id: string): CosmicInsight | undefined {
  return byId.get(id);
}
