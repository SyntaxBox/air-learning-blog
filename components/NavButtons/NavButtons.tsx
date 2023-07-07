function NavButtons() {
  return (
    <div className="w-full flex md:flex order-2">
      <button
        type="button"
        className="w-full bg-white rounded text-green-500  focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      >
        Sign Up
      </button>
      <button
        type="button"
        className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      >
        Log in
      </button>
    </div>
  );
}

export default NavButtons;
