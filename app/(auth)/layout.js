import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen">
        <main className="w-full flex flex-col justify-center mx-10  md:justify-start md:w-[50%] md:mt-20">{children}</main>

        <div className="md:flex flex-col bg-primary w-[50%] hidden">
          <h1
            className={
              "text-5xl font-extrabold textGradient2 sm:text-6xl md:text-7xl text-center "
            }
          >
            MoodBoard
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center font-extrabold text-white">
            helps you track your daily mood!
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;


