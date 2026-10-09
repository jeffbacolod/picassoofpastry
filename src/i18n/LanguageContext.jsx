import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();
const STORAGE_KEY = 'pop-lang';
const DEFAULT_LANG = 'en';

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && translations[stored] ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  const switchLang = useCallback((newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // storage unavailable — language still switches for this visit
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', translations[lang]?.html_lang || lang);

    const title = translations[lang]?.meta_title || translations.en.meta_title;
    const desc = translations[lang]?.meta_description || translations.en.meta_description;

    document.title = title;

    const setMeta = (selector, content) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);
  }, [lang]);

  const t = useCallback((key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
