import { useState } from "react";
import Logo from "../Logo/Logo";
import { List } from "react-bootstrap-icons";
import NavLinks from "../NavLinks/NavLinks";
import NavButtons from "../NavButtons/NavButtons";
import Link from "next/link";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full md:h-[64px] flex items-center z-50 border-b border-gray-200 px-2 sm:px-4 py-2.5  backdrop-blur">
      <div className="container max-w-[1200px] flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center justify-between w-full md:w-fit">
          <Logo withText />
          <List
            className="md:hidden w-[40px] h-[40px] cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        {show && (
          <>
            <NavButtons />
            <NavLinks />
          </>
        )}
        <div className="hidden w-fit md:flex order-2">
          <Link
            href="sign up"
            type="button"
            className="w-full md:w-auto bg-white md:bg-transparent rounded text-green-500  focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Sign Up
          </Link>
          <Link
            href="log in"
            type="button"
            className="w-full text-white md:w-auto bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Log in
          </Link>
        </div>
        <div
          className="hidden md:flex w-auto md:order-1 backdrop-blur"
          id="navbar-cta"
        >
          <ul className="flex flex-col gap-2 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0"
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
