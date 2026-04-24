import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
    backgroundColor: colors.background,
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
  titleGap: {
    marginBottom: 16,
  },
  tagline: {
    color: colors.textSecondary,
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
    backgroundColor: colors.secondary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    shadowColor: colors.shadowGold,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  submitText: {
    color: colors.onSecondary,
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: FONTS.label,
  },
  submitIcon: {
    color: colors.onSecondary,
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
    backgroundColor: colors.dividerMuted,
  },
  footerIcon: {
    color: colors.footerIconMuted,
    fontSize: 16,
  },
  footerMotto: {
    fontSize: 10,
    letterSpacing: 2.4,
    textTransform: 'uppercase' as const,
    color: colors.footerMottoMuted,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FONTS.label,
  },
});
