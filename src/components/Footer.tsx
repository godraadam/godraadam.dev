import { useAppSelector } from "../hooks";

export default function Footer() {
  const darkMode = useAppSelector((state) => state.darkMode.value);

  return (
    <div
      className={`flex h-10 w-full xl:absolute xl:bottom-0 border-t border-gray-600 bg-gray-${
        darkMode ? 900 : 200
      } text-gray-${
        darkMode ? 400 : 500
      } justify-center gap-5 text-sm font-semi items-center px-8`}
    >
      <div className="w-full text-right">godraadam 2022</div>
      <div className="text-right">|</div>
      <div className="w-full text-left">
        <span>
          created by me, using{" "}
          <a className="underline" href="//reactjs.org/">
            React
          </a>{" "}
          and{" "}
          <a className="underline" href="//tailwindcss.com/">
            Tailwind
          </a>{" "}
          , deployed on{" "}
          <a className="underline" href="//netlify.com/">
            Netlify
          </a>{" "}
        </span>
      </div>
    </div>
  );
}
