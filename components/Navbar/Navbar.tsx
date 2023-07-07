import { useState } from "react";
import Logo from "../Logo/Logo";
import { Github, List } from "react-bootstrap-icons";
import NavLinks from "../NavLinks/NavLinks";
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";

function Navbar({ className }: { className?: string }) {
  const [show, setShow] = useState(false);

  return (
    <nav
      className={`top-0 left-0 w-full md:h-[64px]  z-50 border-b border-[#cccccc61] bg-[#ffffff3d] dark:bg-[#0f172a69] backdrop-blur px-2 flex items-center sm:px-4 py-2.5 ${className}`}
    >
      <div className="container max-w-6xl flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center justify-between w-full md:w-fit">
          <Logo />
          <div className="flex items-center justify-center gap-3 md:hidden">
            <List
              className=" w-[32px] h-[32px] cursor-pointer"
              onClick={() => setShow(!show)}
            />
            <DarkMode />
          </div>
        </div>
        {show && (
          <>
            <NavLinks />
          </>
        )}
        <div className="order-2 text-[22px] text-gray-700 dark:text-gray-200 md:flex gap-3 hidden">
          <Github />
          <DarkMode />
        </div>
        <div className="hidden md:flex w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col gap-2 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white  rounded md:text-green-400 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 dark:text-gray-200 rounded md:hover:bg-transparent md:hover:text-green-500 dark:md:hover:text-green-300 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 pl-3 pr-4 text-gray-700 dark:text-gray-200 rounded md:hover:bg-transparent md:hover:text-green-500 dark:md:hover:text-green-300 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 dark:text-gray-200 rounded md:hover:bg-transparent md:hover:text-green-500 dark:md:hover:text-green-300 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
