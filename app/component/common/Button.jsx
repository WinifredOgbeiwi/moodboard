import Link from 'next/link';
import React from 'react'

const Button = ({clickHandler,dark,full,text}) => {
  return (
    <button
      onClick={clickHandler}
      className={
        "rounded-lg overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-primary " +
        (dark ? " text-white bg-primary " : "text-primary ") +
        (full ? " grid place-items-center w-full " : " w-fit")
      }>
      <p className={ "px-5 sm:px-10 whitespace-nowrap py-2 sm:py-3" }> {text} </p>
    </button>
  );
}

export default Button