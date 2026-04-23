import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

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
    description: 'Descubra os caminhos do coracao com clareza, sensibilidade e destino.',
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
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.topBar}>
        <View style={styles.brandRow}>
          <Text style={styles.brandIcon}>✦</Text>
          <Text style={styles.brandText}>Andromeda</Text>
        </View>
        <View style={styles.topActions}>
          <Text style={styles.topAction}>🔔</Text>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>VS</Text>
          </View>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <Text style={styles.heroTitle}>O que os astros reservam para voce hoje?</Text>
        <View style={styles.heroTags}>
          <Text style={styles.heroTagSecondary}>Lua em Escorpiao</Text>
          <Text style={styles.heroTagPrimary}>Portal Aberto</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Oraculos e Artes</Text>
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

      <Text style={styles.sectionTitle}>Recomendados pela galaxia</Text>

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
  );
}
