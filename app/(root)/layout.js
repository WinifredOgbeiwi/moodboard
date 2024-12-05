import React from "react";
import Navbar from "../component/landing/Navbar";
import Footer from "../component/landing/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center m-auto h-full items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
