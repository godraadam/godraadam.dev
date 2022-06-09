import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex py-40 flex-col flex-grow items-center justify-center mx-auto">
      <h1
        className="font-bold text-5xl md:text-8xl"
      >
        TODO:
      </h1>
      <ul className="text-left text-md list-disc py-8">
        <li className="line-through">Make this website black</li>
        <li className="line-through">Create <Link className=" text-sky-600 dark:text-sky-300" to="404">404 page</Link></li>
        <li>Make every website black</li>
        <li>Decentralize every service</li>
        <li>Provide privacy for all</li>
        <li>Simplify everything</li>
      </ul>
    </div>
  );
}
