import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function NotFound() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    //set dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white dark:bg-black dark:text-gray-100 text-gray-900">
      <div className="absolute top-4 left-5">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="text-6xl font-mono font-bold">404</div>
      <div className="flex font-mono font-medium text-gray-500 dark:text-gray-400 gap-3">
        <span>You should not be here.</span>
        <Link to="/" className="underline font-mono text-">
          Go back!
        </Link>
      </div>
    </div>
  );
}
