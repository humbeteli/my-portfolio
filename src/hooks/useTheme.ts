import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    return {
      theme: 'light' as const,
      toggleTheme: () => {},
    };
  }
  
  return context;
};
