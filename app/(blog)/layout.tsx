import Appbar from "@/components/Appbar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "../globals.css"

const Layout = ({ children }: any) => {
  return (
    <>
    <Appbar />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
