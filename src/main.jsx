import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import router from "./routes/route";
import { RouterProvider } from "react-router-dom";
import ContextApi from "./context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </ContextApi>
  </StrictMode>
);
