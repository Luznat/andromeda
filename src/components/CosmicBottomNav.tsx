import { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ComponentProps } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../theme/colors';

export type CosmicTabId = 'home' | 'search' | 'readings' | 'profile';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type TabConfig = {
  id: CosmicTabId;
  label: string;
  icon: MaterialIconName;
};

const TABS: TabConfig[] = [
  { id: 'home', label: 'Home', icon: 'bedtime' },
  { id: 'search', label: 'Search', icon: 'search' },
  { id: 'readings', label: 'Readings', icon: 'menu-book' },
  { id: 'profile', label: 'Profile', icon: 'person' },
];

type CosmicBottomNavProps = {
  initialTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
};

export function CosmicBottomNav({ initialTab = 'home', onTabChange }: CosmicBottomNavProps) {
  const [active, setActive] = useState<CosmicTabId>(initialTab);

  const handlePress = useCallback(
    (id: CosmicTabId) => {
      setActive(id);
      onTabChange?.(id);
    },
    [onTabChange]
  );

  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <Pressable
            key={tab.id}
            onPress={() => handlePress(tab.id)}
            style={({ pressed }) => [styles.tabWrap, isActive && styles.tabWrapActive, pressed && styles.tabPressed]}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={tab.label}
          >
            <MaterialIcons
              name={tab.icon}
              size={20}
              color={isActive ? colors.secondary : colors.textSecondary}
              style={!isActive ? styles.iconDimmed : undefined}
            />
            <Text style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.surfaceScrim,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'rgba(74, 69, 80, 0.35)',
    shadowColor: 'rgba(45, 11, 90, 0.45)',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 16,
  },
  tabWrap: {
    flex: 1,
    maxWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 999,
    gap: 0,
  },
  tabWrapActive: {
    backgroundColor: colors.primaryContainer,
    shadowColor: 'rgba(214, 186, 255, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 6,
  },
  tabPressed: {
    opacity: 0.92,
  },
  iconDimmed: {
    opacity: 0.6,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  labelActive: {
    color: colors.secondary,
  },
  labelInactive: {
    color: colors.textSecondary,
    opacity: 0.6,
  },
});
