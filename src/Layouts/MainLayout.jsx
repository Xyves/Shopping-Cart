import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
