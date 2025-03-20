import React, { createContext, useState } from 'react'
import { Children, ContextValue, Theme } from '../../App/App.types';

export const themeContext = createContext<ContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: Children) => {
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    const contextValue: ContextValue = {
        theme,
        toggleTheme
    }
  return (
      <themeContext.Provider value={contextValue}>{children}</themeContext.Provider>
  )
}