"use client";
import Button from "@/app/component/common/Button";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col w-full items-center gap-4 px-5">
      <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl ">
        login
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        value={userInfo.email}
        onChange={(e) => {
          setUserInfo({ ...userInfo, email: e.target.value });
        }}
        className="w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-800 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-indigo-400"
        placeholder="Email"
      />
      <input
        value={userInfo.password}
        onChange={(e) => {
          setUserInfo({ ...userInfo, password: e.target.value });
        }}
        className="w-full  mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-indigo-400"
        placeholder="Password"
        type="password"
      />

      <Button text="submit" full />

      <div className="flex flex-col">
        <Link className="text-indigo-700" href="/login">
          <p className="text-center">FORGOT PASSWORD?</p>
        </Link>
        <p className="text-center">
          ALREADY HAVE ACCOUNT?
          <Link className="text-indigo-700 ml-2" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
