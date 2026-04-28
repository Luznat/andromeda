import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import type { ProfessionalService } from '../../types/professionalService';
import { styles } from './styles';

const filters = ['Popular', 'Proximo horario', 'Melhor avaliados'];

const readingsCatalog: ProfessionalService[] = [
  {
    id: '1',
    professionalName: 'Aurora Celeste',
    specialty: 'Clarividencia e Amor',
    shortDescription: 'Especialista em relacionamentos e aconselhamento espiritual com mais de 12 anos de jornada.',
    fullDescription:
      'Uma consulta focada em vinculos afetivos, padroes emocionais e caminhos para fortalecer sua energia no amor.',
    price: 'R$ 180',
    duration: '30min',
    rating: '4.9',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVXP0a2w-brMgFJ-S05QepNmokGU123s23GxlTqm7csmFCbNoEwGsoMjSCHoWI5pPqhpyvBQ3ZZgoAS2_j_IKPLZF9nHsAKRcY4vPsWikk2ROlhIwxgymBrF6l5ls_oHr9dlhRYIo_uybA-tX33RQ0i_SvOVDAesYZ7daLxC3PWtpWimja4Y1KY4n-Z1eCK4BbpHDOLMCnojPuQxgMANSeYefoeZT3ztbANMMcq0BeuAwAPknSXVrCZLgulKovJ_Stw3VMRItaOZI',
    tags: ['Tarot', 'Relacionamentos', 'Energia afetiva'],
  },
  {
    id: '3',
    professionalName: 'Mestre Orion',
    specialty: 'Carreira e Prosperidade',
    shortDescription: 'Leituras profundas focadas em ciclos de vida, financas e caminhos profissionais.',
    fullDescription:
      'Sessao direcionada para crescimento profissional, planejamento de metas e expansao de prosperidade pessoal.',
    price: 'R$ 250',
    duration: '45min',
    rating: '5.0',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACgtIFQMRClRB7yTisEsr61Hx6oPNrVluPWRsjJOmftrLFq3jPXtLwcA8TrBF6QCYPvyyWH6MrqxmmJsKq0edoyQPvbdBB__NDI98N7awpgqzE7EvUpPfLzM8HcXMjq3mSQF9mbDP-BmNiVXTzLSYmPDHdFv0G4EnxUik44MaVgwnWTPysrggh-GJ3VWHzKS6l0qkF4uUVNwGmO6_5PJom6j5U9fIlMthmpaqjcXsLvacPOEUDeznZT_Wec1ZEsnS2BIIZlHDmPaA',
    tags: ['Prosperidade', 'Carreira', 'Planejamento'],
  },
  {
    id: '2',
    professionalName: 'Luna Mar',
    specialty: 'Tarot Intuitivo e Ancestral',
    shortDescription: 'Resgate a conexao com sua essencia atraves de arquetipos e sabedoria milenar.',
    fullDescription:
      'Leitura intuitiva com foco em autoconhecimento, alinhamento espiritual e desbloqueio de padroes internos.',
    price: 'R$ 150',
    duration: '30min',
    rating: '4.8',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqVMXS5BtV355_8Ytfvs6eCtpdZoGIVPf9VHYBB92XNHrBqC07O5jzwgq77Dd-kixfdihHmh45wyw2-DHdwTLVw2F6BQvkO-cXegYt2WB-l14PFZlfbP5gSt3ThMu5XaFZDRpSW4NAr_e3PNrSbKrBucgKVOa5t2Hxrj0HF_Q-ippa4WRuWnkjCZCupU3UeqUp8MSsGDen-84RLOFRstIOLAgWhGjiyId6P_clMfPRdSYh-RG7_8VAMDmiPvFhEbq4II3Lk85Rw80',
    tags: ['Tarot', 'Autoconhecimento', 'Ancestral'],
  },
];

type ReadingsScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
  onOpenService?: (service: ProfessionalService) => void;
};

export function ReadingsScreen({ activeTab = 'readings', onTabChange, onOpenService }: ReadingsScreenProps) {
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
            <Pressable key={reading.id} style={styles.card} onPress={() => onOpenService?.(reading)}>
              <Image source={{ uri: reading.image }} style={styles.cardImage} resizeMode="cover" />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{reading.professionalName}</Text>
                  <View style={styles.ratingWrap}>
                    <MaterialIcons name="star" size={14} style={styles.ratingIcon} />
                    <Text style={styles.rating}>{reading.rating}</Text>
                  </View>
                </View>
                <Text style={styles.specialty}>{reading.specialty}</Text>
                <Text style={styles.description}>{reading.shortDescription}</Text>
                <View style={styles.footerRow}>
                  <View>
                    <Text style={styles.investmentLabel}>Investimento</Text>
                    <Text style={styles.price}>
                      {reading.price}
                      <Text style={styles.priceDetail}>/{reading.duration}</Text>
                    </Text>
                  </View>
                  <Pressable style={styles.detailsButton} onPress={() => onOpenService?.(reading)}>
                    <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
