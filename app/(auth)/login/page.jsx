"use client";
import Button from "@/app/component/common/Button";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [authenticating, setAuthenticating] = useState(false);
  const { login } = useAuth();
  const handleSubmit = async () => {
    if (!email || !password || password.length < 6) {
      return;
    }
    setAuthenticating(true);
    try {
      console.log("Logging in existing user");
      await login(userInfo.email, userInfopassword);
    } catch (err) {
      console.log(err.message);
    } finally {
      setAuthenticating(false);
    }
  };
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
        className="w-full mx-auto px-3 duration-200 hover:border-primary focus:border-primary py-2 sm:py-3 border border-solid border-primary rounded-lg outline-primary"
        placeholder="Email"
      />
      <input
        value={userInfo.password}
        onChange={(e) => {
          setUserInfo({ ...userInfo, password: e.target.value });
        }}
        className="w-full  mx-auto px-3 duration-200 hover:border-primary focus:border-primary py-2 sm:py-3 border border-solid border-primary rounded-lg outline-primary"
        placeholder="Password"
        type="password"
      />

      <Button
        clickHandler={handleSubmit}
        text={authenticating ? "Submitting" : "Submit"}
        full
        dark
      />

      <div className="flex justify-between w-full max-[900px]:flex-col max-[900px]:justify-center">
        <Link className="text-primary" href="/login">
          <p className="text-center hover:border-b-2 border-primary">
            Forgot Password?
          </p>
        </Link>
        <p className="text-center">
          Don&#39;t have an account?
          <Link
            className="text-primary ml-2 hover:border-b-2 border-primary"
            href="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
