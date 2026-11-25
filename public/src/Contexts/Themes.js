import { createContext, useState, useContext } from "react";

import { lightTheme, darkTheme } from "../Themes/baseTheme";

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () =>
    setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }

  return context;
}