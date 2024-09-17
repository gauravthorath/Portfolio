import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
