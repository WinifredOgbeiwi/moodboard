"use client";
import { fugaz } from "@/app/utils/util";
import React, { useEffect, useState } from "react";
import Calender from "../common/Calender";
import { useAuth } from "@/app/context/AuthContext";
import Loader from "../common/Loader";
import LoginPage from "@/app/(auth)/login/page";
import { redirect } from "next/navigation";

const MainPage = () => {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth();
  const [data, setData] = useState({});
  const now = new Date();

  function countValues() {
    let total_number_of_days = 0;
    let sum_moods = 0;
    for (let year in data) {
      for (let month in data[year]) {
        for (let day in data[year][month]) {
          let days_mood = data[year][month][day];
          total_number_of_days++;
          sum_moods += days_mood;
        }
      }
    }
    return {
      num_days: total_number_of_days,
      average_mood: sum_moods / total_number_of_days,
    };
  }

  const statuses = {
    ...countValues(),
    time_remaining: `${23 - now.getHours()}H ${60 - now.getMinutes()}M ${60 - now.getSeconds()}S`,
  };

  async function handleSetMood(mood) {
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    try {
      const newData = { ...userDataObj };
      if (!newData?.[year]) {
        newData[year] = {};
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {};
      }

      newData[year][month][day] = mood;
      // update the current state
      setData(newData);
      // update the global state
      setUserDataObj(newData);
      // update firebase
      const docRef = doc(db, "users", currentUser.uid);
      const res = await setDoc(
        docRef,
        {
          [year]: {
            [month]: {
              [day]: mood,
            },
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.log("Failed to set data: ", err.message);
    }
  }

  //   const statues = {
  //   num_days: 14,
  //   time_remaining: "13:14:26",
  //   date: new Date().toDateString(),
  // };
  // REMOVE STAT TO DASHBAORD LAYOUT

  const moods = {
    hbh: "🥲",
    Sad: " 😭",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };
  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return;
    }
    setData(userDataObj);
  }, [currentUser, userDataObj]);

  if (loading) {
    return <Loader />;
  }

  // if (!currentUser) {
  //   redirect("/login");
  // }
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 bg-secondary py-3">
        {Object.keys(statuses).map((status, index) => (
          <div key={index} className="text-center">
            <p className="capitalize font-medium">
              {status.replaceAll("_", " ")}
            </p>
            <p className="font-extrabold">
              {statuses[status]} {status === "num_days" ? " 🔥" : ""}
            </p>
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
            onClick={() => {
              const currentMoodValue = moodIndex + 1;
              handleSetMood(currentMoodValue);
            }}
            key={index}
            className={`flex-1 moodButton rounded-lg duration-200 bg-secondary py-5 px-10 hover:bg-primary hover:scale-105`}
          >
            <p className="text-6xl ">{moods[mood]}</p>
            <p className="font-extrabold">{mood}</p>
          </button>
        ))}
      </div>
      <div>
        <Calender completeData={data} handleSetMood={handleSetMood} />
      </div>
    </div>
  );
};

export default MainPage;
