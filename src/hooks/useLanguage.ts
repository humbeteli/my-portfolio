import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    return {
      language: 'az' as const,
      setLanguage: () => {},
      t: translations.az,
    };
  }

  return {
    ...context,
    t: translations[context.language],
  };
};
