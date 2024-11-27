import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <header className="">AUTH HEADER </header>
      <main className="flex-1">{children}</main>
      <footer className="">AUTH FOOTER</footer>
    </>
  );
};

export default AuthLayout;
