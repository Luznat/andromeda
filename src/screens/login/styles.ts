import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const FONTS = {
  headline: 'OpenSans_700Bold_Italic',
  body: 'OpenSans_400Regular',
  bodyMedium: 'OpenSans_500Medium',
  label: 'OpenSans_700Bold',
} as const;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
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
    maxWidth: 440,
    alignSelf: 'center',
  },
  ctaSectionGap: {
    marginTop: 32,
  },
  journeyCtaWrap: {
    alignSelf: 'center',
    maxWidth: '100%',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(233,195,73,0.1)',
    overflow: 'hidden',
  },
  journeyCtaTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  journeyCtaHit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    paddingVertical: 20,
    paddingHorizontal: 56,
  },
  journeyCtaPressed: {
    transform: [{ scale: 0.95 }],
  },
  journeyCtaLabel: {
    color: colors.secondary,
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    fontFamily: FONTS.label,
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
