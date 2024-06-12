import Container from "@/UI/layout/Container";
import React from "react";

function Title({ title }: { title: string }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">{title}</h2>
      </div>
      <span className="w-full border-b-[1px] border-gray-300"></span>
    </div>
  );
}

export default Title;
