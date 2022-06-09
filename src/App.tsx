import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "./components/Card";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    //set dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])
  
  return (
    <section className="min-h-screen xl:max-h-screen">
      <div
        className="flex flex-col xl:max-h-screen xl:flex-row bg-white dark:bg-black text-gray-900 dark:text-gray-100 "
      >
        <div
          className="xl:min-h-screen flex justify-center items-center border-b xl:border-b-0 xl:border-r px-4 py-16 border-gray-600"
        >
          <Card darkMode={darkMode} />
        </div>
        <div className="flex flex-col w-full max-h-scren">
          <NavBar />
          <Outlet />
        </div>
        <div className="absolute top-4 right-5">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
