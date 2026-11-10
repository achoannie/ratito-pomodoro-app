import { create } from 'zustand';
import { login as loginService, logout as logoutService, register as registerService } from '../services/authService';
import type { User } from '../types/User';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  devLogin: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const user = await loginService(email, password);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  register: async (name, email, password)  => {
    set({ isLoading: true });
    try {
      const user = await registerService(name, email, password);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  logout: async () => {
    await logoutService();
    set({ user: null, isAuthenticated: false });
  },
  devLogin: ()=> {
    set({
      user: {id: 'demo', name: "Demo", email: "demo@ratito.app", token: 'demo-token'},
      isAuthenticated: true,
    })
  }
}));
