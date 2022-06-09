import { useAppSelector } from "../hooks";

export default function Landing() {
  const darkMode = useAppSelector((state) => state.darkMode.value);
  return (
    <div className={`flex py-20 flex-col flex-grow items-center justify-center `}>
      <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-800 to-red-400">TODO:</h1>
      <ul className="text-left text-xl font-mono font-bold list-disc py-8">
      <li>Decentralize every service</li>
      <li>Make every website black</li>
      <li>Provide privacy for all</li>
      <li>Simplify everything</li>
      </ul>
    </div>
  );
}
