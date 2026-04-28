import type { ComponentProps } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { colors } from '../../theme/colors';
import { styles } from './styles';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

const AVATAR_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAXCh_shIcmsdsSS9PpSUu9uzCfeK4MYZ06xVDEymUrYza9gSBcieGW_VKeE1skeBzICzhLtRNEay4-GtWhUVW8q0ZtPymzk473upcYzkID4lAkCdo7SrkdtrJk7K-yl9cF7zNTgzx0arLjW7rI6IL2uoFdMRa9wj_YcSkj_f82A_oqbsDIthKqSXMQWY6VFk87ITPRquxUhaYGFb1i3cqild9E0e68sB4wGrLoWJ3kqinwKqIxHSKwEMlD07rJq5zZWdyusndzRIg';

const menuItems: { id: string; label: string; icon: MaterialIconName }[] = [
  { id: '1', label: 'Meu Mapa Astral', icon: 'auto-awesome' },
  { id: '2', label: 'Historico de Leituras', icon: 'history' },
  { id: '3', label: 'Metodos de Pagamento', icon: 'account-balance-wallet' },
  { id: '4', label: 'Configuracoes de Privacidade', icon: 'security' },
  { id: '5', label: 'Central de Ajuda', icon: 'support-agent' },
];

type ProfileScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
  onLogout?: () => void;
};

export function ProfileScreen({ activeTab = 'profile', onTabChange, onLogout }: ProfileScreenProps) {
  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <CosmicHeader />

        <View style={styles.profileHeader}>
          <View style={styles.avatarFrameOuter}>
            <LinearGradient
              colors={[colors.secondary, colors.secondaryContainer, colors.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarFrameGradient}
            >
              <View style={styles.avatarInnerRing}>
                <Image source={{ uri: AVATAR_URI }} style={styles.avatarImage} resizeMode="cover" />
              </View>
            </LinearGradient>
            <View style={styles.avatarBadge}>
              <MaterialIcons name="stars" size={16} color={colors.onSecondary} />
            </View>
          </View>

          <Text style={styles.displayName}>Ariel Estelar</Text>

          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusPillText}>Conexao Astral: Ascendente</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Consultas</Text>
          </View>
          <View style={[styles.statCard, styles.statCardHighlight]}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Favoritos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>150</Text>
            <Text style={styles.statLabel}>Creditos</Text>
          </View>
        </View>

        <View style={styles.constellationCard}>
          <View style={styles.constellationGlow} />
          <View style={styles.constellationInner}>
            <View style={styles.constellationTop}>
              <View>
                <Text style={styles.constellationTitle}>Sua Constelacao</Text>
                <Text style={styles.constellationSubtitle}>85% para a Ordem de Orion</Text>
              </View>
              <MaterialIcons name="auto-fix-high" size={24} color={colors.secondary} />
            </View>
            <View style={styles.progressTrack}>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.progressFill}
              />
            </View>
            <Text style={styles.constellationHint}>
              Mais uma leitura de tarot para desbloquear o distintivo{' '}
              <Text style={styles.constellationHintBold}>"Explorador de Nebulosas"</Text>.
            </Text>
          </View>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <Pressable key={item.id} style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIconWrap}>
                  <MaterialIcons name={item.icon} size={22} color={colors.primary} />
                </View>
                <Text style={styles.menuItemLabel}>{item.label}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color={colors.textSecondary} style={styles.menuChevron} />
            </Pressable>
          ))}
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.logoutButton} onPress={onLogout} accessibilityLabel="Encerrar conexao e ir para login">
            <MaterialIcons name="logout" size={18} color={colors.error} />
            <Text style={styles.logoutText}>Encerrar Conexao</Text>
          </Pressable>
          <Text style={styles.versionText}>Andrômeda v1.0.0 — Feito sob a luz das estrelas</Text>
        </View>
      </ScrollView>
      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
