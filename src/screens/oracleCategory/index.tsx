import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { colors } from '../../theme/colors';
import { FONT_FAMILIES } from '../../theme/fonts';
import type { OracleCategory } from '../../types/oracleCategory';

type OracleCategoryScreenProps = {
  category: OracleCategory;
  onBack: () => void;
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Tarot:
    'Leituras com arcanos para orientar decisões afetivas, profissionais e espirituais com mais clareza.',
  Buzios:
    'Consulta com interpretação energética das conchas para abrir caminhos e entender os ciclos atuais.',
  Runas:
    'Símbolos nórdicos para leitura de tendências e direcionamento de ações nos próximos passos da jornada.',
  Numerologia:
    'Análise vibracional de números pessoais para revelar talentos, desafios e oportunidades de evolução.',
};

type OracleProfile = {
  id: string;
  name: string;
  rating: string;
  sessions: string;
  tags: string[];
  pricePerMinute: string;
  actionIcon: 'chat-bubble';
  avatarUri?: string;
  isFavorite?: boolean;
};

const CATEGORY_PROFILES: Record<string, OracleProfile[]> = {
  Tarot: [
    {
      id: 'tarot-1',
      name: 'Mestre Orion',
      rating: '4.9',
      sessions: '1.2k consultas',
      tags: ['Tarot de Marselha', 'Astrologia'],
      pricePerMinute: 'R$ 3,50',
      actionIcon: 'chat-bubble',
      avatarUri:
        'https://lh3.googleusercontent.com/aida/ADBb0ugALDPciFtXVUls9wFLB-_QMq7Qik5xrknpzthliShyv0cJXnqIRH6U87LkVwTvBS8NKLFn96XzCM1sdMobD6xW0QQIrQ811KnCPTNXQVrIyzsnkQOc9AeWi5RCbtwkJYys5l-91yoZRpM6Aiaf5tol0l6nZtiy3eCadT5WsZZr1cdn2lu3clWxPIT9hPM9kXtOI1j-K5dhCVqUwjZqJtBZeYook1hvLWKus0geGs6nEAC35C0oauo27dE',
    },
    {
      id: 'tarot-2',
      name: 'Sacerdotisa Luna',
      rating: '5.0',
      sessions: '840 consultas',
      tags: ['Baralho Cigano', 'Karma'],
      pricePerMinute: 'R$ 4,20',
      actionIcon: 'chat-bubble',
      avatarUri:
        'https://lh3.googleusercontent.com/aida/ADBb0ug76kAsLeG6qDkOrXtnBGStYaKTDw2B8wsB01--k9Jbcg14hhd1ul66iVcMWYrNFLQ6LNBf44rrXXWtbp7qL8qXUTQP90sbeKfm5Oh1AQ8kPD7UIYF49ds_RqvljP1mly_KGoITGGz2x-JdssadUNauJyhrbxdIlGY3w5wV_0PicaKqdVU3Gh_CjGIdDrQU7fyNg3vEF8QS0s3C1VlGKs_td_HyxGPlWQQXK7DcOWStndZBZkwpbSrqjaI',
    },
    {
      id: 'tarot-3',
      name: 'Elowen Estelar',
      rating: '4.8',
      sessions: '460 consultas',
      tags: ['Lenormand', 'Chamas Gêmeas'],
      pricePerMinute: 'R$ 2,90',
      actionIcon: 'chat-bubble',
      isFavorite: true,
    },
  ],
  Buzios: [
    {
      id: 'buzios-1',
      name: 'Pai Aruanda',
      rating: '4.9',
      sessions: '980 consultas',
      tags: ['Buzios', 'Prosperidade'],
      pricePerMinute: 'R$ 3,80',
      actionIcon: 'chat-bubble',
    },
  ],
  Runas: [
    {
      id: 'runas-1',
      name: 'Freya Nórdica',
      rating: '4.7',
      sessions: '520 consultas',
      tags: ['Runas', 'Destino'],
      pricePerMinute: 'R$ 3,20',
      actionIcon: 'chat-bubble',
    },
  ],
  Numerologia: [
    {
      id: 'numerologia-1',
      name: 'Aurora Númerica',
      rating: '4.9',
      sessions: '740 consultas',
      tags: ['Numerologia', 'Ano Pessoal'],
      pricePerMinute: 'R$ 3,60',
      actionIcon: 'chat-bubble',
    },
  ],
};

export function OracleCategoryScreen({ category, onBack }: OracleCategoryScreenProps) {
  const description =
    CATEGORY_DESCRIPTIONS[category.label] ??
    'Explore orientações espirituais personalizadas para aprofundar sua conexão com os astros.';
  const profiles = CATEGORY_PROFILES[category.label] ?? CATEGORY_PROFILES.Tarot;

  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={onBack} accessibilityRole="button">
            <MaterialIcons name="arrow-back" size={22} color="rgba(243, 235, 255, 0.95)" />
          </Pressable>
          <Text style={styles.headerTitle}>Categoria</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroIcon}>{category.icon}</Text>
          <Text style={styles.heroTitle}>{category.label}</Text>
          <Text style={styles.heroDescription}>{description}</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterList}
          style={styles.filterScroll}
        >
          <Pressable style={[styles.filterChip, styles.filterChipActive]}>
            <MaterialIcons name="bolt" size={14} style={styles.filterChipActiveText} />
            <Text style={[styles.filterChipText, styles.filterChipActiveText]}>Online agora</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <MaterialIcons name="payments" size={14} style={styles.filterChipText} />
            <Text style={styles.filterChipText}>Preço</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} style={styles.filterChipText} />
          </Pressable>
          <Pressable style={styles.filterChip}>
            <MaterialIcons name="grade" size={14} style={styles.filterChipText} />
            <Text style={styles.filterChipText}>Avaliação</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} style={styles.filterChipText} />
          </Pressable>
          <Pressable style={styles.filterChip}>
            <MaterialIcons name="filter-list" size={14} style={styles.filterChipText} />
            <Text style={styles.filterChipText}>Mais filtros</Text>
          </Pressable>
        </ScrollView>

        <View style={styles.cardsList}>
          {profiles.map((profile) => (
            <View key={profile.id} style={styles.profileCard}>
              {profile.isFavorite ? (
                <View style={styles.favoriteBadge}>
                  <Text style={styles.favoriteBadgeText}>Favorito</Text>
                </View>
              ) : null}

              <View style={styles.profileHeader}>
                <View style={styles.avatarRing}>
                  {profile.avatarUri ? (
                    <Image source={{ uri: profile.avatarUri }} style={styles.avatarImage} resizeMode="cover" />
                  ) : (
                    <View style={styles.avatarFallback}>
                      <MaterialIcons name="person" size={30} style={styles.avatarFallbackIcon} />
                    </View>
                  )}
                </View>
                <View style={styles.profileMeta}>
                  <Text style={styles.profileName}>{profile.name}</Text>
                  <View style={styles.ratingRow}>
                    <MaterialIcons name="star" size={14} style={styles.ratingIcon} />
                    <Text style={styles.ratingValue}>{profile.rating}</Text>
                    <Text style={styles.ratingCount}>({profile.sessions})</Text>
                  </View>
                </View>
              </View>

              <View style={styles.tagList}>
                {profile.tags.map((tag) => (
                  <View key={tag} style={styles.tagChip}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.cardFooter}>
                <View>
                  <Text style={styles.priceCaption}>Valor do Oracle</Text>
                  <Text style={styles.priceValue}>
                    {profile.pricePerMinute}
                    <Text style={styles.priceUnit}> /min</Text>
                  </Text>
                </View>
                <Pressable style={styles.contactButton}>
                  <MaterialIcons name={profile.actionIcon} size={20} style={styles.contactIcon} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.bottomBlock}>
          <Text style={styles.bottomText}>Muitas outras vozes sussurram no vácuo...</Text>
          <Pressable style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Ver todos os Oráculos</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingTop: 16,
    paddingBottom: 32,
    gap: 20,
  },
  header: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    backgroundColor: colors.surfaceLowest,
  },
  headerTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  headerSpacer: {
    width: 40,
    height: 40,
  },
  heroCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(45, 11, 90, 0.3)',
    backgroundColor: 'rgba(25, 30, 53, 0.6)',
    paddingVertical: 24,
    paddingHorizontal: 18,
    gap: 10,
    alignItems: 'center',
  },
  heroIcon: {
    fontSize: 44,
    color: colors.secondaryFixed,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  heroTitle: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  heroDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: FONT_FAMILIES.regular,
  },
  filterScroll: {
    marginHorizontal: -4,
  },
  filterList: {
    paddingHorizontal: 4,
    gap: 10,
  },
  filterChip: {
    minHeight: 40,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(74, 69, 80, 0.2)',
    backgroundColor: colors.surfaceMuted,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  filterChipActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  filterChipText: {
    color: '#ccc4d1',
    fontSize: 13,
    fontFamily: FONT_FAMILIES.medium,
  },
  filterChipActiveText: {
    color: colors.onSecondary,
  },
  cardsList: {
    gap: 14,
  },
  profileCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(45, 11, 90, 0.32)',
    backgroundColor: 'rgba(25, 30, 53, 0.6)',
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 12,
    overflow: 'hidden',
  },
  favoriteBadge: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(233,195,73,0.18)',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  favoriteBadgeText: {
    color: colors.secondary,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: FONT_FAMILIES.bold,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    padding: 2,
    backgroundColor: 'rgba(214,186,255,0.45)',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  avatarFallback: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceLow,
  },
  avatarFallbackIcon: {
    color: colors.primary,
  },
  profileMeta: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: FONT_FAMILIES.bold,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingIcon: {
    color: colors.secondary,
  },
  ratingValue: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: FONT_FAMILIES.bold,
  },
  ratingCount: {
    color: colors.textSecondary,
    fontSize: 12,
    fontFamily: FONT_FAMILIES.regular,
    marginLeft: 4,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagChip: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(214,186,255,0.1)',
    backgroundColor: 'rgba(45,11,90,0.38)',
  },
  tagText: {
    color: colors.primary,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontFamily: FONT_FAMILIES.semiBold,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(74, 69, 80, 0.2)',
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceCaption: {
    color: colors.textSecondary,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontFamily: FONT_FAMILIES.medium,
  },
  priceValue: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: FONT_FAMILIES.bold,
  },
  priceUnit: {
    color: colors.textSecondary,
    fontSize: 12,
    fontFamily: FONT_FAMILIES.regular,
  },
  contactButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryContainer,
  },
  contactIcon: {
    color: colors.primary,
  },
  bottomBlock: {
    marginTop: 8,
    alignItems: 'center',
    gap: 14,
  },
  bottomText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontFamily: FONT_FAMILIES.regular,
  },
  bottomButton: {
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: colors.primaryOutlineFaint,
    backgroundColor: colors.surfaceMuted,
  },
  bottomButtonText: {
    flex: 1,
    color: colors.primary,
    fontSize: 14,
    fontFamily: FONT_FAMILIES.bold,
  },
});
