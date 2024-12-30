'use client'
import React, { useState } from "react";

const CommonSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");
  const options = ["Apple", "banana", "chips"];
  return (
    <div>
      {/* dropdown - btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="mx-auto  flex w-72 items-center justify-between rounded-md bg-white px-6 py-2 border"
      >
        <h1 className="font-medium text-gray-600">{selectedValue}</h1>
        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10L12 15L17 10"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      {/* dropdown - options  */}
      <div
        className={`${
          isOpen ? "visible top-0 opacity-100 overflow-hidden" : "invisible -top-4 opacity-0"
        } relative mx-auto my-4 w-72 rounded-md py-4 border text-white duration-300 overflow-hidden -mb-24 bg-red-500`}
      >
        {options?.map((option, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setSelectedValue(e.target.textContent);
              setIsOpen(false);
            }}
            className="px-6 py-2 text-black hover:bg-gray-100 overflow-hidden"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonSelect;