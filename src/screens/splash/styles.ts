import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { FONT_FAMILIES } from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    zIndex: 5,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  brandIcon: {
    color: colors.primary,
    fontSize: 32,
  },
  brand: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    letterSpacing: 2,
    fontFamily: FONT_FAMILIES.boldItalic,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
    marginBottom: 12,
    fontFamily: FONT_FAMILIES.bold,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 36,
    fontFamily: FONT_FAMILIES.regular,
  },
  primaryButton: {
    backgroundColor: colors.secondary,
    borderRadius: 999,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 8,
  },
  primaryButtonText: {
    color: colors.onSecondary,
    fontWeight: '700',
    fontSize: 17,
    fontFamily: FONT_FAMILIES.bold,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.outlinePrimarySoft,
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 15,
    fontFamily: FONT_FAMILIES.semiBold,
  },
});
