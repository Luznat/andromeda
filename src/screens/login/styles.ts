import { StyleSheet } from 'react-native';

const surface = '#0d1228';
const secondary = '#e9c349';
const tertiary = '#c6c6c6';
const onSecondary = '#3c2f00';

export const FONTS = {
  // Chaves batem com useFonts(…)
  headline: 'NotoSerif_700Bold_Italic',
  body: 'Manrope_400Regular',
  bodyMedium: 'Manrope_500Medium',
  label: 'Manrope_700Bold',
} as const;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: surface,
  },
  scroll: {
    flex: 1,
    zIndex: 5,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 40,
    maxWidth: 896,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  main: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 896,
    justifyContent: 'center',
  },
  logoBlock: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 48,
  },
  ringWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  ringOuter: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(233, 195, 73, 0.2)',
  },
  ringInner: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214, 186, 255, 0.2)',
  },
  cosmicIcon: {
    color: secondary,
    textAlign: 'center',
    textShadowColor: 'rgba(233, 195, 73, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  titleGap: {
    marginBottom: 16,
  },
  tagline: {
    color: tertiary,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 3,
    lineHeight: 28,
    opacity: 0.8,
    maxWidth: 448,
    width: '100%',
    fontFamily: FONTS.bodyMedium,
  },
  ctaSection: {
    width: '100%',
    maxWidth: 320,
    alignSelf: 'center',
  },
  ctaSectionGap: {
    marginTop: 32,
  },
  submitButton: {
    borderRadius: 999,
    backgroundColor: secondary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    shadowColor: 'rgba(233, 195, 73, 0.3)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  submitText: {
    color: onSecondary,
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: FONTS.label,
  },
  submitIcon: {
    color: onSecondary,
    fontSize: 22,
    fontWeight: '700',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    paddingBottom: 40,
  },
  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 16,
  },
  footerDivider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(74, 69, 80, 0.3)',
  },
  footerIcon: {
    color: 'rgba(198, 198, 198, 0.4)',
    fontSize: 16,
  },
  footerMotto: {
    fontSize: 10,
    letterSpacing: 2.4,
    textTransform: 'uppercase' as const,
    color: 'rgba(198, 198, 198, 0.3)',
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FONTS.label,
  },
});
