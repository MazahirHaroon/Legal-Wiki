import React from "react";

function SubHeading() {
  return (
    <div className="bg-gray-300 text-lg font-bold p-5 px-20">
      <div className="text-center w-50 m-auto">
        <div className="block md:flex leading-8 md:leading:1 flex-wrap justify-between">
          <div>
            <p>Location</p>
            <p className="font-normal inline-block leading-1">Kerala</p>
            <button class="bg-white inline-block hover:bg-gray-100 text-gray-800 font-semibold mx-1 px-1 md:mx-2 md:px-1 border border-gray-400 rounded shadow">
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
      </div>
    </div>
  );
}

export default SubHeading;
