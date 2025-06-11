
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations, Translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; defaultLanguage?: Language }> = ({ children, defaultLanguage = 'en' }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('appLanguage') as Language | null;
      if (storedLang && (storedLang === 'en' || storedLang === 'de')) {
        return storedLang;
      }
    }
    return defaultLanguage;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('appLanguage') as Language | null;
      if (storedLang && (storedLang === 'en' || storedLang === 'de')) {
        if (language !== storedLang) { // ensure state syncs if defaultLanguage logic ran first
          setLanguageState(storedLang);
        }
      } else {
         localStorage.setItem('appLanguage', language); // Set default if nothing is stored
      }
    }
  }, [language]);


  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', lang);
    }
  };

  const t = (key: string, replacements: Record<string, string> = {}): string => {
    let translatedString = translations[key]?.[language] || translations[key]?.['en'] || key;
    Object.keys(replacements).forEach(placeholder => {
      translatedString = translatedString.replace(`{{${placeholder}}}`, replacements[placeholder]);
    });
    return translatedString;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
