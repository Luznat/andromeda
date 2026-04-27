import { ScrollView, Text, View } from 'react-native';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { styles } from './styles';

const readingsCatalog = [
  {
    id: '1',
    badge: 'Mais procurada',
    title: 'Leitura de Tarot Amoroso',
    description: 'Descubra os caminhos do coracao com clareza, sensibilidade e destino.',
    price: 'R$ 145',
    duration: '30 minutos',
    rating: '4.9',
  },
  {
    id: '2',
    badge: 'Especial semanal',
    title: 'Buzios da Prosperidade',
    description: 'Abra caminhos financeiros com a sabedoria ancestral das conchas sagradas.',
    price: 'R$ 180',
    duration: '45 minutos',
    rating: '5.0',
  },
  {
    id: '3',
    badge: 'Recomendado',
    title: 'Runas para Decisoes',
    description: 'Ganhe direcao para escolhas importantes com a leitura runica personalizada.',
    price: 'R$ 120',
    duration: '25 minutos',
    rating: '4.8',
  },
];

type ReadingsScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
};

export function ReadingsScreen({ activeTab = 'readings', onTabChange }: ReadingsScreenProps) {
  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <CosmicHeader />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Leituras</Text>
          <Text style={styles.sectionAction}>Ver todas</Text>
        </View>

        <View style={styles.cardList}>
          {readingsCatalog.map((reading) => (
            <View key={reading.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.badge}>{reading.badge}</Text>
                <Text style={styles.price}>{reading.price}</Text>
              </View>
              <Text style={styles.title}>{reading.title}</Text>
              <Text style={styles.description}>{reading.description}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.rating}>★ {reading.rating}</Text>
                <Text style={styles.metaChip}>{reading.duration}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
