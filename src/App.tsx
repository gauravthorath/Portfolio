import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
// import Snowflakes from "./components/Snowflakes/Snowflakes";
// import Raindrops from "./components/Raindrops/Raindrops";
const App: React.FC = () => {
  return (
    <Box
      sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* <Snowflakes />
      <Raindrops /> */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
