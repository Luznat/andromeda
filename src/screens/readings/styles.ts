import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { FONT_FAMILIES } from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.surfaceScrim,
  },
  scroll: {
    flex: 1,
    zIndex: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 108,
    gap: 20,
  },
  filterRow: {
    gap: 10,
    paddingRight: 8,
  },
  filterChip: {
    borderRadius: 999,
    backgroundColor: colors.surfaceMuted,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  filterChipActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  filterLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: FONT_FAMILIES.semiBold,
  },
  filterLabelActive: {
    color: colors.onSecondary,
  },
  cardList: {
    gap: 16,
  },
  card: {
    borderRadius: 18,
    backgroundColor: 'rgba(25, 30, 53, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(233, 195, 73, 0.15)',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 14,
    gap: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingIcon: {
    color: colors.secondary,
  },
  rating: {
    color: colors.secondary,
    fontWeight: '700',
    fontSize: 12,
    fontFamily: FONT_FAMILIES.bold,
  },
  specialty: {
    color: colors.secondaryFixed,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontFamily: FONT_FAMILIES.boldItalic,
    letterSpacing: 0.6,
  },
  title: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: FONT_FAMILIES.regular,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  investmentLabel: {
    color: colors.inputPlaceholder,
    fontSize: 10,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  price: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  priceDetail: {
    color: colors.inputPlaceholder,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FONT_FAMILIES.regular,
  },
  detailsButton: {
    backgroundColor: colors.primaryContainer,
    borderWidth: 1,
    borderColor: 'rgba(214,186,255,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
  },
  detailsButtonText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
    textTransform: 'uppercase',
  },
});
