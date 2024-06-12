import { title } from "process";
import React from "react";
import Link from "next/link";
import ReadMore from "@/UI/buttons/ReadMore";
import DescriptionText from "@/UI/typography/DescriptionText";

function FeaturedSide({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-2">
        <Link
          href={`/post/${slug}`}
          className="text-xl mb-2 text-green-600 font-bold"
        >
          {title}
        </Link>
        <DescriptionText description={description} />
        <ReadMore href={`/post/${slug}`} />
      </div>
    </div>
  );
}

export default FeaturedSide;
