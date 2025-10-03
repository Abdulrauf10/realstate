import { Tabs } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';

import icons from '@/constants/icons';

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View style={styles.iconContainer}>
    <Image
      source={icon}
      tintColor={focused ? '#0061FF' : '#666876'}
      resizeMode="contain"
      style={styles.iconImage}
    />
    <Text
      style={[
        styles.iconText,
        focused ? styles.iconTextFocused : styles.iconTextUnfocused,
      ]}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    position: 'absolute',
    borderTopColor: '#0061FF1A',
    borderTopWidth: 1,
    minHeight: 70,
  },
  iconContainer: {
    flex: 1,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  iconTextFocused: {
    color: '#0061FF',
    fontWeight: '600',
  },
  iconTextUnfocused: {
    color: '#666876',
    fontWeight: '400',
  },
});

export default TabsLayout;
