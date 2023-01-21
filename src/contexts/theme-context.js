import { useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => console.log("default toggle"),
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
