import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface Category {
  id: string;
  name: string;
  color: string;
  type: 'income' | 'expense';
  user_id: string;
  is_system?: boolean;
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  addCategory: (category: Omit<Category, 'id' | 'user_id'>) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set, get) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;
      set({ categories: data || [], loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  addCategory: async (category) => {
    try {
      set({ loading: true, error: null });
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('categories')
        .insert([{
          ...category,
          user_id: userData.user.id,
        }])
        .select()
        .single();

      if (error) throw error;

      const currentCategories = get().categories;
      set({ 
        categories: [...currentCategories, data],
        loading: false 
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));