import Image from "next/image";
import React from "react";

function Avatars() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image src="/avatar.png" width={130} height={40} alt="avatars" />
      <p className="text-gray-600 text-sm text-center font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam
        iste.
      </p>
    </div>
  );
}

export default Avatars;
