import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import type { CosmicTabId } from '../components/CosmicBottomNav';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { ProfileScreen } from '../screens/profile';
import { ProfessionalServiceScreen } from '../screens/professional-service';
import { ReadingsScreen } from '../screens/readings';
import { SearchScreen } from '../screens/search';
import { SplashScreen } from '../screens/splash';
import type { ProfessionalService } from '../types/professionalService';

type AppRoute = 'splash' | 'login' | 'app';

// Primeira tela ao abrir o app. `splash` = fluxo com boas-vindas; `login` = acesso direto a tela de login.
const INITIAL_APP_ROUTE: AppRoute = 'login';

export function AppNavigator() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(INITIAL_APP_ROUTE);
  const [activeTab, setActiveTab] = useState<CosmicTabId>('home');
  const [selectedService, setSelectedService] = useState<ProfessionalService | null>(null);

  if (currentRoute === 'splash') {
    return (
      <SplashScreen
        onStartJourney={() => setCurrentRoute('app')}
        onAccessAccount={() => setCurrentRoute('login')}
      />
    );
  }

  if (currentRoute === 'login') {
    return <LoginScreen onLogin={() => setCurrentRoute('app')} />;
  }

  if (selectedService) {
    return (
      <View style={styles.appShell}>
        <ProfessionalServiceScreen service={selectedService} onBack={() => setSelectedService(null)} />
      </View>
    );
  }

  return (
    <View style={styles.appShell}>
      {activeTab === 'search' && (
        <SearchScreen activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      {activeTab === 'readings' && (
        <ReadingsScreen
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenService={(service) => setSelectedService(service)}
        />
      )}
      {activeTab === 'home' && (
        <HomeScreen activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      {activeTab === 'profile' && (
        <ProfileScreen
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={() => {
            setCurrentRoute('login');
            setActiveTab('home');
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appShell: {
    flex: 1,
  },
});
