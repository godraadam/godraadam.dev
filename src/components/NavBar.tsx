import { Link, NavLink } from "react-router-dom";

export default function Card() {
  return (
    <div className="flex h-fit my-5 items-center border-b border-stone-600 w-full sticky-top justify-evenly dark:bg-black">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex w-full justify-center font-bold border-b-4 border-gray-900 dark:border-gray-100"
            : "flex w-full justify-center "
        }
      >
        <div className="flex flex-row items-center m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-gray-800 dark:fill-gray-200"
          >
            <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
          </svg>
          <span className="m-2 text-sm hidden sm:block">
            Home
          </span>
        </div>
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive
            ? "flex w-full justify-center items-center font-bold border-b-4 border-gray-900 dark:border-gray-100"
            : "flex w-full justify-center items-center"
        }
      >
        <div className="flex flex-row items-center m-2">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-800 dark:fill-gray-200"
          >
            <path
              d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
              fill-rule="nonzero"
            />
          </svg>
          <span className="m-2 text-sm hidden sm:block">
            About me
          </span>
        </div>
      </NavLink>
      <NavLink
        to="cv"
        className={({ isActive }) =>
          isActive
            ? "flex w-full justify-center border-b-4 font-bold border-gray-900 dark:border-gray-100"
            : "flex w-full justify-center"
        }
      >
        <div className="flex flex-row items-center m-2">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="fill-gray-800 dark:fill-gray-200"
          >
            <path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-2 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
          </svg>
          <span className="m-2 text-sm hidden sm:block">CV</span>
        </div>
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive
            ? "flex w-full font-bold justify-center border-b-4 border-gray-900 dark:border-gray-100"
            : "flex w-full justify-center"
        }
      >
        <div className="flex flex-row items-center m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-gray-800 dark:fill-gray-200"
          >
            <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z" />
          </svg>
          <span className="m-2 text-sm hidden sm:block ">
            Contact
          </span>
        </div>
      </NavLink>
    </div>
  );
}
