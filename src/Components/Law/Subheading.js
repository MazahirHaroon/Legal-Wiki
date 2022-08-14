import React from "react";

function SubHeading() {
  return (
    <div className="flex justify-between bg-gray-400 text-xs font-bold p-5 px-20">
      <div>
        <p>Location</p>
        <p className="font-normal inline-block">Kerala</p>
        <button class="bg-white inline-block hover:bg-gray-100 text-gray-800 font-semibold mx-2 px-1 border border-gray-400 rounded shadow">
          Change
        </button>
      </div>
      <div>
        <p>Fine</p>
        <p className="font-normal">
          <span>&#8377;</span>500
        </p>
      </div>
      <div>
        <p>Effective from</p>
        <p className="font-normal">28th October 2020</p>
      </div>
    </div>
  );
}

export default SubHeading;
