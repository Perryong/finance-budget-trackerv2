import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';

const supabaseUrl = 'https://ilhytxiysetjxkawqeee.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsaHl0eGl5c2V0anhrYXdxZWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxOTE2OTksImV4cCI6MjA2NDc2NzY5OX0.T_RwFyrVkIEOquWrE97ebLL_qasMH5uyKmxYHlG2brs';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);

// Custom storage adapter for Expo SecureStore
const ExpoSecureStoreAdapter = {
  getItem: async (key: string) => {
    try {
      console.log('SecureStore getItem:', key);
      const result = await SecureStore.getItemAsync(key);
      console.log('SecureStore getItem result:', !!result);
      return result;
    } catch (error) {
      console.error('SecureStore getItem error:', error);
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      console.log('SecureStore setItem:', key);
      await SecureStore.setItemAsync(key, value);
      console.log('SecureStore setItem success');
    } catch (error) {
      console.error('SecureStore setItem error:', error);
    }
  },
  removeItem: async (key: string) => {
    try {
      console.log('SecureStore removeItem:', key);
      await SecureStore.deleteItemAsync(key);
      console.log('SecureStore removeItem success');
    } catch (error) {
      console.error('SecureStore removeItem error:', error);
    }
  },
};

console.log('Creating Supabase client...');

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

console.log('Supabase client created successfully');