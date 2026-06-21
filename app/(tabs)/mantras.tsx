import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MANTRA_DATA = [
  { id: '1', title: 'Om Namah Shivaya', meaning: 'Adoration to Lord Shiva', image: require('../../assets/images/mantra_shiva.png') },
  { id: '2', title: 'Hare Krishna Hare Rama', meaning: 'Maha Mantra for peace and devotion', image: require('../../assets/images/mantra_krishna.png') },
  { id: '3', title: 'Om Mani Padme Hum', meaning: 'The jewel is in the lotus', image: require('../../assets/images/mantra_om.png') },
  { id: '4', title: 'Om Bhur Bhuva Swaha', meaning: 'Gayatri Mantra', image: require('../../assets/images/mantra_om.png') },
  { id: '5', title: 'Om Shanti Shanti Shanti', meaning: 'Mantra for Peace', image: require('../../assets/images/mantra_shiva.png') },
  { id: '6', title: 'Om Gan Ganapataye Namo', meaning: 'Mantra for Lord Ganesha', image: require('../../assets/images/mantra_krishna.png') },
];

export default function Mantras() {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meaning}>{item.meaning}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sacred Mantras</Text>
      </View>
      <FlatList
        data={MANTRA_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    padding: 24,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderColor: '#334155',
  } as any,
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  meaning: {
    fontSize: 14,
    color: '#94A3B8',
    lineHeight: 20,
  }
});
