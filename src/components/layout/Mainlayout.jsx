import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Scrolltotop from "../common/Scrolltotop";

export default function Mainlayout() {
  return (
    <div className="min-h-screen bg-zinc-950">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <Scrolltotop />

    </div>
  );
}