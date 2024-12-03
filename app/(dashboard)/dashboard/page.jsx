import LoginPage from "@/app/(auth)/login/page";
import MainPage from "@/app/component/dashboard/MainPage";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Moodboard · Dashbaord",
  description: "Track your daily mood everyday",
};
const Dashbaord = () => {
  // const isAuthenticated = false; // Add authentication logic here
  // if (!isAuthenticated) redirect('/login' );
  return <main>
    <MainPage /> {/* Add your dashboard components here */}
  </main>;
};

export default Dashbaord;
