import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BudgetCard from '../components/BudgetCard';
import { useTransactionStore } from '../store/transactionStore';
import { useCategoryStore } from '../store/categoryStore';

export default function BudgetScreen({ navigation }: any) {
  const { transactions } = useTransactionStore();
  const { categories } = useCategoryStore();
  
  // Mock budget data - in a real app, this would come from a budget store
  const budgets = [
    { categoryName: 'Food', budgetAmount: 500, color: '#ef4444' },
    { categoryName: 'Transport', budgetAmount: 200, color: '#f97316' },
    { categoryName: 'Entertainment', budgetAmount: 150, color: '#eab308' },
    { categoryName: 'Shopping', budgetAmount: 300, color: '#22c55e' },
  ];
  
  // Calculate spent amounts from transactions
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  const monthlyTransactions = transactions.filter(t => {
    const transactionDate = new Date(t.date);
    return transactionDate.getMonth() === currentMonth && 
           transactionDate.getFullYear() === currentYear &&
           t.type === 'expense';
  });
  
  const budgetsWithSpent = budgets.map(budget => {
    const spentAmount = monthlyTransactions
      .filter(t => t.category === budget.categoryName)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    
    return { ...budget, spentAmount };
  });
  
  const totalBudget = budgets.reduce((sum, b) => sum + b.budgetAmount, 0);
  const totalSpent = budgetsWithSpent.reduce((sum, b) => sum + b.spentAmount, 0);
  const totalRemaining = totalBudget - totalSpent;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Budget Tracker</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Budget Overview */}
      <View style={styles.overview}>
        <View style={styles.overviewCard}>
          <Text style={styles.overviewLabel}>Total Budget</Text>
          <Text style={styles.overviewAmount}>${totalBudget.toFixed(2)}</Text>
        </View>
        <View style={styles.overviewCard}>
          <Text style={styles.overviewLabel}>Spent</Text>
          <Text style={[styles.overviewAmount, { color: '#ef4444' }]}>
            ${totalSpent.toFixed(2)}
          </Text>
        </View>
        <View style={styles.overviewCard}>
          <Text style={styles.overviewLabel}>Remaining</Text>
          <Text style={[
            styles.overviewAmount, 
            { color: totalRemaining >= 0 ? '#10b981' : '#ef4444' }
          ]}>
            ${Math.abs(totalRemaining).toFixed(2)}
          </Text>
        </View>
      </View>
      
      {/* Budget Categories */}
      <FlatList
        data={budgetsWithSpent}
        renderItem={({ item }) => (
          <BudgetCard
            categoryName={item.categoryName}
            budgetAmount={item.budgetAmount}
            spentAmount={item.spentAmount}
            color={item.color}
          />
        )}
        keyExtractor={(item) => item.categoryName}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
  overview: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  overviewCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  overviewLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  overviewAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  listContainer: {
    paddingBottom: 20,
  },
});