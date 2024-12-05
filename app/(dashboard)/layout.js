import { redirect } from "next/navigation";
import React from "react";
import Sidebar from "../component/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  const isAuthenticated = true;
  if (!isAuthenticated) redirect("/login");
  return (
    <div className="flex min-h-screen w-full">
      <header className=" w-[80px] py-2 sm:w-[250px] bg-primary text-white">
       <Sidebar/>
      </header>
      <main className="flex-1">{children}</main>
      {/* <footer className="">dashbaord FOOTER</footer> */}
    </div>
  );
};

export default DashboardLayout;
