import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '@/types';

interface LanguageStore {
  lang: Language;
  direction: 'rtl' | 'ltr';
  toggle: () => void;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      lang: 'ar',
      direction: 'rtl',
      toggle: () =>
        set((state) => {
          const newLang = state.lang === 'ar' ? 'en' : 'ar';
          const newDir = newLang === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.lang = newLang;
          document.documentElement.dir = newDir;
          return { lang: newLang, direction: newDir };
        }),
      setLang: (lang) => {
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
        set({ lang, direction: dir });
      },
    }),
    {
      name: 'wicht-language',
    }
  )
);
