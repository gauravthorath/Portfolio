import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
const App: React.FC = () => {
  return (
    <Box>
      <RouterProvider router={router} />
      <Footer />
    </Box>
  );
};

export default App;
