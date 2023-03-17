import React, { ReactNode } from "react";

function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-center text-gray-700 uppercase text-xl font-bold">
      {children}
    </h4>
  );
}

export default H4;
