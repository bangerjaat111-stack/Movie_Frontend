import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/Approutes";

export default function App() {
  return <RouterProvider router={AppRoutes} />;
}