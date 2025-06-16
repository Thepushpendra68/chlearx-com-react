import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AppState, User, UserPreferences } from '@/types';

interface AppStore extends AppState {
  // Navigation
  mobileMenuOpen: boolean;
  searchOpen: boolean;
  
  // Notifications
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
    timestamp: Date;
  }>;
  
  // Modal state
  modals: Record<string, boolean>;
  
  // Additional actions
  setSidebarOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  addNotification: (notification: Omit<AppStore['notifications'][0], 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  closeAllModals: () => void;
  reset: () => void;
}

const initialState = {
  // UI State
  theme: 'system' as const,
  sidebarOpen: false,
  mobileMenuOpen: false,
  searchOpen: false,
  loading: false,
  
  // User State
  user: undefined,
  isAuthenticated: false,
  
  // Notifications
  notifications: [],
  
  // Modals
  modals: {},
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      // Theme actions
      setTheme: (theme) => set({ theme }),
      
      // Sidebar actions
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      // Mobile menu actions
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      
      // Search actions
      setSearchOpen: (open) => set({ searchOpen: open }),
      
      // Loading actions
      setLoading: (loading) => set({ loading }),
      
      // User actions
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user,
        // Apply user preferences
        ...(user?.preferences && {
          theme: user.preferences.theme,
        }),
      }),
      
      // Notification actions
      addNotification: (notification) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newNotification = {
          ...notification,
          id,
          timestamp: new Date(),
        };
        
        set((state) => ({
          notifications: [newNotification, ...state.notifications].slice(0, 5), // Keep only 5 recent notifications
        }));
        
        // Auto-remove notification after duration
        if (notification.duration !== 0) {
          setTimeout(() => {
            get().removeNotification(id);
          }, notification.duration || 5000);
        }
      },
      
      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      })),
      
      clearNotifications: () => set({ notifications: [] }),
      
      // Modal actions
      openModal: (modalId) => set((state) => ({
        modals: { ...state.modals, [modalId]: true },
      })),
      
      closeModal: (modalId) => set((state) => ({
        modals: { ...state.modals, [modalId]: false },
      })),
      
      closeAllModals: () => set({ modals: {} }),
      
      // Reset action
      reset: () => set(initialState),
    }),
    {
      name: 'chlearx-app-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Selectors for better performance
export const useTheme = () => useAppStore((state) => state.theme);
export const useUser = () => useAppStore((state) => state.user);
export const useIsAuthenticated = () => useAppStore((state) => state.isAuthenticated);
export const useLoading = () => useAppStore((state) => state.loading);
export const useSidebarOpen = () => useAppStore((state) => state.sidebarOpen);
export const useMobileMenuOpen = () => useAppStore((state) => state.mobileMenuOpen);
export const useNotifications = () => useAppStore((state) => state.notifications);
export const useModals = () => useAppStore((state) => state.modals);

// Actions selectors
export const useAppActions = () => useAppStore((state) => ({
  setTheme: state.setTheme,
  toggleSidebar: state.toggleSidebar,
  setSidebarOpen: state.setSidebarOpen,
  setMobileMenuOpen: state.setMobileMenuOpen,
  setSearchOpen: state.setSearchOpen,
  setLoading: state.setLoading,
  setUser: state.setUser,
  addNotification: state.addNotification,
  removeNotification: state.removeNotification,
  clearNotifications: state.clearNotifications,
  openModal: state.openModal,
  closeModal: state.closeModal,
  closeAllModals: state.closeAllModals,
  reset: state.reset,
})); 