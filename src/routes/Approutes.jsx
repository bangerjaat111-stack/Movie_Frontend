import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../components/layout/Mainlayout.jsx";

import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import AllMovie from "../pages/Allmovie.jsx";
import MovieDetail from "../pages/Moviesdeatail.jsx";

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
        path: "movies",
        element: <AllMovie />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default router;