import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CosmicLogoMark } from './CosmicLogoMark';
import { colors } from '../theme/colors';
import { FONT_FAMILIES } from '../theme/fonts';

const HEADER_BRAND_TITLE = 'Andrômeda';

type CosmicHeaderProps = {
  profileInitials?: string;
  onBack?: () => void;
  onSharePress?: () => void;
};

export function CosmicHeader({ profileInitials = 'VS', onBack, onSharePress }: CosmicHeaderProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.leftCluster}>
        {onBack ? (
          <Pressable style={styles.backButton} onPress={onBack} accessibilityLabel="Voltar">
            <MaterialIcons name="arrow-back-ios-new" size={18} color={colors.textSecondary} />
          </Pressable>
        ) : null}
        <View style={styles.brandRow}>
          <CosmicLogoMark size={26} iconScale={0.46} ringInset={0.2} />
          <Text style={styles.brandText} numberOfLines={1}>
            {HEADER_BRAND_TITLE}
          </Text>
        </View>
      </View>
      <View style={styles.topActions}>
        {onSharePress ? (
          <Pressable onPress={onSharePress} accessibilityLabel="Compartilhar">
            <MaterialIcons name="share" size={20} style={styles.topAction} />
          </Pressable>
        ) : null}
        <MaterialIcons name="notifications-none" size={20} style={styles.topAction} />
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{profileInitials}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  leftCluster: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
    minWidth: 0,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 1,
    minWidth: 0,
  },
  brandText: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'italic',
    letterSpacing: 2,
    fontFamily: FONT_FAMILIES.boldItalic,
  },
  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  topAction: {
    color: colors.textSecondary,
    fontSize: 18,
  },
  avatarPlaceholder: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.surfaceMuted,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  avatarText: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 12,
    fontFamily: FONT_FAMILIES.bold,
  },
});
