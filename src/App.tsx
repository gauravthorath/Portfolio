import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import Footer from "./components/Footer/Footer";
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
