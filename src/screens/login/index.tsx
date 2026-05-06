import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { CosmicLogoMark } from '../../components/CosmicLogoMark';
import { GoldGradientTitle } from '../../components/cosmic/GoldGradientTitle';
import { colors } from '../../theme/colors';
import { FONTS, styles } from './styles';

type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const { width: windowWidth } = useWindowDimensions();

  const ring = windowWidth >= 768 ? 160 : 128;
  const iconSize = windowWidth >= 768 ? 64 : 56;
  const titleSize = windowWidth >= 768 ? 56 : 48;
  const titleLine = Math.round(titleSize * 1.15);
  const titleTracking = titleSize * 0.14;
  const ctaLabelSize = windowWidth >= 768 ? 16 : 14;
  const ctaArrowSize = windowWidth >= 768 ? 28 : 24;

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../../assets/fundo-login.jpeg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(8,11,26,0.55)', 'rgba(8,11,26,0.68)', 'rgba(8,11,26,0.78)']}
          locations={[0, 0.48, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.backgroundOverlay}
        />
      </ImageBackground>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main}>
          <View style={styles.logoBlock}>
            <View style={[styles.ringWrap, { width: ring, height: ring }]}>
              <CosmicLogoMark size={ring} iconScale={iconSize / ring} ringInset={16 / ring} />
            </View>
            <View style={styles.titleGap}>
              <GoldGradientTitle
                text="Andrômeda"
                fontFamily={FONTS.headline}
                fontSize={titleSize}
                lineHeight={titleLine}
                letterSpacing={titleTracking}
                fontStyle="normal"
                fontWeight="500"
              />
            </View>
            <Text style={styles.tagline}>Conectando mundos, iluminando caminhos.</Text>
          </View>

          <View style={[styles.ctaSection, styles.ctaSectionGap]}>
            <View style={styles.journeyCtaWrap}>
              <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFillObject} />
              <View style={styles.journeyCtaTint} pointerEvents="none" />
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Iniciar jornada"
                onPress={onLogin}
                style={({ pressed }) => [
                  styles.journeyCtaHit,
                  pressed && styles.journeyCtaPressed,
                ]}
              >
                <Text
                  style={[
                    styles.journeyCtaLabel,
                    {
                      fontSize: ctaLabelSize,
                      letterSpacing: ctaLabelSize * 0.3,
                    },
                  ]}
                >
                  INICIAR JORNADA
                </Text>
                <MaterialIcons name="east" size={ctaArrowSize} color={colors.secondary} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerIcons}>
            <Text style={styles.footerIcon}>☾</Text>
            <View style={styles.footerDivider} />
            <Text style={styles.footerIcon}>⌖</Text>
            <View style={styles.footerDivider} />
            <Text style={styles.footerIcon}>✦</Text>
          </View>
          <Text style={styles.footerMotto}>Inspirado pelo Vazio, Guiado pelas Estrelas</Text>
        </View>
      </ScrollView>
    </View>
  );
}
