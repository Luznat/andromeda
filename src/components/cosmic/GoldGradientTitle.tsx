import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, Text, View } from 'react-native';

type GoldGradientTitleProps = {
  text: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
};

/**
 * Mapeia o `gold-gradient-text` do HTML (linear 135deg #e9c349 → #ffe088).
 */
export function GoldGradientTitle({
  text,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
}: GoldGradientTitleProps) {
  if (Platform.OS === 'web') {
    return (
      <Text
        style={{
          color: '#e9c349',
          fontSize,
          lineHeight,
          fontFamily,
          fontStyle: 'italic',
          fontWeight: '700',
          letterSpacing,
          textAlign: 'center',
          textShadowColor: '#ffe088',
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 8,
        }}
      >
        {text}
      </Text>
    );
  }

  const w = 360;
  const h = lineHeight + 12;

  return (
    <MaskedView style={{ width: w, height: h, alignSelf: 'center' }} maskElement={
      <View
        style={{
          width: w,
          height: h,
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            color: '#000000',
            fontSize,
            lineHeight,
            fontFamily,
            fontStyle: 'italic',
            fontWeight: '700',
            letterSpacing,
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
      </View>
    }>
      <LinearGradient
        style={{ width: w, height: h }}
        colors={['#e9c349', '#ffe088']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
      />
    </MaskedView>
  );
}
