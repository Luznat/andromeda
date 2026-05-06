import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
} from '@expo-google-fonts/open-sans';
import { SpaceGrotesk_500Medium, SpaceGrotesk_600SemiBold } from '@expo-google-fonts/space-grotesk';

/**
 * Todas as fontes carregadas na raiz (`App.tsx` / `useFonts`).
 * Mantém o nome histórico; inclui também Space Grotesk (marca).
 */
export const OPEN_SANS_USE_FONTS = {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
};

/** Alias só para código que preferir nome neutro */
export const APP_USE_FONTS = OPEN_SANS_USE_FONTS;

export const FONT_FAMILIES = {
  regular: 'OpenSans_400Regular',
  medium: 'OpenSans_500Medium',
  semiBold: 'OpenSans_600SemiBold',
  bold: 'OpenSans_700Bold',
  boldItalic: 'OpenSans_700Bold_Italic',
  brand: 'SpaceGrotesk_500Medium',
  brandEmphasis: 'SpaceGrotesk_600SemiBold',
} as const;
