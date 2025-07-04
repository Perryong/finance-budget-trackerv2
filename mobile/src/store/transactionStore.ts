import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  notes: string;
  type: 'income' | 'expense';
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
  addTransaction: (transaction: Omit<Transaction, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateTransaction: (id: string, updates: Partial<Transaction>) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
}

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: [],
  loading: false,
  error: null,

  fetchTransactions: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      set({ transactions: data || [], loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  addTransaction: async (transaction) => {
    try {
      set({ loading: true, error: null });
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('transactions')
        .insert([{
          ...transaction,
          user_id: userData.user.id,
        }])
        .select()
        .single();

      if (error) throw error;

      const currentTransactions = get().transactions;
      set({ 
        transactions: [data, ...currentTransactions],
        loading: false 
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  updateTransaction: async (id, updates) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('transactions')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const currentTransactions = get().transactions;
      set({
        transactions: currentTransactions.map(t => t.id === id ? data : t),
        loading: false
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  deleteTransaction: async (id) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id);

      if (error) throw error;

      const currentTransactions = get().transactions;
      set({
        transactions: currentTransactions.filter(t => t.id !== id),
        loading: false
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));