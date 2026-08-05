import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

import {
  RiMovie2Fill,
  RiHome5Fill,
  RiMovieFill,
} from "react-icons/ri";

import {
  IoSearch,
  IoBookmarkOutline,
  IoClose,
} from "react-icons/io5";

import {
  HiFire,
  HiOutlineMenuAlt3,
} from "react-icons/hi";

import { BiCategoryAlt } from "react-icons/bi";

import { FaMoon, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <RiHome5Fill />,
    },
    {
      name: "Movies",
      path: "/movies",
      icon: <RiMovieFill />,
    },
    {
      name: "Genres",
      path: "/genres",
      icon: <BiCategoryAlt />,
    },
    {
      name: "Trending",
      path: "/trending",
      icon: <HiFire />,
    },
  ];

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* Logo */}
         

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="h-12 w-12 rounded-xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/40">

               <Logo />

            </div>

            <div>

              <h1 className="text-white font-black text-2xl tracking-[6px]">
                BANGER
              </h1>

              <p className="text-xs text-gray-400 tracking-widest">
                movie universe
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 text-sm font-semibold transition-all duration-300
              ${isActive
                    ? "text-red-500"
                    : "text-white hover:text-red-500"}`
                }
              >

                {item.icon}

                {item.name}

              </NavLink>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <button className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition">

              <SearchBar />

            </button>

            <Link
              to="/watchlist"
              className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
            >

              <IoBookmarkOutline className="text-xl text-white" />

            </Link>

            <button
              className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
            >

              <ThemeToggle
                dark={dark}
                setDark={setDark}
              />

            </button>

            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 transition rounded-full px-6 py-3 text-white flex items-center gap-2"
            >

              <FaUserCircle />

              Login

            </Link>

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenu(!menu)}
          >

            {menu ? <IoClose /> : <HiOutlineMenuAlt3 />}

          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#111] z-40 transition-all duration-500
      ${menu
            ? "translate-x-0"
            : "translate-x-full"}`}
      >

        <div className="pt-24 px-8 flex flex-col gap-8">

          {links.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenu(false)}
              className="flex items-center gap-3 text-white text-lg hover:text-red-500"
            >

              {item.icon}

              {item.name}

            </NavLink>

          ))}

          <NavLink
            to="/watchlist"
            onClick={() => setMenu(false)}
            className="flex items-center gap-3 text-white text-lg"
          >

            <IoBookmarkOutline />

            Watchlist

          </NavLink>

          <NavLink
            to="/login"
            onClick={() => setMenu(false)}
            className="bg-red-600 rounded-xl text-center py-3 text-white font-semibold"
          >

            Login

          </NavLink>

        </div>

      </div>
    </>
  );
}