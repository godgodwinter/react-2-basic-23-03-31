import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import LandingRoutes from "@/routes/LandingRoutes";

const routes = [];
routes.push(...LandingRoutes);
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div data-theme="cupcake" className="min-h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
