"use client"; // MUST be the first line

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </>
  );
}