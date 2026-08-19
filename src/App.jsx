import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return <RouterProvider router={AppRoutes} />;
}