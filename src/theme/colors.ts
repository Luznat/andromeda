export const colors = {
  background: '#0d1228',
  surfaceLowest: '#080d22',
  surfaceScrim: 'rgba(13, 18, 40, 0.88)',
  primaryContainer: '#2d0b5a',
  surface: '#191e35',
  surfaceLow: '#151a31',
  surfaceMuted: '#2f334b',
  outlineVariant: '#4a4550',
  primary: '#d6baff',
  secondary: '#e9c349',
  secondaryContainer: '#af8d11',
  secondaryFixed: '#ffe088',
  error: '#ffb4ab',
  textPrimary: '#dde1ff',
  textSecondary: '#c6c6c6',
  success: '#5ad7a4',
  onPrimary: '#3d1f6a',
  onSecondary: '#3c2f00',
  inputPlaceholder: '#958e9b',
  white: '#ffffff',
  textMask: '#000000',

  auroraTopViolet: 'rgba(45, 11, 90, 0.45)',
  auroraMidWash: 'rgba(13, 18, 40, 0.98)',
  deepAuroraWash1: 'rgba(13, 18, 40, 0.99)',
  deepAuroraWash2: 'rgba(18, 14, 45, 0.55)',
  scrimTopHeavy: 'rgba(8, 13, 34, 0.55)',
  scrimTopLight: 'rgba(8, 13, 34, 0.12)',
  scrimBottom: 'rgba(8, 13, 34, 0.96)',
  heroOverlayLeft: 'rgba(8, 13, 34, 0.94)',
  heroOverlayMid: 'rgba(20, 12, 48, 0.72)',
  heroOverlayRight: 'rgba(45, 11, 90, 0.35)',

  primaryGlowOrb: 'rgba(45, 11, 90, 0.12)',
  primaryGlowOrbSoft: 'rgba(45, 11, 90, 0.1)',

  chipSecondaryBorder: 'rgba(233,195,73,0.35)',
  chipSecondaryBg: 'rgba(233,195,73,0.08)',
  chipPrimaryBorder: 'rgba(214,186,255,0.35)',
  chipPrimaryBg: 'rgba(214,186,255,0.08)',

  ringSecondaryBorder: 'rgba(233, 195, 73, 0.2)',
  ringPrimaryBorder: 'rgba(214, 186, 255, 0.2)',

  shadowGold: 'rgba(233, 195, 73, 0.3)',
  textShadowGold: 'rgba(233, 195, 73, 0.6)',

  outlinedBorder: 'rgba(74, 69, 80, 0.35)',
  dividerMuted: 'rgba(74, 69, 80, 0.3)',
  shadowVioletDeep: 'rgba(45, 11, 90, 0.45)',
  shadowPrimaryHalo: 'rgba(214, 186, 255, 0.2)',

  footerIconMuted: 'rgba(198, 198, 198, 0.4)',
  footerMottoMuted: 'rgba(198, 198, 198, 0.3)',

  outlinePrimarySoft: 'rgba(214,186,255,0.4)',
  primaryOutlineFaint: 'rgba(214,186,255,0.25)',

  categoryIconTint: 'rgba(45,11,90,0.35)',
} as const;

export const gradients = {
  cosmicAuroraDefault: [colors.auroraTopViolet, colors.auroraMidWash, colors.background] as const,
  cosmicAuroraDeepTop: [
    colors.surfaceLowest,
    colors.deepAuroraWash1,
    colors.deepAuroraWash2,
    colors.background,
  ] as const,
  cosmicTopScrim: [colors.scrimTopHeavy, colors.scrimTopLight, 'transparent'] as const,
  cosmicBottomFade: [colors.scrimBottom, 'transparent'] as const,
  heroOverlay: [colors.heroOverlayLeft, colors.heroOverlayMid, colors.heroOverlayRight] as const,
  goldTitle: [colors.secondary, colors.secondaryFixed] as const,
} as const;
