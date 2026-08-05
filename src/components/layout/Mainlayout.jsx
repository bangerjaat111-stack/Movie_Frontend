import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../layout/Navbar.jsx'
import Footer from "../layout/Footer.jsx";

export default function Mainlayout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}