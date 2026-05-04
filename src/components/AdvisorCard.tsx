import { StyleSheet, Text, View } from 'react-native';
import { OracleAdvisor } from '../types/domain';
import { colors } from '../theme/colors';
import { FONT_FAMILIES } from '../theme/fonts';

type AdvisorCardProps = {
  advisor: OracleAdvisor;
};

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{advisor.name}</Text>
        <Text style={styles.status}>{advisor.isOnline ? 'Online' : 'Offline'}</Text>
      </View>
      <Text style={styles.specialty}>{advisor.specialty}</Text>
      <Text style={styles.bio}>{advisor.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.detail}>Avaliacao: {advisor.rating.toFixed(1)}</Text>
        <Text style={styles.detail}>${advisor.pricePerMinute.toFixed(2)}/min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: FONT_FAMILIES.bold,
  },
  status: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 12,
    fontFamily: FONT_FAMILIES.semiBold,
  },
  specialty: {
    color: colors.primary,
    fontWeight: '600',
    fontFamily: FONT_FAMILIES.semiBold,
  },
  bio: {
    color: colors.textSecondary,
    lineHeight: 20,
    fontFamily: FONT_FAMILIES.regular,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    color: colors.textPrimary,
    fontSize: 13,
    fontFamily: FONT_FAMILIES.regular,
  },
});
