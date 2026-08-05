import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/Mainlayout";

import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Moviesdetail from "../pages/Moviesdetail";
import Generes from "../pages/Generes";
import Search from "../pages/Search";
import Watchlist from "../pages/Watchlist";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movie />,
      },
      {
        path: "movie/:id",
        element: <Moviesdetail />,
      },
      {
        path: "genres",
        element: <Generes />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "watchlist",
        element: <Watchlist />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

export default AppRoutes;