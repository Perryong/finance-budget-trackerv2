import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Transaction } from '../store/transactionStore';

interface TransactionCardProps {
  transaction: Transaction;
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function TransactionCard({ 
  transaction, 
  onPress, 
  onEdit, 
  onDelete 
}: TransactionCardProps) {
  const isIncome = transaction.type === 'income';
  const amount = Math.abs(transaction.amount);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftSection}>
        <View style={[
          styles.categoryIcon,
          { backgroundColor: isIncome ? '#10b981' : '#ef4444' }
        ]}>
          <Ionicons 
            name={isIncome ? 'trending-up' : 'trending-down'} 
            size={20} 
            color="white" 
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.category}>{transaction.category}</Text>
          <Text style={styles.date}>
            {new Date(transaction.date).toLocaleDateString()}
          </Text>
          {transaction.notes && (
            <Text style={styles.notes} numberOfLines={1}>
              {transaction.notes}
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.rightSection}>
        <Text style={[
          styles.amount,
          { color: isIncome ? '#10b981' : '#ef4444' }
        ]}>
          {isIncome ? '+' : '-'}${amount.toFixed(2)}
        </Text>
        
        <View style={styles.actions}>
          {onEdit && (
            <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
              <Ionicons name="pencil" size={16} color="#6b7280" />
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
              <Ionicons name="trash" size={16} color="#ef4444" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  notes: {
    fontSize: 12,
    color: '#9ca3af',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 4,
    marginLeft: 8,
  },
});