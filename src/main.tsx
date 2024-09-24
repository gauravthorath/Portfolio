import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import App from "./App";
import "./styles/index.css"; // Assuming Tailwind CSS is being used
import { ThemeContextProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeContextProvider>
  </StrictMode>
);
