import DescriptionText from "@/UI/typography/DescriptionText";
import ReadMore from "@/UI/buttons/ReadMore";
import publishDate from "@/logic/publishDate";
import Link from "next/link";
import React, { CSSProperties } from "react";
import { PersonFill, ClockFill } from "react-bootstrap-icons";

function CollectionCard({
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
      <div>
        <Link href={`/post/${slug}`}>
          <div
            style={style}
            className={`overflow-hidden rounded-xl object-cover bg-no-repeat bg-cover shadow-lg ${className}`}
          >
            <div className="bg-gradient-to-t from-[#000000aa] hover:from-[#000000cc] h-full flex items-end justify-start p-4">
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
            className=" mt-4 mb-2 text-green-600 font-bold hover:text-green-700"
          >
            {title}
          </Link>
          <DescriptionText
            description={description}
            className="text-sm"
            sub={80}
          />
          <ReadMore href={`/post/${slug}`} />
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
