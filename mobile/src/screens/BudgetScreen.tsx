import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function BudgetScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Budget</Text>
        <Text style={styles.subtitle}>Coming Soon</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Budget tracking features will be available in the next update.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});