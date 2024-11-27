import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <>
      <header className="">dashbaord HEADER </header>
      <main className="flex-1">{children}</main>
      <footer className="">dashbaord FOOTER</footer>
    </>
  );
}

export default DashboardLayout