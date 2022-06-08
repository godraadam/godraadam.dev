import { Outlet } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { toggle } from "./feature/darkModeSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {

  //const [darkMode, setDarkMode] = useState(false);
  const darkMode = useAppSelector((state) => state.darkMode.value);
  const dispatch = useAppDispatch();
  return (
    <section className="min-h-screen">
      <div
        className={` flex flex-col xl:flex-row bg-${
          darkMode ? "black" : "white"
        }`}
      >
        <div
          className={`xl:min-h-screen flex justify-center items-center border-b xl:border-r px-4 py-16 border-gray-600`}
        >
          <Card/>
        </div>
        <div className="flex flex-col w-full">
          <NavBar/>
          <Outlet />
        </div>
        <button className="absolute top-5 right-5">
          <div className="flex items-center justify-center">
            <span
              className="m-3 text-sm font-medium text-gray-300"
              onClick={() => dispatch(() => dispatch(toggle()))}
            >
              {!darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-700"
                >
                  <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-300"
                >
                  <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.292 4.113-9.612 9.315-9.965-3.205 2.154-5.315 5.813-5.315 9.965s2.11 7.811 5.315 9.965c-5.202-.353-9.315-4.673-9.315-9.965z" />
                </svg>
              )}
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default App;