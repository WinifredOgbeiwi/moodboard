"use client";
import Button from "@/app/component/common/Button";
import Link from "next/link";
import React from "react";
const RegisterPage = () => {
  const [userInfo, setUserInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col w-full items-center gap-4 px-5">
      <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl ">
        Register
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        value={userInfo.firstName}
        onChange={(e) => {
          setUserInfo({ ...userInfo, firstName: e.target.value });
        }}
        className="w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-800 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-indigo-400"
        placeholder="First Name"
      />
      <input
        value={userInfo.lastName}
        onChange={(e) => {
          setUserInfo({ ...userInfo, lastName: e.target.value });
        }}
        className="w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-800 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-indigo-400"
        placeholder="Last Name"
      />
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

      <div className="flex">
        <p className="text-center">
          DONT HAVE AN ACCOUNT?
          <Link className="text-indigo-700" href="/login">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
