import React from "react";

export default function Header() {
  const siteName = "Health Tracker";
  return (
    <header className="col-span-12 grid grid-cols-2 text-center h-12 items-center border-b-4 border-rose-600">
      <div className="text-xl">{siteName}</div>
      <nav>
        <ul className="grid grid-cols-4">
          <li className="py-2 cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-900 ">
            Track Health
          </li>
          <li className="py-2 cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-900 ">
            Dash Board
          </li>
          <li className="py-2 cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-900 ">
            Login
          </li>
          <li className="py-2 cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-900 ">
            Registration
          </li>
        </ul>
      </nav>
    </header>
  );
}
