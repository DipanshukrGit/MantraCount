import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FF6B00',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Jaap',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="counter" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mantras"
        options={{
          title: 'Mantras',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="book-open-page-variant" size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    height: 65,
    paddingBottom: 10,
    backgroundColor: 'transparent',
  }
});
