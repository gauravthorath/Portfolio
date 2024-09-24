import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../styles/theme";

// Define the context structure
interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to access the context easily
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

// Create a provider component
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  //   const theme = createTheme({
  //     palette: {
  //       mode: isDarkTheme ? "dark" : "light",
  //     },
  //   });

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
