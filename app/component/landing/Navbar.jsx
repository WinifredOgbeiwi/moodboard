import React from 'react'
import Button from '../common/Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">Moodboard</h1>
      <nav className="flex gap-4">
        <Link href={"/dashboard"}>
          <Button text="Login" full={true} dark={false} />
        </Link>
        <Link href={"/register"}>
          <Button text="Register" full={true} dark={true} />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar