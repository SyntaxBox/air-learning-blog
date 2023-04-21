import { useState } from "react";
import Logo from "../Logo/Logo";
import { Github, List } from "react-bootstrap-icons";
import NavLinks from "../NavLinks/NavLinks";
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full md:h-[64px]  z-50 border-b border-gray-200 dark:border-gray-800  backdrop-blur px-2 flex items-center sm:px-4 py-2.5 ">
      <div className="container max-w-6xl flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center justify-between w-full md:w-fit">
          <Logo />
          <List
            className="md:hidden w-[40px] h-[40px] cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        {show && (
          <>
            <NavLinks />
          </>
        )}
        <div className="order-2 text-[22px] text-gray-700 dark:text-gray-200 flex gap-3">
          <Github />
          <DarkMode />
        </div>
        <div
          className="hidden md:flex w-auto md:order-1 backdrop-blur"
          id="navbar-cta"
          >
          <ul className="flex flex-col gap-2 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 text-white  rounded md:text-green-400 md:p-0"
                aria-current="page"
                >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="block py-2 pl-3 pr-4 text-gray-700 dark:text-gray-200 rounded md:hover:bg-transparent md:hover:text-green-500 dark:md:hover:text-green-300 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className="block py-2 pl-3 pr-4 text-gray-700 dark:text-gray-200 rounded md:hover:bg-transparent md:hover:text-green-500 dark:md:hover:text-green-300 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="contact"
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
