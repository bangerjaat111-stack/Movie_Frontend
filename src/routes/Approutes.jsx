import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../components/layout/Mainlayout.jsx";

import Home from "../pages/Home.jsx";
import Movie from "../pages/Movie.jsx";
import Moviesdetail from "../pages/Moviesdeatail.jsx";
import Generes from "../pages/Generes.jsx";
import Search from "../pages/Search.jsx";
import Watchlist from "../pages/Watchlist.jsx";
import Profile from "../pages/Profile.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Notfound from "../pages/Notfound.jsx";

const Approutes = createBrowserRouter([
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

export default Approutes;