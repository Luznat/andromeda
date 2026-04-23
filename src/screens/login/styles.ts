import { StyleSheet } from 'react-native';

const surface = '#0d1228';
const primary = '#d6baff';
const secondary = '#e9c349';
const onSurface = '#dde1ff';
const tertiary = '#c6c6c6';
const outline = '#958e9b';
const outlineVariant = '#4a4550';
const onSecondary = '#3c2f00';
const onPrimary = '#3d1f6a';
const surfaceContainer = '#191e35';
const surfaceContainerHighest = '#2f334b';

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
  formSection: {
    width: '100%',
    maxWidth: 320,
  },
  constellationHint: {
    color: 'rgba(198, 198, 198, 0.6)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: FONTS.body,
  },
  form: {
    backgroundColor: surfaceContainer,
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: outlineVariant,
    shadowColor: primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 40,
    elevation: 4,
  },
  formSectionGap: {
    marginTop: 32,
  },
  label: {
    color: onSurface,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
    fontFamily: FONTS.label,
  },
  input: {
    backgroundColor: surfaceContainerHighest,
    color: onSurface,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: outline,
    fontSize: 15,
    fontFamily: FONTS.body,
  },
  profileRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  profileButton: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: surfaceContainerHighest,
    borderWidth: 1,
    borderColor: outlineVariant,
    paddingVertical: 12,
    alignItems: 'center',
  },
  profileButtonActive: {
    backgroundColor: primary,
    borderColor: 'rgba(214, 186, 255, 0.5)',
  },
  profileText: {
    color: tertiary,
    fontWeight: '600',
    fontFamily: FONTS.label,
  },
  profileTextActive: {
    color: onPrimary,
  },
  submitButton: {
    marginTop: 14,
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
  submitButtonDisabled: {
    opacity: 0.45,
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
