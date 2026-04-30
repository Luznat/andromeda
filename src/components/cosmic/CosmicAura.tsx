import { memo, useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type CosmicAuraProps = {
  size: number;
  isActive: boolean;
  colors?: string[];
};

const DEFAULT_COLORS = [
  'rgba(255,224,136,0)',
  'rgba(255,224,136,0.92)',
  '#E9C349',
  'rgba(214,186,255,0.9)',
  'rgba(255,224,136,0)',
];

function CosmicAuraComponent({ size, isActive, colors }: CosmicAuraProps) {
  const rotation = useSharedValue(0);
  const pulse = useSharedValue(0);

  const palette = useMemo(
    () => (colors && colors.length >= 3 ? colors : DEFAULT_COLORS),
    [colors],
  );

  useEffect(() => {
    if (!isActive) {
      rotation.value = 0;
      pulse.value = 0;
      return;
    }

    rotation.value = withRepeat(
      withTiming(1, {
        duration: 14000, // mais lento = mais elegante
        easing: Easing.linear,
      }),
      -1,
      false,
    );

    pulse.value = withRepeat(
      withTiming(1, {
        duration: 3000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotation.value * 360}deg` },
        { scale: 1 + pulse.value * 0.04 },
      ],
      opacity: 0.6 + pulse.value * 0.2,
    };
  });

  const glowPadding = Math.max(24, Math.round(size * 0.22));
  const canvasSize = size + glowPadding * 2;
  const center = canvasSize / 2;

  const outerRadius = size * 0.42;
  const innerRadius = size * 0.35;

  const thickness = size * 0.055;

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.root, { width: size, height: size }, animatedStyle]}
    >
      <Canvas style={{ width: canvasSize, height: canvasSize }}>
        <Group>

          {/* 🌟 GLOW EXTERNO (difuso tipo energia) */}
          <Circle cx={center} cy={center} r={outerRadius} color="rgba(233,195,73,0.25)">
            <BlurMask blur={30} style="normal" />
          </Circle>

          {/* 🌟 CAMADA 1 - AURA SUAVE */}
          <Circle
            cx={center}
            cy={center}
            r={outerRadius - thickness}
            style="stroke"
            strokeWidth={thickness}
          >
            <SweepGradient c={vec(center, center)} colors={palette} />
            <BlurMask blur={18} style="normal" />
          </Circle>

          {/* 🌟 CAMADA 2 - NÚCLEO MAIS DEFINIDO */}
          <Circle
            cx={center}
            cy={center}
            r={innerRadius}
            style="stroke"
            strokeWidth={thickness * 0.7}
          >
            <SweepGradient
              c={vec(center, center)}
              colors={['rgba(255,242,179,0)', '#fff2b3', '#d6baff', 'rgba(255,242,179,0)']}
            />
            <BlurMask blur={8} style="normal" />
          </Circle>

        </Group>
      </Canvas>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
});

export const CosmicAura = memo(CosmicAuraComponent);