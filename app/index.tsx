import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../assets/images/sadhu_baba.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.spacer} />
        
        <BlurView intensity={80} tint="dark" style={styles.contentCard}>
          <Text style={styles.title}>MantraCount</Text>
          <Text style={styles.subtitle}>Discover Your Inner Peace</Text>
          
          <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={styles.buttonText}>Begin Journey</Text>
          </TouchableOpacity>
        </BlurView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  spacer: {
    flex: 1,
  },
  contentCard: {
    padding: 32,
    borderRadius: 30,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 8,
    textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)',
  } as any,
  subtitle: {
    fontSize: 18,
    color: '#e0e0e0',
    marginBottom: 40,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    boxShadow: '0px 4px 10px rgba(255, 107, 0, 0.5)',
    elevation: 8,
  } as any,
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});
