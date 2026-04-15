import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5b5bf7",
    },
    secondary: {
      main: "#0ea5e9",
    },
    background: {
      default: "#f8f9ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#101828",
      secondary: "#475467",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily:
      '"Inter", "Sora", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8b9dff",
    },
    secondary: {
      main: "#22d3ee",
    },
    background: {
      default: "#070b18",
      paper: "#10172a",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#a7b3c8",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily:
      '"Inter", "Sora", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
});
