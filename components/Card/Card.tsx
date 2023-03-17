import Link from "next/link";
import React, { ReactNode } from "react";
function Card({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: any;
}) {
  return (
    <div className="w-full flex flex-col gap-3 p-6 border border-gray-100 shadow-sm rounded-lg cursor-pointer">
      <div className="flex items-center justify-between">
        <Icon className="text-green-300 bg-gray-50 p-2 rounded-full w-[40px] h-[40px]" />
        <Link
          href="card"
          className="p-2 border border-gray-200 rounded-md hover:shadow"
        >
          Show more
        </Link>
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm font-light text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Card;
