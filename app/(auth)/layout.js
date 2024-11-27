import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen">
        <main className="flex-1 w-[45%]">{children}</main>

        <div className="flex flex-col bg-indigo-500 w-[55%] pt-20">
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


