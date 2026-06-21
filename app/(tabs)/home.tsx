import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
    Vibration.vibrate(15);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(c => c - 1);
      Vibration.vibrate(10);
    }
  };

  const reset = () => {
    setCount(0);
    Vibration.vibrate([0, 50, 50, 50]);
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/counter_bg.png')} 
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Daily Jaap</Text>
        </View>

        <View style={styles.counterWrapper}>
          <BlurView intensity={60} tint="light" style={styles.counterCircle}>
            <Text style={styles.countText}>{count}</Text>
          </BlurView>
        </View>

        <BlurView intensity={80} tint="dark" style={styles.controlsContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={decrement}>
            <MaterialCommunityIcons name="minus" size={32} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.mainButton} onPress={increment}>
            <Text style={styles.mainButtonText}>Count</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconButton} onPress={reset}>
            <MaterialCommunityIcons name="refresh" size={28} color="#fff" />
          </TouchableOpacity>
        </BlurView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
  } as any,
  counterWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  counterCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  countText: {
    fontSize: 96,
    fontWeight: '900',
    color: '#fff',
    textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  } as any,
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 90, // Increased margin to move buttons up and clear the tab bar
  },
  iconButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    boxShadow: '0px 4px 8px rgba(255, 107, 0, 0.4)',
    elevation: 5,
  } as any,
  mainButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
