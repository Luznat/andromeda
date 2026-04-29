import type { ImageSourcePropType } from 'react-native';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { ORACLE_CATEGORIES } from '../../data/oracleCategories';
import { gradients } from '../../theme/colors';
import { styles } from './styles';

const BOTTOM_BAR_CLEARANCE = 64;

const HERO_NEBULA_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQYeomCl1-uyFKB_INho71Xe5gxNZsWiPuByOwT8UrwqkW7R5iZr8QAQdyBLeqKfjdcOPy6RxnFQv9ndni9bq14t4CkOsPluyJ6AGtl4pt2xR53-w-MfCdOZUx9yEmlAHKE87FEp4Z4vvdF-vRWnSYjTvsEqJBsSbpIMeTMh-PG3FfIs1n3ChMLrLTJaZWrmjs1FmLSaYB39u00lGbFD6dvyPIYkVGe9EFnmqXLViB72jJcHhWIeX_O7TsyR5tezY-aCYmsvxRosA';

type FeaturedReading = {
  id: string;
  image: ImageSourcePropType;
  badge: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  rate: string;
};

const featuredReadings: FeaturedReading[] = [
  {
    id: '1',
    image: require('../../../assets/featured-tarot-amor.jpg'),
    badge: 'Mais Procurada',
    title: 'Leitura de Tarot Amoroso',
    description: 'Descubra os caminhos do coração com clareza, sensibilidade e destino.',
    price: 'R$ 145',
    duration: '30 minutos',
    rate: '4.9',
  },
  {
    id: '2',
    image: require('../../../assets/screen.png'),
    badge: 'Especial Semanal',
    title: 'Buzios da Prosperidade',
    description: 'Abra caminhos financeiros com a sabedoria ancestral das conchas sagradas.',
    price: 'R$ 180',
    duration: '45 minutos',
    rate: '5.0',
  },
];

type HomeScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
  onOpenInsight?: (insightId: string) => void;
};

export function HomeScreen({ activeTab = 'home', onTabChange, onOpenInsight }: HomeScreenProps) {
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
            <View key={item.id} style={styles.featuredCard}>
              <View style={styles.featuredThumbColumn}>
                <View style={styles.featuredMedia}>
                  <Image
                    source={item.image}
                    style={styles.featuredThumbImage}
                    resizeMode="cover"
                    accessibilityLabel={`Ilustração: ${item.title}`}
                  />
                </View>
                <Text style={styles.featuredRate}>★ {item.rate}</Text>
              </View>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredBadge}>{item.badge}</Text>
                <Text style={styles.featuredTitle}>{item.title}</Text>
                <Text style={styles.featuredDescription}>{item.description}</Text>
                <View style={styles.featuredMeta}>
                  <Text style={styles.featuredPrice}>{item.price}</Text>
                  <Text style={styles.featuredDuration}>{item.duration}</Text>
                </View>
              </View>
            </View>
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
