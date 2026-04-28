import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import type { ProfessionalService } from '../../types/professionalService';
import { colors } from '../../theme/colors';
import { styles } from './styles';

type ProfessionalServiceScreenProps = {
  service: ProfessionalService;
  onBack: () => void;
};

export function ProfessionalServiceScreen({ service, onBack }: ProfessionalServiceScreenProps) {
  const scheduleItems = [
    { day: 'Hoje', time: '18:30, 20:00' },
    { day: 'Amanha', time: '09:00, 14:15' },
  ];

  const reviews = [
    {
      id: 'r1',
      initial: 'M',
      name: 'Mariana Costa',
      when: 'ha 2 dias',
      text: 'A consulta me trouxe paz para uma decisao importante. Sensibilidade e clareza do inicio ao fim.',
      rating: 5,
    },
    {
      id: 'r2',
      initial: 'R',
      name: 'Ricardo Mendes',
      when: 'ha 1 semana',
      text: 'Leitura extremamente profissional e assertiva, com foco real em autoconhecimento.',
      rating: 4,
    },
  ];

  const specialties = [
    { id: 's1', icon: 'favorite', label: 'Relacionamentos' },
    { id: 's2', icon: 'auto-awesome', label: 'Espiritualidade e Proposito', featured: true },
    { id: 's3', icon: 'work', label: 'Carreira' },
    { id: 's4', icon: 'account-balance-wallet', label: 'Prosperidade' },
    { id: 's5', icon: 'psychology', label: 'Autoconhecimento' },
  ];

  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Pressable style={styles.topBarButton} onPress={onBack} accessibilityLabel="Voltar para leituras">
            <MaterialIcons name="arrow-back-ios-new" size={18} color={colors.textSecondary} />
          </Pressable>
          <Text style={styles.topBarTitle}>Andromeda</Text>
          <Pressable style={styles.topBarButton} accessibilityLabel="Compartilhar perfil">
            <MaterialIcons name="share" size={18} color={colors.textSecondary} />
          </Pressable>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarGlow} />
          <LinearGradient
            colors={[colors.secondary, colors.primary, colors.secondaryContainer]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.avatarFrame}
          >
            <View style={styles.avatarFrameInner}>
              <Image source={{ uri: service.image }} style={styles.avatarImage} resizeMode="cover" />
            </View>
          </LinearGradient>
          <Text style={styles.name}>{service.professionalName}</Text>
          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star-half" size={18} color={colors.secondary} />
            <Text style={styles.ratingMeta}>{service.rating} (128 atendimentos)</Text>
          </View>
          <Text style={styles.specialty}>{service.specialty}</Text>
        </View>

        <View style={styles.aboutRow}>
          <View style={styles.aboutMain}>
            <Text style={styles.sectionTitle}>Sobre a Consultora</Text>
            <Text style={styles.description}>
              Minha jornada comecou sob o ceu estrelado do Atacama, onde aprendi a ouvir os sussurros do cosmos.
            </Text>
            <Text style={styles.description}>{service.fullDescription}</Text>
          </View>
          <View style={styles.scheduleCard}>
            <Text style={styles.scheduleTitle}>Proximos Horarios</Text>
            {scheduleItems.map((item) => (
              <View key={item.day} style={styles.scheduleRow}>
                <Text style={styles.scheduleDay}>{item.day}</Text>
                <Text style={styles.scheduleTime}>{item.time}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Especialidades</Text>
          <View style={styles.specialtyGrid}>
            {specialties.map((item) => (
              <View
                key={item.id}
                style={[styles.specialtyCard, item.featured && styles.specialtyCardFeatured]}
              >
                <MaterialIcons
                  name={item.icon as never}
                  size={item.featured ? 26 : 24}
                  color={item.featured ? colors.secondary : colors.primary}
                />
                <Text style={styles.specialtyCardText}>{item.label}</Text>
                {item.featured && (
                  <Text style={styles.specialtyFeaturedHint}>
                    Alinhamento energetico e descoberta de missao de alma.
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.sectionTitle}>Depoimentos</Text>
            <Text style={styles.seeAll}>Ver todos</Text>
          </View>
          {reviews.map((review) => (
            <View
              key={review.id}
              style={[styles.reviewCard, review.id === 'r1' && styles.reviewCardHighlighted]}
            >
              <View style={styles.reviewTop}>
                <View style={styles.reviewUser}>
                  <View style={styles.reviewAvatar}>
                    <Text style={styles.reviewAvatarText}>{review.initial}</Text>
                  </View>
                  <View>
                    <Text style={styles.reviewName}>{review.name}</Text>
                    <Text style={styles.reviewWhen}>{review.when}</Text>
                  </View>
                </View>
                <View style={styles.reviewStars}>
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <MaterialIcons key={`${review.id}-${idx}`} name="star" size={14} color={colors.secondary} />
                  ))}
                </View>
              </View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomCta}>
        <View>
          <Text style={styles.bottomCtaLabel}>Valor da Sessao</Text>
          <Text style={styles.bottomCtaPrice}>
            {service.price} <Text style={styles.bottomCtaPriceSmall}>/ {service.duration}</Text>
          </Text>
        </View>
        <Pressable style={styles.reserveButton}>
          <MaterialIcons name="event-upcoming" size={18} color={colors.onSecondary} />
          <Text style={styles.reserveButtonText}>Agendar agora</Text>
        </Pressable>
      </View>
    </View>
  );
}
