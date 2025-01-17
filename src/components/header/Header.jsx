import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const siteName = "Health Tracker";
  return (
    <header className="col-span-12 grid grid-cols-2 text-center h-14 items-center border-b-4 border-rose-600 bg-opacity-50">
      <div className="text-xl">
        <NavLink className="transition ease-in duration-100 hover:text-cyan-300" to="/">
          {siteName}
        </NavLink>
      </div>
      <nav>
        <ul className="grid grid-cols-4">
          <li className="py-2 cursor-pointer transition ease-in-out duration-200 hover:scale-105 hover:bg-sky-900 rounded hover:text-cyan-300">
            <NavLink to="/healthTrack">
              Track Health
            </NavLink>
          </li>
          <li className="py-2 cursor-pointer transition ease-in-out duration-200 hover:scale-105 hover:bg-sky-900 rounded hover:text-cyan-300">
            <NavLink to="/dashBoard">
              Dash Board
            </NavLink>
          </li>
          <li className="py-2 cursor-pointer transition ease-in-out duration-200 hover:scale-105 hover:bg-sky-900 rounded hover:text-cyan-300">
            <NavLink to="/login">
              Login
            </NavLink>
          </li>
          <li className="py-2 cursor-pointer transition ease-in-out duration-200 hover:scale-105 hover:bg-sky-900 rounded hover:text-cyan-300">
            <NavLink to="/registration">
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
