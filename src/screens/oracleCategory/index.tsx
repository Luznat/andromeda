import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import type { OracleCategory } from '../../types/oracleCategory';
import { styles } from './styles';

type OracleCategoryScreenProps = {
  category: OracleCategory;
  onBack: () => void;
};

const PROFILE_WALLPAPER = require('../../../assets/profile.jpeg');

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
      <View
        style={styles.profileWallpaper}
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        <ImageBackground
          source={PROFILE_WALLPAPER}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          <LinearGradient
            colors={['rgba(8,11,26,0.62)', 'rgba(8,11,26,0.7)', 'rgba(8,11,26,0.8)']}
            locations={[0, 0.48, 1]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={StyleSheet.absoluteFillObject}
          />
        </ImageBackground>
      </View>
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

