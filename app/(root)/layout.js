import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <>
      <header className="">HOME HEADER </header>
      <main className="flex-1">{children}</main>
      <footer className="">HOME FOOTER</footer>
    </>
  );
};

export default HomeLayout;
