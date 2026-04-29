import { useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Share,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope';
import { NotoSerif_400Regular, NotoSerif_700Bold } from '@expo-google-fonts/noto-serif';
import { useFonts } from 'expo-font';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import type { CosmicInsight, CosmicTransitAccent } from '../../types/cosmicInsight';
import { colors } from '../../theme/colors';
import { styles } from './styles';

type CosmicInsightScreenProps = {
  insight: CosmicInsight;
  onBack: () => void;
};

function transitAccentColor(accent: CosmicTransitAccent): string {
  if (accent === 'secondary') {
    return colors.secondary;
  }
  if (accent === 'error') {
    return colors.error;
  }
  return colors.primary;
}

export function CosmicInsightScreen({ insight, onBack }: CosmicInsightScreenProps) {
  const { width } = useWindowDimensions();
  const isWideSplit = width >= 720;
  const isOracleWide = width >= 640;

  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    NotoSerif_400Regular,
    NotoSerif_700Bold,
  });

  const shareMessage = useMemo(
    () => `${insight.title}\n\n${insight.paragraphs.join('\n\n')}`,
    [insight.title, insight.paragraphs],
  );

  const handleShare = () => {
    Share.share({ message: shareMessage, title: insight.title }).catch(() => {});
  };

  const handleShareOracle = () => {
    const o = insight.oracleFeatured;
    if (!o) {
      handleShare();
      return;
    }
    const msg = `${o.title}\n\n"${o.quote}"`;
    Share.share({ message: msg, title: o.title }).catch(() => {});
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingRoot}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  const horoscopeHeading = insight.horoscopeHeading ?? 'Horóscopo do Dia';

  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSlot}>
          <CosmicHeader onBack={onBack} onSharePress={handleShare} />
        </View>

        <View style={styles.heroSection}>
          <Image
            source={{ uri: insight.heroImageUri }}
            style={styles.heroImage}
            resizeMode="cover"
            accessibilityLabel="Nebulosa e estrelas no espaço profundo"
          />
          <LinearGradient
            colors={['transparent', 'rgba(13, 18, 40, 0.42)', colors.background]}
            locations={[0, 0.42, 1]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.heroGradient}
            pointerEvents="none"
          />

          <View style={styles.heroBottom}>
            {insight.heroKickerLeft && insight.heroKickerRight ? (
              <View style={styles.kickerRow}>
                <MaterialIcons name="wb-sunny" size={16} color={colors.secondary} />
                <Text style={styles.kickerText}>{insight.heroKickerLeft}</Text>
                <Text style={styles.kickerSep}>|</Text>
                <Text style={styles.kickerText}>{insight.heroKickerRight}</Text>
              </View>
            ) : insight.kicker ? (
              <Text style={styles.kickerText}>{insight.kicker}</Text>
            ) : null}
            <Text style={styles.heroTitle}>{insight.title}</Text>
          </View>
        </View>

        <View style={styles.canvas}>
          <View style={styles.bento}>
            <Text style={styles.sectionTitle}>{horoscopeHeading}</Text>
            {insight.paragraphs.map((block, index) => (
              <Text
                key={`${insight.id}-p-${index}`}
                style={[styles.paragraph, index === insight.paragraphs.length - 1 && styles.paragraphLast]}
              >
                {block}
              </Text>
            ))}
          </View>

          {insight.moon && insight.transits && insight.transits.length > 0 ? (
            <View style={[styles.splitRow, isWideSplit && styles.splitRowWide]}>
              <View style={styles.splitCol}>
                <View style={styles.moonCard}>
                  <View style={styles.moonHeaderRow}>
                    <MaterialIcons name="brightness-3" size={36} color={colors.primary} />
                    <Text style={styles.moonTitle}>{insight.moon.title}</Text>
                  </View>
                  <Text style={styles.moonPhase}>{insight.moon.phaseLine}</Text>
                  <Text style={styles.moonBody}>{insight.moon.body}</Text>
                </View>
              </View>
              <View style={styles.splitCol}>
                <View style={styles.transitCard}>
                  <Text style={styles.transitTitle}>Trânsitos Planetários</Text>
                  {insight.transits.map((t, index) => {
                    const accent = transitAccentColor(t.accent);
                    const isLast = index === insight.transits!.length - 1;
                    return (
                      <View key={`${insight.id}-tr-${index}`} style={[styles.transitItem, isLast && styles.transitItemLast]}>
                        <MaterialIcons name={t.icon as keyof typeof MaterialIcons.glyphMap} size={22} color={accent} />
                        <View style={{ flex: 1, minWidth: 0 }}>
                          <Text style={[styles.transitLabel, { color: accent }]}>{t.label}</Text>
                          <Text style={styles.transitDesc}>{t.description}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          ) : null}

          {insight.oracleFeatured ? (
            <LinearGradient
              colors={[colors.primaryContainer, colors.background]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.oracleOuter}
            >
              <View style={styles.oracleInner}>
                <View style={[styles.oracleRow, isOracleWide && styles.oracleRowWide]}>
                  <View style={[styles.oracleImageWrap, isOracleWide && styles.oracleImageWrapWide]}>
                    <Image
                      source={{ uri: insight.oracleFeatured.imageUri }}
                      style={styles.oracleImage}
                      resizeMode="cover"
                      accessibilityLabel="Carta de tarô A Estrela"
                    />
                  </View>
                  <View style={styles.oracleCopy}>
                    <View>
                      <Text style={styles.oracleEyebrow}>{insight.oracleFeatured.eyebrow}</Text>
                      <Text style={styles.oracleTitle}>{insight.oracleFeatured.title}</Text>
                    </View>
                    <Text style={styles.oracleQuote}>“{insight.oracleFeatured.quote}”</Text>
                    <Pressable
                      style={styles.oracleCta}
                      onPress={handleShareOracle}
                      accessibilityRole="button"
                      accessibilityLabel={insight.oracleFeatured.ctaLabel}
                    >
                      <MaterialIcons name="auto-awesome" size={20} color={colors.onSecondary} />
                      <Text style={styles.oracleCtaText}>{insight.oracleFeatured.ctaLabel}</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </LinearGradient>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
