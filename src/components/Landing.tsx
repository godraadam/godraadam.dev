export default function Landing() {
  return (
    <div
      className={`flex py-20 flex-col flex-grow items-center justify-center max-w-md mx-auto`}
    >
      <h1 className="font-extrabold text-transparent text-5xl md:text-8xl bg-clip-text 
      bg-gradient-to-r from-sky-300 to-purple-500 dark:from-purple-800 dark:to-red-400">
        TODO:
      </h1>
      <ul className="text-left text-lg md:text-xl font-mono font-bold list-disc py-8">
        <li>Decentralize every service</li>
        <li>Make every website black</li>
        <li>Provide privacy for all</li>
        <li>Simplify everything</li>
      </ul>
    </div>
  );
}
