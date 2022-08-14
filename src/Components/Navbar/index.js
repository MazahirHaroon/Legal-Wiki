import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex flex-row bg-gray-300">
      <div className="text-2xl text-black-700 font-black text-center px-2 py-2 m-2 ml-5">
        Legal Wiki
      </div>
      <Search />
      <div className="text-sm text-gray-700 text-center px-0.5 py-3 m-2 font-extrabold ml-auto">
        Username
      </div>
      <div className="text-sm text-gray-700 text-center px-0.5 font-extrabold py-3 m-2">
        Help
      </div>
      <div className="text-sm text-gray-700 text-center px-0.5 py-3 m-2">
        Choose Language
      </div>
    </nav>
  );
}

export default Navbar;
