import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    if (storedTheme) {
      setIsDarkTheme(storedTheme === "true");
    } else {
      const userPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkTheme(userPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDarkTheme", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDarkTheme", "false");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
