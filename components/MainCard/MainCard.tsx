import DescriptionText from "@/UI/typography/DescriptionText";
import ReadMore from "@/UI/buttons/ReadMore";
import publishDate from "@/logic/publishDate";
import React, { CSSProperties } from "react";
import { PersonFill, ClockFill } from "react-bootstrap-icons";
import Link from "next/link";

function MainCard({
  img,
  className,
  description,
  title,
  author,
  time,
  slug,
}: {
  img: string;
  className?: string;
  description: string;
  title: string;
  author: string;
  time: Date | EpochTimeStamp;
  slug: string;
}) {
  const style: CSSProperties = {
    backgroundImage: `url('${img}')`,
  };
  return (
    <div>
      <Link href={`/post/${slug}`}>
        <div
          style={style}
          className={`overflow-hidden rounded-xl object-cover bg-no-repeat bg-cover ${className} shadow-lg`}
        >
          <div className="bg-gradient-to-t from-[#000000aa] hover:from-[#000000cf] h-full flex items-end justify-start p-4">
            <div className="text-white">
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
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <Link
          href={`/post/${slug}`}
          className="text-2xl mt-4 mb-2 text-green-600 hover:text-green-700 font-bold"
        >
          {title}
        </Link>
        <DescriptionText description={description} sub={200} />
        <ReadMore href={`/post/${slug}`} />
      </div>
    </div>
  );
}

export default MainCard;
