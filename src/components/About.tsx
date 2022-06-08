import { useEffect } from "react";
import { useAppSelector } from "../hooks";

export default function About() {
  const darkMode = useAppSelector((state) => state.darkMode.value);
  
  useEffect(() => {
      console.log(darkMode);
  }, [darkMode])
  
  return (
    <div className={`text-center text-gray-${darkMode ? 100 : 900}`}>About</div>
  );
}
