import React from "react";

import Hero from "../components/home/Hero";
import Trending from "../components/home/Trending";
import Popular from "../components/home/Popular";
import Toprated from "../components/home/Toprated";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Popular />
      <Toprated />
    </>
  );
}