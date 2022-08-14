import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex flex-row bg-gray-300">
      <h1 className="text-2xl text-black-700 font-black text-center px-2 py-2 m-2 ml-5">
        Legal Wiki
      </h1>
      <Search />
      <ul className="flex flex-row bg-gray-300 ml-auto">
        <li className="text-sm text-gray-700 text-center px-0.5 py-3 m-2 font-extrabold">
          <a href="">Username</a>
        </li>
        <li className="text-sm text-gray-700 text-center px-0.5 py-3 m-2 font-extrabold">
          <a href="">Help</a>
        </li>
        <li className="text-sm text-gray-700 text-center px-0.5 py-3 m-2">
          <a href="">Choose Language</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
