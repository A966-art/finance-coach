import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress, color }) {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress * 100}%`, backgroundColor: color || '#4caf50' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 12, width: '100%', backgroundColor: '#eee', borderRadius: 6, overflow: 'hidden', marginVertical: 8 },
  bar: { height: '100%', borderRadius: 6 },
});