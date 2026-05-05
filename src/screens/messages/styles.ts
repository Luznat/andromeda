import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { FONT_FAMILIES } from '../../theme/fonts';

const BOTTOM_BAR_CLEARANCE = 64;

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
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 28 + BOTTOM_BAR_CLEARANCE,
    maxWidth: 672,
    width: '100%',
    alignSelf: 'center',
    gap: 24,
  },
  headingBlock: {
    marginBottom: 4,
    gap: 6,
  },
  screenTitle: {
    color: colors.textPrimary,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.inputPlaceholder,
    fontSize: 11,
    lineHeight: 16,
    fontFamily: FONT_FAMILIES.medium,
    textTransform: 'uppercase',
    letterSpacing: 3.2,
    opacity: 0.72,
  },
  threadList: {
    gap: 16,
  },
  threadOuter: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  threadBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  threadTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  threadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  threadRowPressed: {
    opacity: 0.94,
  },
  avatarCol: {
    position: 'relative',
  },
  threadAvatarRing: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 2,
  },
  threadAvatarRingHighlight: {
    borderColor: colors.secondary,
  },
  threadAvatarRingMuted: {
    borderColor: 'rgba(214,186,255,0.2)',
  },
  threadAvatarImage: {
    width: '100%',
    height: '100%',
  },
  onlineDot: {
    position: 'absolute',
    right: -1,
    bottom: -1,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.background,
  },
  threadBody: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },
  threadTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 8,
  },
  threadName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
    color: colors.textPrimary,
  },
  threadNameHighlight: {
    color: colors.primary,
  },
  threadTime: {
    fontSize: 11,
    fontFamily: FONT_FAMILIES.medium,
    color: colors.inputPlaceholder,
  },
  threadTimeHighlight: {
    color: colors.secondary,
    opacity: 0.85,
  },
  threadPreview: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: FONT_FAMILIES.medium,
    color: colors.textSecondary,
  },
  threadPreviewMuted: {
    color: colors.inputPlaceholder,
    fontFamily: FONT_FAMILIES.regular,
  },
  badgeCol: {
    alignSelf: 'flex-start',
    paddingTop: 2,
    minWidth: 28,
    alignItems: 'flex-end',
  },
  unreadBadge: {
    minWidth: 22,
    height: 22,
    borderRadius: 999,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  unreadText: {
    color: colors.onSecondary,
    fontSize: 10,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
});
