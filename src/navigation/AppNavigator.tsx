import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import type { CosmicTabId } from '../components/CosmicBottomNav';
import { getCosmicInsightById } from '../data/cosmicInsights';
import { HomeScreen } from '../screens/home';
import { CosmicInsightScreen } from '../screens/cosmic-insight';
import { LoginScreen } from '../screens/login';
import { ProfileScreen } from '../screens/profile';
import { ProfessionalServiceScreen } from '../screens/professional-service';
import { MessagesScreen } from '../screens/messages';
import { ReadingsScreen } from '../screens/readings';
import { SearchScreen } from '../screens/search';
import { SplashScreen } from '../screens/splash';
import { ChatScreen } from '../screens/chat';
import type { CosmicInsight } from '../types/cosmicInsight';
import type { MessageThreadPreview } from '../types/messageThread';
import type { ProfessionalService } from '../types/professionalService';

type AppRoute = 'splash' | 'login' | 'app';

// Primeira tela ao abrir o app. `splash` = fluxo com boas-vindas; `login` = acesso direto a tela de login.
const INITIAL_APP_ROUTE: AppRoute = 'login';

export function AppNavigator() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(INITIAL_APP_ROUTE);
  const [activeTab, setActiveTab] = useState<CosmicTabId>('home');
  const [selectedService, setSelectedService] = useState<ProfessionalService | null>(null);
  const [insight, setInsight] = useState<CosmicInsight | null>(null);
  const [activeChatThread, setActiveChatThread] = useState<MessageThreadPreview | null>(null);

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

  if (insight) {
    return (
      <View style={styles.appShell}>
        <CosmicInsightScreen insight={insight} onBack={() => setInsight(null)} />
      </View>
    );
  }

  if (selectedService) {
    return (
      <View style={styles.appShell}>
        <ProfessionalServiceScreen service={selectedService} onBack={() => setSelectedService(null)} />
      </View>
    );
  }

  if (activeChatThread) {
    return (
      <View style={styles.appShell}>
        <ChatScreen thread={activeChatThread} onBack={() => setActiveChatThread(null)} />
      </View>
    );
  }

  return (
    <View style={styles.appShell}>
      {activeTab === 'search' && (
        <SearchScreen activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      {activeTab === 'messages' && (
        <MessagesScreen
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenThread={(thread) => {
            setInsight(null);
            setSelectedService(null);
            setActiveChatThread(thread);
          }}
        />
      )}
      {activeTab === 'readings' && (
        <ReadingsScreen
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenService={(service) => {
            setInsight(null);
            setActiveChatThread(null);
            setSelectedService(service);
          }}
        />
      )}
      {activeTab === 'home' && (
        <HomeScreen
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenService={(service) => {
            setInsight(null);
            setActiveChatThread(null);
            setSelectedService(service);
          }}
          onOpenInsight={(id) => {
            const next = getCosmicInsightById(id);
            if (next) {
              setSelectedService(null);
              setActiveChatThread(null);
              setInsight(next);
            }
          }}
        />
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
