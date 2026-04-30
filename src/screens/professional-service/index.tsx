import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import type { ProfessionalService } from '../../types/professionalService';
import { colors } from '../../theme/colors';
import { styles } from './styles';

type ProfessionalServiceScreenProps = {
  service: ProfessionalService;
  onBack: () => void;
};

export function ProfessionalServiceScreen({ service, onBack }: ProfessionalServiceScreenProps) {
  const isPremium = service.isPremium === true;
  const haloProgress = useRef(new Animated.Value(0)).current;
  const scheduleItems = [
    { day: 'Hoje', time: '18:30 ás 20:00' },
    { day: 'Amanha', time: '09:00 ás 14:15' },
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

  useEffect(() => {
    if (!isPremium) {
      haloProgress.setValue(0);
      return;
    }

    const loop = Animated.loop(
      Animated.timing(haloProgress, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    loop.start();

    return () => {
      loop.stop();
      haloProgress.setValue(0);
    };
  }, [haloProgress, isPremium]);

  const haloScale = haloProgress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.08, 1],
  });
  const haloOpacity = haloProgress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.65, 0.3],
  });
  const profileImageSource = service.profileImageSource ?? { uri: service.image };
  const profileInitials = service.professionalName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <CosmicHeader onBack={onBack} onSharePress={() => undefined} profileInitials={profileInitials} />

        <View style={styles.profileSection}>
          <View style={styles.avatarWrap}>
            {isPremium && (
              <Animated.View
                pointerEvents="none"
                style={[
                  styles.premiumHalo,
                  {
                    opacity: haloOpacity,
                    transform: [{ scale: haloScale }],
                  },
                ]}
              >
                <View style={styles.premiumHaloOuter} />
                <View style={styles.premiumHaloInner} />
              </Animated.View>
            )}
            <LinearGradient
              colors={[colors.secondary, colors.primary, colors.secondaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.avatarFrame, isPremium && styles.avatarFramePremium]}
            >
              <View style={styles.avatarFrameInner}>
                <Image source={profileImageSource} style={styles.avatarImage} resizeMode="cover" />
              </View>
            </LinearGradient>
          </View>
          <Text style={[styles.name, isPremium && styles.namePremium]}>{service.specialty}</Text>
          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star" size={18} color={colors.secondary} />
            <MaterialIcons name="star-half" size={18} color={colors.secondary} />
            <Text style={styles.ratingMeta}>{service.rating} (128 atendimentos)</Text>
          </View>
          <Text style={[styles.specialty, isPremium && styles.specialtyPremium]}>
            {isPremium ? `Guia premium: ${service.professionalName}` : `Com ${service.professionalName}`}
          </Text>
        </View>

        <View style={styles.aboutRow}>
          <View style={styles.aboutMain}>
            <Text style={[styles.sectionTitle, isPremium && styles.sectionTitlePremium]}>
              {isPremium ? 'Sobre a Mentoria Premium' : 'Sobre o Servico'}
            </Text>
            <Text style={styles.description}>
              Minha jornada comecou sob o ceu estrelado do Atacama, onde aprendi a ouvir os sussurros do cosmos.
            </Text>
            <Text style={styles.description}>{service.fullDescription}</Text>
          </View>
          <View style={[styles.scheduleCard, isPremium && styles.scheduleCardPremium]}>
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
          <Text style={[styles.sectionTitle, isPremium && styles.sectionTitlePremium]}>
            {isPremium ? 'Dominios da Sessao' : 'Temas Atendidos'}
          </Text>
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
            <Text style={[styles.sectionTitle, isPremium && styles.sectionTitlePremium]}>
              {isPremium ? 'Vozes do Despertar' : 'Avaliacoes do Servico'}
            </Text>
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

      <View style={[styles.bottomCta, isPremium && styles.bottomCtaPremium]}>
        <View>
          <Text style={[styles.bottomCtaLabel, isPremium && styles.bottomCtaLabelPremium]}>
            {isPremium ? 'Investimento Premium' : 'Valor da Sessao'}
          </Text>
          <Text style={[styles.bottomCtaPrice, isPremium && styles.bottomCtaPricePremium]}>
            {service.price} <Text style={styles.bottomCtaPriceSmall}>/ {service.duration}</Text>
          </Text>
        </View>
        <Pressable style={[styles.reserveButton, isPremium && styles.reserveButtonPremium]}>
          <MaterialIcons name="event-available" size={18} color={colors.onSecondary} />
          <Text style={styles.reserveButtonText}>{isPremium ? 'Agendar portal' : 'Agendar agora'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
