import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { SplashScreen } from '../screens/splash';

type AppRoute = 'splash' | 'login' | 'app';

// Primeira tela ao abrir o app. `splash` = fluxo com boas-vindas; `login` = acesso direto a tela de login.
const INITIAL_APP_ROUTE: AppRoute = 'login';

export function AppNavigator() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(INITIAL_APP_ROUTE);

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

  return (
    <View style={styles.appShell}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appShell: {
    flex: 1,
  },
});
