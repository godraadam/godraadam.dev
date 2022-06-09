export default function Footer() {
  return (
    <div
      className="flex h-fit py-2 w-full xl:absolute xl:bottom-0 border-t border-stone-600 
            bg-gray-200 dark:bg-stone-800 text-gray-700 dark:text-gray-200 justify-center 
            gap-5 text-sm font-semi items-center px-8"
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
          , hosted on{" "}
          <a className="underline" href="//github.com/godraadam/godraadam.dev">
            GitHub
          </a>{" "}
          , deployed on{" "}
          <a className="underline" href="//netlify.com/">
            Netlify
          </a>
        </span>
      </div>
    </div>
  );
}
