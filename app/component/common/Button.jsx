import Link from 'next/link';
import React from 'react'

const Button = ({clickHandler,dark,full,text}) => {
  return (
    <button
      onClick={clickHandler}
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 " +
        (dark ? " text-white bg-indigo-600 " : " text-indigo-600 ") +
        (full ? " grid place-items-center w-full " : " w-fit")
      }
    >
      <p
        className={ "px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 " }
      >
        {text}
      </p>
    </button>
  );
}

export default Button