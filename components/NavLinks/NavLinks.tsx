function NavLinks() {
  return (
    <div className="w-full">
      <div
        className="w-full md:flex md:w-auto md:order-1 backdrop-blur"
        id="navbar-cta"
      >
        <ul className="flex flex-col gap-2 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
