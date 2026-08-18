import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../components/layout/Mainlayout.jsx";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

export default router;