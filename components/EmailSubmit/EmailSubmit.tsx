import Container from "@/UI/Container";
import React from "react";

function EmailSubmit() {
  return (
    <Container>
      <div className="rounded-lg bg-[#4eff001a] w-full max-w-[1200px] px-8 py-4 md:px-16 md:py-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-light text-green-400">
            1% of the industry
          </p>
          <h2 className="text-xl md:text-2xl lg:w-[450px] xl:w-[550px] font-bold">
            Welcome to your new digital reality that will rock your world.
          </h2>
        </div>
        <div className="flex items-center w-full">
          <input
            className="px-5 py-2 rounded-l w-full border border-r-0 border-gray-200 outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-r text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
}

export default EmailSubmit;
