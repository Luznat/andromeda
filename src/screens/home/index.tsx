import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { gradients } from '../../theme/colors';
import { styles } from './styles';

const BOTTOM_BAR_CLEARANCE = 64;

const HERO_NEBULA_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQYeomCl1-uyFKB_INho71Xe5gxNZsWiPuByOwT8UrwqkW7R5iZr8QAQdyBLeqKfjdcOPy6RxnFQv9ndni9bq14t4CkOsPluyJ6AGtl4pt2xR53-w-MfCdOZUx9yEmlAHKE87FEp4Z4vvdF-vRWnSYjTvsEqJBsSbpIMeTMh-PG3FfIs1n3ChMLrLTJaZWrmjs1FmLSaYB39u00lGbFD6dvyPIYkVGe9EFnmqXLViB72jJcHhWIeX_O7TsyR5tezY-aCYmsvxRosA';

const categories = [
  { id: '1', icon: '✦', label: 'Tarot' },
  { id: '2', icon: '◉', label: 'Buzios' },
  { id: '3', icon: '◇', label: 'Runas' },
  { id: '4', icon: '#', label: 'Numerologia' },
];

const featuredReadings = [
  {
    id: '1',
    badge: 'Mais Procurada',
    title: 'Leitura de Tarot Amoroso',
    description: 'Descubra os caminhos do coração com clareza, sensibilidade e destino.',
    price: 'R$ 145',
    duration: '30 minutos',
    rate: '4.9',
  },
  {
    id: '2',
    badge: 'Especial Semanal',
    title: 'Buzios da Prosperidade',
    description: 'Abra caminhos financeiros com a sabedoria ancestral das conchas sagradas.',
    price: 'R$ 180',
    duration: '45 minutos',
    rate: '5.0',
  },
];

export function HomeScreen() {
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
        <View style={styles.topBar}>
          <View style={styles.brandRow}>
            <Text style={styles.brandIcon}>✦</Text>
            <Text style={styles.brandText}>Andrômeda</Text>
          </View>
          <View style={styles.topActions}>
            <Text style={styles.topAction}>🔔</Text>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>VS</Text>
            </View>
          </View>
        </View>

        <View style={styles.hero}>
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
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Oráculos e Artes</Text>
          <Text style={styles.sectionAction}>Ver todos</Text>
        </View>

        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryCard}>
              <View style={styles.categoryIconWrap}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recomendados pela galáxia</Text>

        <View style={styles.featuredList}>
          {featuredReadings.map((item) => (
            <View key={item.id} style={styles.featuredCard}>
              <View style={styles.featuredMedia}>
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
      </ScrollView>
      <CosmicBottomNav />
    </View>
  );
}
