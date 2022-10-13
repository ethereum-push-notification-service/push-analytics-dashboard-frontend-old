import { useEffect, useState, useContext, createContext } from 'react';

const defaultTheme = { isDarkMode: false };

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    if (isDarkMode) {
      setDarkMode(!isDarkMode);
      localStorage.setItem('darkMode', !isDarkMode);
    } else {
      setDarkMode(!isDarkMode);
      localStorage.setItem('darkMode', !isDarkMode);
    }
  };

  useEffect(() => {
    (async () => {
      const darkMode = localStorage.getItem('darkMode');
      if (darkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    })();
  }, []);
  return <ThemeContext.Provider value={{ isDarkMode, darkModeToggle }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
