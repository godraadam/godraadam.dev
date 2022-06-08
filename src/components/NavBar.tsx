import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function Card() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const darkMode = useAppSelector((state) => state.darkMode.value);
  
  return (
    <div className="flex h-fit border-b border-gray-600 pt-8 justify-center w-full">
      <Link to={`about`}>
        <button
          className={`p-4 ${
            selectedTabIndex === 0 &&
            (darkMode
              ? `border-b-4 border-gray-100`
              : `border-b-4 border-gray-900`)
          }`}
          onClick={() => {
            setSelectedTabIndex(0);
          }}
        >
          <span
            className={`m-3 text-sm font-medium text-gray-${
              darkMode ? 300 : 700
            }`}
          >
            About me
          </span>
        </button>
      </Link>
      <Link to="cv">
        <button
          className={`p-4 ${
            selectedTabIndex === 1 &&
            (darkMode
              ? `border-b-4 border-gray-100`
              : `border-b-4 border-gray-900`)
          }`}
          onClick={() => {
            setSelectedTabIndex(1);
          }}
        >
          <span
            className={`m-3 text-sm font-medium text-gray-${
              darkMode ? 300 : 700
            }`}
          >
            CV
          </span>
        </button>
      </Link>
      <Link to="contact">
        <button
          className={`p-4 ${
            selectedTabIndex === 2 &&
            (darkMode
              ? `border-b-4 border-gray-100`
              : `border-b-4 border-gray-900`)
          }`}
          onClick={() => {
            setSelectedTabIndex(2);
          }}
        >
          <span
            className={`m-3 text-sm font-medium text-gray-${
              darkMode ? 300 : 700
            }`}
          >
            Contact
          </span>
        </button>
      </Link>
    </div>
  );
}
