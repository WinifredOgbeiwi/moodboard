"use client"
import { fugaz } from "@/app/utils/util";
import React from "react";
import Calender from "../common/Calender";

const MainPage = () => {
  const statues = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };
  // REMOVE STAT TO DASHBAORD LAYOUT

  // const moods = {
  //   happy: 5,
  //   sad: 3,
  //   neutral: 2,
  //   angry: 1,
  // }
    const moods = {
      hbh: "🥲",
      Sad: " 😭",
      Existing: "😶",
      Good: "😊",
      Elated: "😍",
    };
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 bg-secondary py-3">
        {Object.keys(statues).map((status, statusindex) => (
          <div key={statusindex} className="text-center">
            <p className="capitalize font-medium">
              {status.replaceAll("_", " ")}
            </p>
            <p className="font-extrabold">{statues[status]}</p>
          </div>
        ))}
        {/* main */}
      </div>
      <h2 className="text-center text-3xl md:text-5xl font-black my-12">
        How do you
        <span className={`textGradient ${fugaz.className}`}> feel</span> today?
      </h2>

      {/* <div className=" mx-10 grid grid-cols-2 md:grid-cols-5 gap-4"> */}
      <div className=" mx-10 mb-7 flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, index) => (
          <button
            key={index}
            className={`flex-1 moodButton rounded-lg duration-200 bg-secondary py-5 px-10 hover:bg-primary hover:scale-105`}
          >
            <p className="text-6xl ">{moods[mood]}</p>
            <p className="font-extrabold">{mood}</p>
          </button>
        ))}
      </div>
      <div>
        <Calender />
      </div>
    </div>
  );
};

export default MainPage;
