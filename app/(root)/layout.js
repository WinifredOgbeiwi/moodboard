import React from "react";
import Navbar from "../component/landing/Navbar";
import Footer from "../component/landing/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
     <Navbar/>
      <main className="flex-1">{children}</main>
    <Footer/>
    </>
  );
};

export default HomeLayout;
