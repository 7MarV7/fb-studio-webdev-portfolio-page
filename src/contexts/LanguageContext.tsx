
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
  // Initialize with defaultLanguage. This ensures server and initial client render match.
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the initial mount.
    setIsClientMounted(true); // Indicate that the client has mounted.

    const storedLang = localStorage.getItem('appLanguage') as Language | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'de')) {
      if (language !== storedLang) { // Check if it's different from the initial default
        setLanguageState(storedLang);
      }
    } else {
      // If no valid language is stored, or it's invalid, ensure the default is in localStorage for next time.
      // This also sets it if localStorage was empty.
      localStorage.setItem('appLanguage', defaultLanguage);
    }
    // Only depend on defaultLanguage. This effect primarily syncs with localStorage on initial mount.
  }, [defaultLanguage]); 

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Ensure localStorage is only accessed client-side.
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', lang);
    }
  };

  const t = (key: string, replacements: Record<string, string> = {}): string => {
    // Determine the language to use for translation.
    // Before client mount, use defaultLanguage to match server.
    // After client mount, use the current `language` state which might have been updated from localStorage.
    const currentLang = isClientMounted ? language : defaultLanguage;
    
    let translatedString = translations[key]?.[currentLang] || translations[key]?.[defaultLanguage] || key;

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
