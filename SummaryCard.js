import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SummaryCard({ title, value, color }) {
  return (
    <View style={[styles.card, { borderColor: color || '#333' }]}> 
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, { color: color || '#333' }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 8, borderWidth: 2, margin: 8, backgroundColor: '#fff', alignItems: 'center', minWidth: 120 },
  title: { fontSize: 16, color: '#666' },
  value: { fontSize: 22, fontWeight: 'bold', marginTop: 4 },
});