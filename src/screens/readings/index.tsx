import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { styles } from './styles';

const filters = ['Popular', 'Proximo horario', 'Melhor avaliados'];

const readingsCatalog = [
  {
    id: '1',
    title: 'Aurora Celeste',
    specialty: 'Clarividencia e Amor',
    description: 'Especialista em relacionamentos e aconselhamento espiritual com mais de 12 anos de jornada.',
    price: 'R$ 180',
    duration: '30min',
    rating: '4.9',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVXP0a2w-brMgFJ-S05QepNmokGU123s23GxlTqm7csmFCbNoEwGsoMjSCHoWI5pPqhpyvBQ3ZZgoAS2_j_IKPLZF9nHsAKRcY4vPsWikk2ROlhIwxgymBrF6l5ls_oHr9dlhRYIo_uybA-tX33RQ0i_SvOVDAesYZ7daLxC3PWtpWimja4Y1KY4n-Z1eCK4BbpHDOLMCnojPuQxgMANSeYefoeZT3ztbANMMcq0BeuAwAPknSXVrCZLgulKovJ_Stw3VMRItaOZI',
  },
  {
    id: '3',
    title: 'Mestre Orion',
    specialty: 'Carreira e Prosperidade',
    description: 'Leituras profundas focadas em ciclos de vida, financas e caminhos profissionais.',
    price: 'R$ 250',
    duration: '45min',
    rating: '5.0',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACgtIFQMRClRB7yTisEsr61Hx6oPNrVluPWRsjJOmftrLFq3jPXtLwcA8TrBF6QCYPvyyWH6MrqxmmJsKq0edoyQPvbdBB__NDI98N7awpgqzE7EvUpPfLzM8HcXMjq3mSQF9mbDP-BmNiVXTzLSYmPDHdFv0G4EnxUik44MaVgwnWTPysrggh-GJ3VWHzKS6l0qkF4uUVNwGmO6_5PJom6j5U9fIlMthmpaqjcXsLvacPOEUDeznZT_Wec1ZEsnS2BIIZlHDmPaA',
  },
  {
    id: '2',
    title: 'Luna Mar',
    specialty: 'Tarot Intuitivo e Ancestral',
    description: 'Resgate a conexao com sua essencia atraves de arquetipos e sabedoria milenar.',
    price: 'R$ 150',
    duration: '30min',
    rating: '4.8',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqVMXS5BtV355_8Ytfvs6eCtpdZoGIVPf9VHYBB92XNHrBqC07O5jzwgq77Dd-kixfdihHmh45wyw2-DHdwTLVw2F6BQvkO-cXegYt2WB-l14PFZlfbP5gSt3ThMu5XaFZDRpSW4NAr_e3PNrSbKrBucgKVOa5t2Hxrj0HF_Q-ippa4WRuWnkjCZCupU3UeqUp8MSsGDen-84RLOFRstIOLAgWhGjiyId6P_clMfPRdSYh-RG7_8VAMDmiPvFhEbq4II3Lk85Rw80',
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {filters.map((filter, index) => {
            const isActive = index === 0;
            return (
              <View key={filter} style={[styles.filterChip, isActive && styles.filterChipActive]}>
                <Text style={[styles.filterLabel, isActive && styles.filterLabelActive]}>{filter}</Text>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.cardList}>
          {readingsCatalog.map((reading) => (
            <View key={reading.id} style={styles.card}>
              <Image source={{ uri: reading.image }} style={styles.cardImage} resizeMode="cover" />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{reading.title}</Text>
                  <View style={styles.ratingWrap}>
                    <MaterialIcons name="star" size={14} style={styles.ratingIcon} />
                    <Text style={styles.rating}>{reading.rating}</Text>
                  </View>
                </View>
                <Text style={styles.specialty}>{reading.specialty}</Text>
                <Text style={styles.description}>{reading.description}</Text>
                <View style={styles.footerRow}>
                  <View>
                    <Text style={styles.investmentLabel}>Investimento</Text>
                    <Text style={styles.price}>
                      {reading.price}
                      <Text style={styles.priceDetail}>/{reading.duration}</Text>
                    </Text>
                  </View>
                  <Pressable style={styles.detailsButton}>
                    <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
