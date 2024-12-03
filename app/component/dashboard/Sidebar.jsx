import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="h-screen fixed">
      <div className="flex flex-col gap-4 p-3 h-full font-bold">
        <h2 className="text-2xl font-bold mb-4">MoodBoard</h2>
        <ul className="text-lg flex-1 flex flex-col gap-7 h-full">
          <li>
            <Link href="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary">
              Profile
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary">
              Calendar
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary">
              Profile
            </Link>
          </li>
        </ul>
        <Link href="#">Log Out</Link>
      </div>
    </div>
  );
}

export default Sidebar