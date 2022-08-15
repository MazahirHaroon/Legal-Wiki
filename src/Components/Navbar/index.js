import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="bg-gray-300 px-2 py-2">
      <div className="flex justify-between items-center mx-auto px-5">
        <div className="flex items-center">
          <h1 className="self-center text-xl text-black-700 font-black whitespace-nowrap">
            Legal Wiki
          </h1>
          <Search />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-2 mt-4 bg-gray-300 rounded-lg border border-gray-100 text-gray-700 text-sm md:text-base md:flex-row md:space-x-6 md:mt-0 text-sm md:text-xl md:font-medium md:border-0">
            <li className="text-center self-center font-extrabold">
              <a
                href="#"
                class="block text-black rounded md:bg-transparent md:text-black-700 md:hover:underline md:hover:underline-offset-8 md:p-0"
                aria-current="page"
              >
                Username
              </a>
            </li>
            <li className="text-center self-center font-extrabold">
              <a
                href="#"
                class="block text-black rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:underline md:hover:underline-offset-8 md:p-0"
                aria-current="page"
              >
                Help
              </a>
            </li>
            <li className="text-center self-center">
              <a
                href="#"
                class="block text-black rounded hover:bg-black md:hover:bg-transparent md:border-0 md:p-0"
                aria-current="page"
              >
                Choose Language
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
