import { Outlet } from "react-router-dom";
import Card from "./components/Card";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useAppSelector } from "./hooks";

function App() {
  const darkMode = useAppSelector((state) => state.darkMode.value);
  return (
    <section className="min-h-screen xl:max-h-screen">
      <div
        className={`flex flex-col xl:max-h-screen xl:flex-row bg-${
          darkMode ? "black" : "white"
        } text-gray-${darkMode ? 100 : 900}`}
      >
        <div
          className={`xl:min-h-screen flex justify-center items-center border-b xl:border-b-0 xl:border-r px-4 py-16 border-gray-600`}
        >
          <Card />
        </div>
        <div className="flex flex-col w-full max-h-scren">
          <NavBar />
          <Outlet />
        </div>
        <div className="absolute top-4 right-5">
          <DarkModeToggle />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
