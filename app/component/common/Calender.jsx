
import { baseRating, dayList, demoData, gradients, months } from "@/app/utils/util";
import React from "react";

const Calender = (props) => {
  const year = new Date().getFullYear();

  const month = "December";
  const now = new Date();
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(year, Object.keys(month).indexOf(month) + 1, 0).getDate();
  const daysToDisplay = firstDayOfMonth + daysInMonth;
      const numRows =
        Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);
  
  return (
    <div className="mx-10 flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10">
      {[...Array(numRows).keys()].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
              let dayIndex =
                rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);

              let dayDisplay =
                dayIndex > daysInMonth
                  ? false
                  : row === 0 && dayOfWeekIndex < firstDayOfMonth
                  ? false
                  : true;

              let isToday = dayIndex === now.getDate();

              if (!dayDisplay) {
                return <div className="bg-white" key={dayOfWeekIndex} />;
              }

              let color = props.demo
                ? gradients.pink[baseRating[dayIndex]]
                : dayIndex in demoData
                ? gradients.pink[demoData[dayIndex]]
                : "white";

              return (
                <div
                  style={{ background: color }}
                  className={
                    "text-xs sm:text-sm border-2 border-solid  max-[400px]:p-0 p-2 flex items-center gap-2 justify-between rounded-lg " +
                    (isToday ? " border-primary" : " border-secondary") +
                    (color === "white" ? " text-primary" : " text-white")
                  }
                  key={dayOfWeekIndex}
                >
                  <p className="text-base text-center w-full sm:text-xl font-bold">
                    {dayIndex}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calender;
