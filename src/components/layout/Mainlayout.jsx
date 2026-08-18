import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Mainlayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}