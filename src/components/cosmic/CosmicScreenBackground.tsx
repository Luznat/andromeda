import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { DimensionValue } from 'react-native';
import { colors, gradients } from '../../theme/colors';

const STAR_POSITIONS: Array<{ top: DimensionValue; left: DimensionValue; key: string }> = [
  { key: 'a', top: '4%', left: '12%' },
  { key: 'b', top: '7%', left: '44%' },
  { key: 'c', top: '5%', left: '78%' },
  { key: 'd', top: '11%', left: '28%' },
  { key: 'e', top: '14%', left: '88%' },
  { key: 'f', top: '18%', left: '6%' },
  { key: 'g', top: '22%', left: '56%' },
  { key: 'h', top: '26%', left: '92%' },
  { key: 'i', top: '31%', left: '18%' },
  { key: 'j', top: '35%', left: '72%' },
  { key: 'k', top: '38%', left: '38%' },
  { key: 'l', top: '42%', left: '84%' },
  { key: 'm', top: '48%', left: '8%' },
  { key: 'n', top: '52%', left: '50%' },
  { key: 'o', top: '55%', left: '24%' },
  { key: 'p', top: '60%', left: '68%' },
  { key: 'q', top: '64%', left: '94%' },
  { key: 'r', top: '70%', left: '14%' },
  { key: 's', top: '74%', left: '46%' },
  { key: 't', top: '78%', left: '78%' },
  { key: 'u', top: '82%', left: '32%' },
  { key: 'v', top: '86%', left: '58%' },
  { key: 'w', top: '90%', left: '12%' },
  { key: 'x', top: '92%', left: '90%' },
];

const NEBULA_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC-9kXUCus4d44JyHdzgY281_U6gJ5CCIL2_fJpaD2DuMyHnabYrdKAEWNd3bi3W8LE7pAoQ2iskPT-L5MpygtBCxNrYpJa6rM0-zMUSV2tZryRz76b2PLq0GvaO3P346cFOv17pakwt8CFqwHrkcQLzBqPrRK4vWTSWQKMawpCWbp1lKM6Ifb0hID9eagkKbBn-cQT9ipQnf5w7xcT0eiB7QtP3Ae_5zZKbAZo-uv2Y7K4uAW0qiV2ck-SvCgsyb8tWeE6w2_iJlw';
const STARRY_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDjVhY8H246cJYhFU8jfYOLaA2jDKDHe6yv2DWjhYW5UA35aqz61fUim5V2JpFt3Ti9CgSx-IrCO4Co5-z_kvfVeY6MRgH4i7AbLsXMCVxVJJDrH8EKZ_JhRdLa5dovix_hDcrc7CdpzfJWYqftO11PSB8BC23fYOPHWKf-GkF0fOirpL0PGC_oSnNpy2r1lYnqAzaCawDEvvGhFYwL_LXSMEfdIXdMKIHrygHeQLfBiOIIcknzI8yTSa43M7U6ACAj1gZ7dqSimKE';

export type CosmicScreenBackgroundProps = {
  variant?: 'default' | 'deepTop';
};

export function CosmicScreenBackground({ variant = 'default' }: CosmicScreenBackgroundProps) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const showDecorative = windowWidth >= 768;
  const centerOrb = Math.min(600, windowWidth * 0.95, windowHeight * 0.8);
  const orbOffset = -centerOrb / 2;
  const isDeepTop = variant === 'deepTop';

  return (
    <>
      <LinearGradient
        colors={isDeepTop ? gradients.cosmicAuroraDeepTop : gradients.cosmicAuroraDefault}
        locations={isDeepTop ? [0, 0.32, 0.62, 1] : [0, 0.55, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.aurora}
      />
      {STAR_POSITIONS.map((p) => (
        <View
          key={p.key}
          style={[
            styles.star,
            {
              top: p.top,
              left: p.left,
              opacity: isDeepTop ? 0.08 : 0.1,
            },
          ]}
        />
      ))}
      {!isDeepTop && <View style={styles.centerBlob} pointerEvents="none" />}
      {!isDeepTop && (
        <View
          pointerEvents="none"
          style={[
            styles.centerBlurOrb,
            {
              width: centerOrb,
              height: centerOrb,
              borderRadius: centerOrb / 2,
              top: '50%',
              left: '50%',
              marginLeft: orbOffset,
              marginTop: orbOffset,
            },
          ]}
        />
      )}
      {isDeepTop && (
        <LinearGradient
          colors={gradients.cosmicTopScrim}
          locations={[0, 0.45, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.topScrim}
          pointerEvents="none"
        />
      )}
      {showDecorative && (
        <>
          <View style={styles.decorativeImageLeft} pointerEvents="none">
            <Image
              source={{ uri: NEBULA_IMAGE }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
          </View>
          <View style={styles.decorativeImageRight} pointerEvents="none">
            <Image
              source={{ uri: STARRY_IMAGE }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
          </View>
        </>
      )}
      <LinearGradient
        colors={gradients.cosmicBottomFade}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.bottomFade}
        pointerEvents="none"
      />
    </>
  );
}

const styles = StyleSheet.create({
  aurora: {
    ...StyleSheet.absoluteFillObject,
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
  centerBlob: {
    position: 'absolute',
    left: '50%',
    top: '26%',
    width: 360,
    height: 360,
    marginLeft: -180,
    borderRadius: 180,
    backgroundColor: colors.primaryGlowOrb,
  },
  centerBlurOrb: {
    position: 'absolute',
    backgroundColor: colors.primaryGlowOrbSoft,
  },
  topScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    zIndex: 3,
  },
  bottomFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 128,
    zIndex: 4,
  },
  decorativeImageLeft: {
    position: 'absolute',
    top: 80,
    left: '6%',
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    opacity: 0.2,
  },
  decorativeImageRight: {
    position: 'absolute',
    bottom: 160,
    right: '8%',
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: 'hidden',
    opacity: 0.2,
  },
});
