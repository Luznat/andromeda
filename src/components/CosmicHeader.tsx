import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CosmicLogoMark } from './CosmicLogoMark';
import { colors } from '../theme/colors';

const HEADER_BRAND_TITLE = 'Andrômeda';

type CosmicHeaderProps = {
  profileInitials?: string;
};

export function CosmicHeader({ profileInitials = 'VS' }: CosmicHeaderProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.brandRow}>
        <CosmicLogoMark size={26} iconScale={0.46} ringInset={0.2} />
        <Text style={styles.brandText}>{HEADER_BRAND_TITLE}</Text>
      </View>
      <View style={styles.topActions}>
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
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandText: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'italic',
    letterSpacing: 2,
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
  },
});
