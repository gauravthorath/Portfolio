// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Define your light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0177b5",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    // Add other palette options as needed
  },
});

// Define your dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#424242",
    },
    // Add other palette options as needed
  },
});
