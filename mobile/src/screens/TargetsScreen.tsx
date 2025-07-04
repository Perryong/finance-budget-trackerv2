import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TargetsScreen() {
  // Mock financial targets data
  const targets = [
    {
      id: '1',
      name: 'Emergency Fund',
      targetAmount: 10000,
      currentAmount: 6500,
      category: 'Savings',
      color: '#10b981',
      icon: 'shield-checkmark',
    },
    {
      id: '2',
      name: 'Vacation Fund',
      targetAmount: 3000,
      currentAmount: 1200,
      category: 'Travel',
      color: '#3b82f6',
      icon: 'airplane',
    },
    {
      id: '3',
      name: 'New Car',
      targetAmount: 25000,
      currentAmount: 8500,
      category: 'Transportation',
      color: '#8b5cf6',
      icon: 'car-sport',
    },
  ];

  const renderTargetCard = (target: any) => {
    const progress = (target.currentAmount / target.targetAmount) * 100;
    const remaining = target.targetAmount - target.currentAmount;

    return (
      <View key={target.id} style={styles.targetCard}>
        <View style={styles.targetHeader}>
          <View style={styles.targetInfo}>
            <View style={[styles.iconContainer, { backgroundColor: target.color }]}>
              <Ionicons name={target.icon} size={24} color="white" />
            </View>
            <View style={styles.targetDetails}>
              <Text style={styles.targetName}>{target.name}</Text>
              <Text style={styles.targetCategory}>{target.category}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.amountInfo}>
            <Text style={styles.currentAmount}>
              ${target.currentAmount.toLocaleString()}
            </Text>
            <Text style={styles.targetAmount}>
              of ${target.targetAmount.toLocaleString()}
            </Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={[target.color, target.color + '80']}
                style={[styles.progressFill, { width: `${Math.min(progress, 100)}%` }]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
            <Text style={[styles.progressText, { color: target.color }]}>
              {progress.toFixed(0)}%
            </Text>
          </View>
          
          <Text style={styles.remainingText}>
            ${remaining.toLocaleString()} remaining
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Financial Goals</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Your Progress</Text>
        <View style={styles.summaryStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Active Goals</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>$16.2K</Text>
            <Text style={styles.statLabel}>Total Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>42%</Text>
            <Text style={styles.statLabel}>Avg Progress</Text>
          </View>
        </View>
      </View>
      
      {/* Goals List */}
      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Your Goals</Text>
        {targets.map(renderTargetCard)}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 16,
  },
  goalsSection: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  targetCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  targetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  targetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  targetDetails: {
    flex: 1,
  },
  targetName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  targetCategory: {
    fontSize: 14,
    color: '#6b7280',
  },
  editButton: {
    padding: 8,
  },
  progressSection: {
    gap: 12,
  },
  amountInfo: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  currentAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
  targetAmount: {
    fontSize: 16,
    color: '#6b7280',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 40,
    textAlign: 'right',
  },
  remainingText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});

    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});