"use client";

import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Pillars } from "@/components/home/pillars";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
    </>
  );
}
