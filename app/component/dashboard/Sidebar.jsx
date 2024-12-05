import Link from 'next/link'
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="h-screen fixed">
      <div className="flex flex-col gap-4  h-full font-bold">
        <h2 className="text-sm sm:text-2xl font-bold mb-4">MoodBoard</h2>
        <ul className="text-2xl  sm:text-lg flex-1 flex flex-col  m-auto sm:m-0 sm:px-5  w-full  gap-7 h-full">
          <li>
            <Link
              href="/dashboard"
              className="hover:text-primary flex items-center gap-2"
            >
              <MdDashboard className="text-white" />
              <span className="hidden sm:block">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-primary flex items-center gap-2"
            >
              <ImProfile />
              <span className="hidden sm:block">Profile</span>
            </Link>
          </li>
          {/* <li>
            <Link href="#" className="hover:text-primary">
              Calendar
            </Link>
          </li> */}
        </ul>
        <Link
          href="#"
          className="mb-10 text-2xl sm:text-lg flex items-center gap-2"
        >
          <TbLogout />
          <span className="hidden sm:block">Log Out</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar