import { Pressable, Text, View } from 'react-native';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import { styles } from './styles';

type SplashScreenProps = {
  onStartJourney: () => void;
  onAccessAccount: () => void;
};

export function SplashScreen({ onStartJourney, onAccessAccount }: SplashScreenProps) {
  return (
    <View style={styles.root}>
      <CosmicScreenBackground />
      <View style={styles.content}>
        <View style={styles.brandRow}>
          <Text style={styles.brandIcon}>✦</Text>
          <Text style={styles.brand}>Andromeda</Text>
        </View>
        <Text style={styles.title}>Sua conexao com o mistico comeca aqui</Text>
        <Text style={styles.subtitle}>
          Encontre oraculistas, agende leituras e acompanhe sua jornada com clareza.
        </Text>
        <Pressable style={styles.primaryButton} onPress={onStartJourney}>
          <Text style={styles.primaryButtonText}>Iniciar jornada</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={onAccessAccount}>
          <Text style={styles.secondaryButtonText}>Acessar conta</Text>
        </Pressable>
      </View>
    </View>
  );
}
