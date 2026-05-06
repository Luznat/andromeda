import { Image, StyleSheet, View } from 'react-native';

const LOGO = require('../../assets/logo-andromeda.png');

type CosmicLogoMarkProps = {
  size?: number;
  /** Legacy props kept for callers; sizing uses `size`. */
  iconScale?: number;
  ringInset?: number;
};

export function CosmicLogoMark({ size = 28 }: CosmicLogoMarkProps) {
  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Image
        source={LOGO}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="Logotipo Andrômeda"
        accessibilityIgnoresInvertColors
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
