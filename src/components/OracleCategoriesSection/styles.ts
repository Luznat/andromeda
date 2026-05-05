import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { FONT_FAMILIES } from '../../theme/fonts';

type CategoryPalette = {
  cardBackground: string;
  cardBorder: string;
  iconBackground: string;
  iconBorder: string;
  iconColor: string;
};

type CategoryThemeMap = Record<string, CategoryPalette> & { fallback: CategoryPalette };

export const themedCategoryPalette: Record<'home' | 'search', CategoryThemeMap> = {
  home: {
    fallback: {
      cardBackground: colors.surfaceLow,
      cardBorder: colors.outlineVariant,
      iconBackground: colors.categoryIconTint,
      iconBorder: 'transparent',
      iconColor: colors.primary,
    },
  },
  search: {
    '1': {
      cardBackground: 'rgba(45, 11, 90, 0.45)',
      cardBorder: 'rgba(214,186,255,0.55)',
      iconBackground: 'rgba(214,186,255,0.16)',
      iconBorder: 'rgba(214,186,255,0.65)',
      iconColor: colors.secondaryFixed,
    },
    '2': {
      cardBackground: 'rgba(175, 141, 17, 0.22)',
      cardBorder: 'rgba(233,195,73,0.55)',
      iconBackground: 'rgba(233,195,73,0.18)',
      iconBorder: 'rgba(233,195,73,0.65)',
      iconColor: colors.secondaryFixed,
    },
    '3': {
      cardBackground: 'rgba(28, 45, 92, 0.42)',
      cardBorder: 'rgba(151,182,255,0.5)',
      iconBackground: 'rgba(151,182,255,0.16)',
      iconBorder: 'rgba(151,182,255,0.6)',
      iconColor: '#b9cbff',
    },
    '4': {
      cardBackground: 'rgba(36, 74, 64, 0.35)',
      cardBorder: 'rgba(108,214,179,0.48)',
      iconBackground: 'rgba(108,214,179,0.16)',
      iconBorder: 'rgba(108,214,179,0.55)',
      iconColor: '#84e7c4',
    },
    fallback: {
      cardBackground: 'rgba(25, 30, 53, 0.78)',
      cardBorder: colors.secondary,
      iconBackground: 'rgba(233,195,73,0.14)',
      iconBorder: 'rgba(233,195,73,0.6)',
      iconColor: colors.secondaryFixed,
    },
  },
};

export const styles = StyleSheet.create({
  sectionBlock: {
    gap: 14,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  categoryCard: {
    width: '48%',
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
  },
  categoryIconWrap: {
    width: 62,
    height: 62,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  categoryIcon: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
    textShadowColor: colors.textShadowGold,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  categoryLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
    letterSpacing: 0.5,
  },
});
