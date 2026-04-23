import { useFonts } from 'expo-font';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { Manrope_400Regular, Manrope_500Medium, Manrope_700Bold } from '@expo-google-fonts/manrope';
import { NotoSerif_700Bold_Italic } from '@expo-google-fonts/noto-serif';
import { GoldGradientTitle } from '../../components/cosmic/GoldGradientTitle';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { colors } from '../../theme/colors';
import { FONTS, styles } from './styles';

type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const { width: windowWidth } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    NotoSerif_700Bold_Italic,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
  });

  const ring = windowWidth >= 768 ? 160 : 128;
  const iconSize = windowWidth >= 768 ? 64 : 56;
  const titleSize = windowWidth >= 768 ? 56 : 48;
  const titleLine = Math.round(titleSize * 1.15);
  const titleTracking = titleSize * 0.2;

  if (!fontsLoaded) {
    return (
      <View style={styles.root}>
        <CosmicScreenBackground />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <CosmicScreenBackground />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main}>
          <View style={styles.logoBlock}>
            <View style={[styles.ringWrap, { width: ring, height: ring }]}>
              <View
                style={[
                  styles.ringOuter,
                  {
                    width: ring,
                    height: ring,
                    borderRadius: ring / 2,
                  },
                ]}
              />
              <View
                style={[
                  styles.ringInner,
                  {
                    top: 16,
                    left: 16,
                    right: 16,
                    bottom: 16,
                    borderRadius: 9999,
                  },
                ]}
              />
              <Text
                style={[
                  styles.cosmicIcon,
                  { fontSize: iconSize, lineHeight: iconSize + 4 },
                ]}
                accessible={false}
              >
                ✦
              </Text>
            </View>
            <View style={styles.titleGap}>
              <GoldGradientTitle
                text="Andrômeda"
                fontFamily={FONTS.headline}
                fontSize={titleSize}
                lineHeight={titleLine}
                letterSpacing={titleTracking}
              />
            </View>
            <Text style={styles.tagline}>Conectando mundos, iluminando caminhos.</Text>
          </View>

          <View style={[styles.ctaSection, styles.ctaSectionGap]}>
            <Pressable
              style={styles.submitButton}
              onPress={onLogin}
              accessibilityLabel="Entrar"
            >
              <Text style={styles.submitText}>Iniciar jornada</Text>
            </Pressable>
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
