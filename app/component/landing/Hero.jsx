import React from "react";

const Hero = () => {
  return (
    <div className=" p-4 sm:p-10 flex flex-col gap-4 sm:gap-10">
      <h1
        className={
          "text-5xl font-extrabold sm:text-6xl md:text-7xl text-center "} >
        <span className="textGradient text-green-400">MoodBoard</span> helps you track your
        daily mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create your mood record and see how you feel on
        <span className="font-semibold"> every day of every year.</span>
      </p>
    </div>
  );
};

export default Hero;
