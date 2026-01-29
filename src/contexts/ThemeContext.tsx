import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  isHobbyMode: boolean;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHobbyMode, setIsHobbyMode] = useState(false);

  const toggleMode = () => {
    setIsHobbyMode(!isHobbyMode);
  };

  return (
    <ThemeContext.Provider value={{ isHobbyMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};