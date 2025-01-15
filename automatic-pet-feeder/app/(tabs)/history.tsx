import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  const data = [
    { date: '2023-10-01', time: '08:00' },
    { date: '2023-10-02', time: '12:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
    { date: '2023-10-03', time: '18:00' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>Your pet was fed at {item.date} {item.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#2D79CB',
  },
  item: {
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
