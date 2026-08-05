import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

import {
  RiMovie2Fill,
  RiHome5Fill,
  RiMovieFill,
} from "react-icons/ri";

import {
  BiCategoryAlt,
} from "react-icons/bi";

import {
  HiFire,
  HiOutlineMenuAlt3,
} from "react-icons/hi";

import {
  IoClose,
  IoSearch,
  IoBookmarkOutline,
} from "react-icons/io5";

import {
  FaUserCircle,
  FaMoon,
} from "react-icons/fa";

export default function Navbar() {
  const navbarRef = useRef();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      {
        y: -80,
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

  const navItems = [
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
        ref={navbarRef}
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-600/40">
              <RiMovie2Fill className="text-3xl text-white" />
            </div>

            <div>

              <h1 className="text-2xl font-black tracking-[6px] text-white">
                BANGER
              </h1>

              <p className="text-xs text-gray-400">
                Movie Universe
              </p>

            </div>

          </Link>

          {/* DESKTOP */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-red-500"
                      : "text-white hover:text-red-500"
                  }`
                }
              >
                {item.icon}

                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>

              </NavLink>

            ))}

          </nav>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center gap-4">

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-red-600">
              <IoSearch />
            </button>

            <Link
              to="/watchlist"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-red-600"
            >
              <IoBookmarkOutline />
            </Link>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-red-600">
              <FaMoon />
            </button>

            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              <FaUserCircle />

              Login
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white lg:hidden"
          >
            {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 right-0 z-40 h-screen w-72 bg-[#111111] transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="pt-24 px-8">

          <div className="flex flex-col gap-7">

            {navItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-lg text-white hover:text-red-500"
              >
                {item.icon}

                {item.name}

              </NavLink>

            ))}

            <NavLink
              to="/watchlist"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-lg text-white"
            >
              <IoBookmarkOutline />

              Watchlist
            </NavLink>

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-xl bg-red-600 py-3 text-center font-semibold text-white"
            >
              Login
            </NavLink>

          </div>

        </div>

      </div>
    </>
  );
}