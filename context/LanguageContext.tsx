import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default is zh; a ?lang=en / ?lang=zh query param overrides it,
  // so external links (e.g. LinkedIn posts) can land on a specific language.
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('lang');
      if (p === 'en' || p === 'zh') return p;
    }
    return 'zh';
  });

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};