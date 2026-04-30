import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { ORACLE_CATEGORIES } from '../../data/oracleCategories';
import type { ProfessionalService } from '../../types/professionalService';
import { gradients } from '../../theme/colors';
import { styles } from './styles';

const BOTTOM_BAR_CLEARANCE = 64;

const HERO_NEBULA_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQYeomCl1-uyFKB_INho71Xe5gxNZsWiPuByOwT8UrwqkW7R5iZr8QAQdyBLeqKfjdcOPy6RxnFQv9ndni9bq14t4CkOsPluyJ6AGtl4pt2xR53-w-MfCdOZUx9yEmlAHKE87FEp4Z4vvdF-vRWnSYjTvsEqJBsSbpIMeTMh-PG3FfIs1n3ChMLrLTJaZWrmjs1FmLSaYB39u00lGbFD6dvyPIYkVGe9EFnmqXLViB72jJcHhWIeX_O7TsyR5tezY-aCYmsvxRosA';

type FeaturedReading = {
  badge: string;
  rate: string;
  service: ProfessionalService;
};

const featuredReadings: FeaturedReading[] = [
  {
    badge: 'Mais Procurada',
    rate: '4.9',
    service: {
      id: 'home-featured-1',
      professionalName: 'Aurora Celeste',
      specialty: 'Tarot Amoroso',
      shortDescription: 'Descubra os caminhos do coracao com clareza, sensibilidade e destino.',
      fullDescription:
        'Uma sessao focada em relacionamentos, padroes emocionais e orientacao energetica para fortalecer a vida afetiva.',
      price: 'R$ 145',
      duration: '30 minutos',
      rating: '4.9',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAVXP0a2w-brMgFJ-S05QepNmokGU123s23GxlTqm7csmFCbNoEwGsoMjSCHoWI5pPqhpyvBQ3ZZgoAS2_j_IKPLZF9nHsAKRcY4vPsWikk2ROlhIwxgymBrF6l5ls_oHr9dlhRYIo_uybA-tX33RQ0i_SvOVDAesYZ7daLxC3PWtpWimja4Y1KY4n-Z1eCK4BbpHDOLMCnojPuQxgMANSeYefoeZT3ztbANMMcq0BeuAwAPknSXVrCZLgulKovJ_Stw3VMRItaOZI',
      profileImageSource: require('../../../assets/featured-tarot-amor.jpg'),
      tags: ['Amor', 'Relacionamentos', 'Tarot'],
      isPremium: true,
    },
  },
  {
    badge: 'Especial Semanal',
    rate: '5.0',
    service: {
      id: 'home-featured-2',
      professionalName: 'Mestre Orion',
      specialty: 'Buzios da Prosperidade',
      shortDescription: 'Abra caminhos financeiros com a sabedoria ancestral das conchas sagradas.',
      fullDescription:
        'Consulta dedicada a prosperidade, carreira e direcionamento pratico para ciclos de crescimento financeiro.',
      price: 'R$ 180',
      duration: '45 minutos',
      rating: '5.0',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuACgtIFQMRClRB7yTisEsr61Hx6oPNrVluPWRsjJOmftrLFq3jPXtLwcA8TrBF6QCYPvyyWH6MrqxmmJsKq0edoyQPvbdBB__NDI98N7awpgqzE7EvUpPfLzM8HcXMjq3mSQF9mbDP-BmNiVXTzLSYmPDHdFv0G4EnxUik44MaVgwnWTPysrggh-GJ3VWHzKS6l0qkF4uUVNwGmO6_5PJom6j5U9fIlMthmpaqjcXsLvacPOEUDeznZT_Wec1ZEsnS2BIIZlHDmPaA',
      profileImageSource: require('../../../assets/screen.png'),
      tags: ['Prosperidade', 'Carreira', 'Buzios'],
      isPremium: true,
    },
  },
];

type HomeScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
  onOpenInsight?: (insightId: string) => void;
  onOpenService?: (service: ProfessionalService) => void;
};

export function HomeScreen({
  activeTab = 'home',
  onTabChange,
  onOpenInsight,
  onOpenService,
}: HomeScreenProps) {
  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: 28 + BOTTOM_BAR_CLEARANCE },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <CosmicHeader />

        <Pressable
          style={styles.hero}
          onPress={() => onOpenInsight?.('home-daily')}
          accessibilityRole="button"
          accessibilityLabel="Abrir previsão do dia"
        >
          <Image
            source={{ uri: HERO_NEBULA_URI }}
            style={styles.heroImage}
            resizeMode="cover"
            accessibilityLabel="Nebulosa e estrelas no espaço"
          />
          <LinearGradient
            colors={gradients.heroOverlay}
            locations={[0, 0.45, 1]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>O que os astros reservam para você hoje?</Text>
            <View style={styles.heroTags}>
              <Text style={styles.heroTagSecondary}>Lua em Escorpião</Text>
              <Text style={styles.heroTagPrimary}>Portal Aberto</Text>
            </View>
          </View>
        </Pressable>

        <Text style={styles.sectionTitle}>Recomendados pela galáxia</Text>

        <View style={styles.featuredList}>
          {featuredReadings.map((item) => (
            <Pressable
              key={item.service.id}
              style={styles.featuredCard}
              onPress={() => onOpenService?.(item.service)}
              accessibilityRole="button"
              accessibilityLabel={`Abrir servico ${item.service.specialty}`}
            >
              <View style={styles.featuredThumbColumn}>
                <View style={styles.featuredMedia}>
                  <Image
                    source={item.service.profileImageSource ?? { uri: item.service.image }}
                    style={styles.featuredThumbImage}
                    resizeMode="cover"
                    accessibilityLabel={`Ilustracao: ${item.service.specialty}`}
                  />
                </View>
                <Text style={styles.featuredRate}>★ {item.rate}</Text>
              </View>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredBadge}>{item.badge}</Text>
                <Text style={styles.featuredTitle}>{item.service.specialty}</Text>
                <Text style={styles.featuredDescription}>{item.service.shortDescription}</Text>
                <View style={styles.featuredMeta}>
                  <Text style={styles.featuredPrice}>{item.service.price}</Text>
                  <Text style={styles.featuredDuration}>{item.service.duration}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Oráculos e Artes</Text>
        </View>

        <View style={styles.categoryGrid}>
          {ORACLE_CATEGORIES.map((category) => (
            <View key={category.id} style={styles.categoryCard}>
              <View style={styles.categoryIconWrap}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
