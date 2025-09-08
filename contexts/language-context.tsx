"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { translations, Translations } from "../lib/translations";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
