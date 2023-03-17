import React from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";

function Rating() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex gap-2">
        <StarFill className="text-yellow-400 w-[24px] h-[40px]" />
        <StarFill className="text-yellow-400 w-[24px] h-[40px]" />
        <StarFill className="text-yellow-400 w-[24px] h-[40px]" />
        <StarFill className="text-yellow-400 w-[24px] h-[40px]" />
        <StarHalf className="text-yellow-400 w-[24px] h-[40px]" />
      </div>
      <p className="text-gray-600 text-sm text-center font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam
        iste.
      </p>
    </div>
  );
}

export default Rating;
