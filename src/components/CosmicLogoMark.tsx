import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type CosmicLogoMarkProps = {
  size?: number;
  iconScale?: number;
  ringInset?: number;
};

export function CosmicLogoMark({ size = 28, iconScale = 0.44, ringInset = 0.18 }: CosmicLogoMarkProps) {
  const innerOffset = Math.max(2, Math.round(size * ringInset));
  const iconSize = Math.max(10, Math.round(size * iconScale));
  const orbitSize = Math.max(10, Math.round(size * 0.72));
  const starSize = Math.max(8, Math.round(iconSize * 0.62));

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <View style={[styles.ringOuter, { width: size, height: size, borderRadius: size / 2 }]} />
      <View
        style={[
          styles.ringInner,
          {
            top: innerOffset,
            right: innerOffset,
            bottom: innerOffset,
            left: innerOffset,
            borderRadius: 999,
          },
        ]}
      />
      <View
        style={[
          styles.orbitArc,
          {
            width: orbitSize,
            height: orbitSize,
            borderRadius: orbitSize / 2,
          },
        ]}
      />
      <Text style={[styles.iconMain, { fontSize: iconSize, lineHeight: iconSize + 2 }]} accessible={false}>
        ✦
      </Text>
      <Text style={[styles.iconMinorTop, { fontSize: starSize, lineHeight: starSize + 1 }]} accessible={false}>
        ✦
      </Text>
      <Text style={[styles.iconMinorBottom, { fontSize: starSize - 1, lineHeight: starSize + 1 }]} accessible={false}>
        ✦
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringOuter: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.ringSecondaryBorder,
  },
  ringInner: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.ringPrimaryBorder,
  },
  orbitArc: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopColor: colors.secondary,
    borderLeftColor: 'rgba(233, 195, 73, 0.45)',
    opacity: 0.8,
    transform: [{ rotate: '-26deg' }],
  },
  iconMain: {
    color: colors.secondary,
    position: 'absolute',
    textAlign: 'center',
    textShadowColor: colors.textShadowGold,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  iconMinorTop: {
    position: 'absolute',
    top: '18%',
    right: '20%',
    color: colors.secondaryFixed,
    textShadowColor: colors.textShadowGold,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  iconMinorBottom: {
    position: 'absolute',
    bottom: '18%',
    left: '20%',
    color: colors.primary,
    textShadowColor: 'rgba(214, 186, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});
