import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  accentColor: string;
  toggleDarkMode: () => void;
  setAccentColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: true,
      accentColor: '#E85D04', // default amber-fire
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setAccentColor: (color) => set({ accentColor: color }),
    }),
    {
      name: 'wicht-theme',
    }
  )
);
