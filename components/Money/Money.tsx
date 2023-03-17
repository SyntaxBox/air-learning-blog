import React from "react";
import { CreditCard } from "react-bootstrap-icons";

function Money() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <CreditCard className="text-green-400 w-[40px] h-[40px]" />
      <p className="text-gray-600 text-sm text-center font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam
        iste.
      </p>
    </div>
  );
}

export default Money;
