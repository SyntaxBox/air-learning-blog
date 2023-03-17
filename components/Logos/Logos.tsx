import React from "react";
import Dribbble from "./Dribbble";
import Dropbox from "./Dropbox";
import Microsoft from "./Microsoft";
import Nestjs from "./Nestjs";
import Nodejs from "./Nodejs";
import Quora from "./Quora";
import Udemy from "./Udemy";
import Udacity from "./Udacity";
import SVG from "@/UI/SVG";

function Logos() {
  return (
    <div className="logos grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 md:gap-6 items-center justify-center max-w-[1200px]">
      <SVG className="flex items-center justify-center cursor-pointer">
        <Dribbble />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Dropbox />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Microsoft />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Nestjs />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Nodejs />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Quora />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Udacity />
      </SVG>
      <SVG className="flex items-center justify-center cursor-pointer">
        <Udemy />
      </SVG>
    </div>
  );
}

export default Logos;
