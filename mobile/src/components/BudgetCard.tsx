import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BudgetCardProps {
  categoryName: string;
  budgetAmount: number;
  spentAmount: number;
  color: string;
}

export default function BudgetCard({ 
  categoryName, 
  budgetAmount, 
  spentAmount, 
  color 
}: BudgetCardProps) {
  const percentage = budgetAmount > 0 ? (spentAmount / budgetAmount) * 100 : 0;
  const remaining = budgetAmount - spentAmount;
  
  const getStatusColor = () => {
    if (percentage >= 100) return '#ef4444';
    if (percentage >= 80) return '#f59e0b';
    if (percentage >= 60) return '#eab308';
    return '#10b981';
  };

  const getStatusIcon = () => {
    if (percentage >= 100) return 'alert-circle';
    if (percentage >= 80) return 'warning';
    return 'checkmark-circle';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.categoryInfo}>
          <View style={[styles.colorIndicator, { backgroundColor: color }]} />
          <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
        <Ionicons 
          name={getStatusIcon()} 
          size={20} 
          color={getStatusColor()} 
        />
      </View>
      
      <View style={styles.amounts}>
        <Text style={styles.spentAmount}>
          ${spentAmount.toFixed(2)} spent
        </Text>
        <Text style={styles.budgetAmount}>
          of ${budgetAmount.toFixed(2)}
        </Text>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${Math.min(percentage, 100)}%`,
                backgroundColor: getStatusColor()
              }
            ]} 
          />
        </View>
        <Text style={[styles.percentage, { color: getStatusColor() }]}>
          {percentage.toFixed(0)}%
        </Text>
      </View>
      
      <Text style={[
        styles.remaining,
        { color: remaining >= 0 ? '#10b981' : '#ef4444' }
      ]}>
        {remaining >= 0 ? `$${remaining.toFixed(2)} remaining` : `$${Math.abs(remaining).toFixed(2)} over budget`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  amounts: {
    marginBottom: 12,
  },
  spentAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  budgetAmount: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  percentage: {
    fontSize: 12,
    fontWeight: '600',
    minWidth: 35,
    textAlign: 'right',
  },
  remaining: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});