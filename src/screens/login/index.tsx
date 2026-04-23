import { useFonts } from 'expo-font';
import { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
  onLogin: (email: string, profile: 'client' | 'advisor') => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const { width: windowWidth } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState<'client' | 'advisor'>('client');

  const [fontsLoaded] = useFonts({
    NotoSerif_700Bold_Italic,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
  });

  const canSubmit = useMemo(() => {
    return email.trim().length > 3 && password.trim().length >= 6;
  }, [email, password]);

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
        keyboardShouldPersistTaps="handled"
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

          <View style={[styles.formSection, styles.formSectionGap]}>
            <Text style={styles.constellationHint}>Já faz parte da constelação?</Text>
            <View style={styles.form}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="voce@email.com"
                placeholderTextColor={colors.inputPlaceholder}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
              />

              <Text style={styles.label}>Senha</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Minimo de 6 caracteres"
                placeholderTextColor={colors.inputPlaceholder}
                style={styles.input}
                secureTextEntry
              />

              <Text style={styles.label}>Eu sou</Text>
              <View style={styles.profileRow}>
                <Pressable
                  style={[
                    styles.profileButton,
                    profile === 'client' && styles.profileButtonActive,
                  ]}
                  onPress={() => setProfile('client')}
                >
                  <Text
                    style={[
                      styles.profileText,
                      profile === 'client' && styles.profileTextActive,
                    ]}
                  >
                    Cliente
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.profileButton,
                    profile === 'advisor' && styles.profileButtonActive,
                  ]}
                  onPress={() => setProfile('advisor')}
                >
                  <Text
                    style={[
                      styles.profileText,
                      profile === 'advisor' && styles.profileTextActive,
                    ]}
                  >
                    Oraculista
                  </Text>
                </Pressable>
              </View>

              <Pressable
                style={[
                  styles.submitButton,
                  !canSubmit && styles.submitButtonDisabled,
                ]}
                disabled={!canSubmit}
                onPress={() => onLogin(email, profile)}
                accessibilityLabel="Entrar"
              >
                <Text style={styles.submitText}>Entrar</Text>
                <Text style={styles.submitIcon} accessible={false}>
                  →
                </Text>
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
