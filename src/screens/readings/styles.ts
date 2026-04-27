import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
  },
  sectionAction: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
  cardList: {
    gap: 14,
  },
  card: {
    borderRadius: 24,
    backgroundColor: colors.surfaceLow,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    padding: 14,
    gap: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    color: colors.secondary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  price: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 2,
  },
  metaChip: {
    color: colors.textSecondary,
    fontSize: 11,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: colors.primaryOutlineFaint,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  rating: {
    color: colors.secondary,
    fontWeight: '700',
    fontSize: 12,
  },
});
