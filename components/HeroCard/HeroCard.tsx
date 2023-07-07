import publishDate from "@/logic/publishDate";
import Link from "next/link";
import Image from "next/image";
import React, { CSSProperties } from "react";
import { ClockFill, PersonFill } from "react-bootstrap-icons";

function HeroCard({
  img,
  className,
  title,
  author,
  time,
  slug,
}: {
  img: string;
  className?: string;
  title: string;
  author: string;
  time: Date | EpochTimeStamp;
  slug: string;
}) {
  return (
    <Link
      href={`/post/${slug}`}
      className={`relative overflow-hidden flex items-center justify-center hero-card rounded-xl ${className}`}
    >
      <Image src={img} alt={img} fill className="absolute z-0 w-full h-full" />
      <div className="bg-gradient-to-t z-10 w-full from-[#000000aa] h-full flex items-end justify-start p-4">
        <div className="text-white">
          <h3 className="text-lg">{title}</h3>
          <div className="text-gray-300 font-light flex gap-4">
            <div className="flex gap-1 items-center">
              <PersonFill className="text-lg" />
              <p>{author}</p>
            </div>
            <div className="flex gap-1 items-center">
              <ClockFill />
             <p>{publishDate(time)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HeroCard;
