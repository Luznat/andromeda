import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { ORACLE_CATEGORIES } from '../../data/oracleCategories';
import { colors } from '../../theme/colors';
import { styles } from './styles';

const recentSearches = [
  'Compatibilidade Astral',
  'Mercurio Retrogrado',
  'Mapa Astral Gratis',
  'Tarot do Amor',
];

const featuredReadings = [
  {
    id: '1',
    tag: 'Premium',
    title: 'Conexao das Almas: Sinastria Amorosa',
    description:
      'Descubra como os astros influenciam seu relacionamento e o que o futuro reserva para o casal.',
    price: 'R$ 149,00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuTZDzDlAPJtBY-1wiHcHj4laQ72YDOY-fsV7wJENfA5qcpwsPAYA4aw1A84E1sisGtF4Bdpr3_ge14gDPx0avEhoHJGJECkOfOTHxvOdupYbRX5BxU3Kuylfp-qY5B9ij-ybhDW4vySRxt4DGSJXIBzGdBLAT58BHIriaOKV1ORy0XbkL2Cxsg4SYHQ_5bDVqxCtduNp2IWDU_ULSvniFPa3dup4pvMGEEOJg0Ud_Bsd1bbxaMeJpgrQkIMKg04Ncm0_7lNGfn8o',
  },
  {
    id: '2',
    title: 'Previsao Semanal com Mestre Orion',
    description: 'Consulte as energias da semana nos negocios e vida pessoal.',
    meta: '4.9 (1.2k reviews)  •  15 min de consulta',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkIj6S7i5FCA7SLRX1LnLcB7dqP_C_yKk0cFw8rN6iOnHu-c7aRjRKmECYiqtNTGpPp9woHCWTgwMMiol8r7Ak1uOyc8qDiwhVo-qW-a651nKDrS7LHxvgu72Oym2Wt61AjHc_4yxLdIzDBEGMizd6f5RibW51lnD2p-G3f0188pK2kcji5543TE866deSB9cLuEAmmtgOHZq6cyjiTMF_kLridEYsTWnM8cFHVvXMw6SOiy7beQUsxTZ8DF0h_-sxPXkNhDcP37g',
  },
];

const categoryThemeById: Record<
  string,
  { cardBackground: string; cardBorder: string; iconBackground: string; iconBorder: string }
> = {
  '1': {
    cardBackground: 'rgba(45, 11, 90, 0.45)',
    cardBorder: 'rgba(214,186,255,0.55)',
    iconBackground: 'rgba(214,186,255,0.16)',
    iconBorder: 'rgba(214,186,255,0.65)',
  },
  '2': {
    cardBackground: 'rgba(175, 141, 17, 0.22)',
    cardBorder: 'rgba(233,195,73,0.55)',
    iconBackground: 'rgba(233,195,73,0.18)',
    iconBorder: 'rgba(233,195,73,0.65)',
  },
  '3': {
    cardBackground: 'rgba(28, 45, 92, 0.42)',
    cardBorder: 'rgba(151,182,255,0.5)',
    iconBackground: 'rgba(151,182,255,0.16)',
    iconBorder: 'rgba(151,182,255,0.6)',
  },
  '4': {
    cardBackground: 'rgba(36, 74, 64, 0.35)',
    cardBorder: 'rgba(108,214,179,0.48)',
    iconBackground: 'rgba(108,214,179,0.16)',
    iconBorder: 'rgba(108,214,179,0.55)',
  },
};

type SearchScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
};

export function SearchScreen({ activeTab = 'search', onTabChange }: SearchScreenProps) {
  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <CosmicHeader />

        <View style={styles.searchInputWrap}>
          <MaterialIcons name="search" size={20} style={styles.searchInputIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="O que os astros revelam hoje?"
            placeholderTextColor="rgba(198,198,198,0.45)"
          />
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitleSm}>Buscas recentes</Text>
          <View style={styles.chipsWrap}>
            {recentSearches.map((item) => (
              <View key={item} style={styles.searchChip}>
                <Text style={styles.searchChipText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Categorias populares</Text>
          <View style={styles.categoryGrid}>
            {ORACLE_CATEGORIES.map((category) => (
              <View
                key={category.id}
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: categoryThemeById[category.id]?.cardBackground ?? 'rgba(25, 30, 53, 0.78)',
                    borderColor: categoryThemeById[category.id]?.cardBorder ?? colors.secondary,
                  },
                ]}
              >
                <View
                  style={[
                    styles.categoryIconWrap,
                    {
                      backgroundColor:
                        categoryThemeById[category.id]?.iconBackground ?? 'rgba(233,195,73,0.14)',
                      borderColor: categoryThemeById[category.id]?.iconBorder ?? colors.secondary,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryIcon,
                      category.id === '3' && { color: '#b9cbff' },
                      category.id === '4' && { color: '#84e7c4' },
                    ]}
                  >
                    {category.icon}
                  </Text>
                </View>
                <Text style={styles.categoryLabel}>{category.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Leituras em destaque</Text>
            <Text style={styles.sectionAction}>Ver tudo</Text>
          </View>

          <View style={styles.featuredCard}>
            <Image source={{ uri: featuredReadings[0].image }} style={styles.featuredImageLarge} resizeMode="cover" />
            <View style={styles.featuredCardContent}>
              <Text style={styles.featuredTag}>{featuredReadings[0].tag}</Text>
              <Text style={styles.featuredTitle}>{featuredReadings[0].title}</Text>
              <Text style={styles.featuredDescription}>{featuredReadings[0].description}</Text>
              <View style={styles.featuredFooter}>
                <Text style={styles.featuredPrice}>{featuredReadings[0].price}</Text>
                <View style={styles.featuredButton}>
                  <Text style={styles.featuredButtonText}>Reservar agora</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.compactCard}>
            <Image source={{ uri: featuredReadings[1].image }} style={styles.compactAvatar} resizeMode="cover" />
            <View style={styles.compactContent}>
              <Text style={styles.compactTitle}>{featuredReadings[1].title}</Text>
              <Text style={styles.compactDescription}>{featuredReadings[1].description}</Text>
              <Text style={styles.compactMeta}>{featuredReadings[1].meta}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} style={styles.compactChevron} />
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Explorar horizontes</Text>
          <View style={styles.exploreHero}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH6X7OArsRX69n3UnWYQl1aHP1D8K-FbMe8CTG3M73b71XpRetdoba7CFHHDdZLz9NcUpORVY5B8HwbiYKpX-CfXQAMPoPvBo0xFNdOdT8kTC5A_YOObj6_JtV7umfnEvdSly6rtcS5Qx-B2cIWuNQUQnDWnQi3OwhnCVhCxhmv_diRMsCQbuWNtuq_WYjIQWRcOHXbDyPho6psYBb7CQoFTMWtWzZnOR8FMutYteoU1CyvPX-u6JdSpviZQlKezjiGOcx57N0wIM',
              }}
              style={styles.exploreHeroImage}
              resizeMode="cover"
            />
            <View style={styles.exploreOverlay}>
              <Text style={styles.exploreKicker}>Evento especial</Text>
              <Text style={styles.exploreTitle}>Alinhamento de Jupiter</Text>
              <Text style={styles.exploreDescription}>
                Descubra como aproveitar a energia expansiva deste ciclo.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
