import { Pressable, Text, View } from 'react-native';
import { ORACLE_CATEGORIES } from '../../data/oracleCategories';
import type { OracleCategory } from '../../types/oracleCategory';
import { styles, themedCategoryPalette } from './styles';

type OracleCategoriesSectionProps = {
  title: string;
  variant?: 'home' | 'search';
  onSelectCategory?: (category: OracleCategory) => void;
};

export function OracleCategoriesSection({
  title,
  variant = 'home',
  onSelectCategory,
}: OracleCategoriesSectionProps) {
  return (
    <View style={styles.sectionBlock}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.categoryGrid}>
        {ORACLE_CATEGORIES.map((category) => {
          const palette = themedCategoryPalette[variant][category.id] ?? themedCategoryPalette[variant].fallback;

          return (
            <Pressable
              key={category.id}
              style={[
                styles.categoryCard,
                { backgroundColor: palette.cardBackground, borderColor: palette.cardBorder },
              ]}
              accessibilityRole="button"
              onPress={() => onSelectCategory?.(category)}
            >
              <View
                style={[
                  styles.categoryIconWrap,
                  { backgroundColor: palette.iconBackground, borderColor: palette.iconBorder },
                ]}
              >
                <Text style={[styles.categoryIcon, { color: palette.iconColor }]}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
