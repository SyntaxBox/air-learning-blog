import Link from "next/link";
import React from "react";
import { Check, X } from "react-bootstrap-icons";

function PricingPlan({
  title,
  badge,
  price,
  features,
  featured,
}: {
  title: string;
  badge: string;
  price: number;
  features: (string | boolean)[][];
  featured?: boolean;
}) {
  return (
    <div
      className={`w-full p-6 border  rounded-lg flex flex-col gap-3 items-center justify-center ${
        featured ? "border-green-300" : "border-gray-200"
      } cursor-pointer hover:border-green-300`}
    >
      <span className="bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        {badge}
      </span>
      <h3 className="text-lg font-bold text-gray-700">{title}</h3>
      <p className="text-gray-500">{price}$</p>
      <span className="w-full h-[0.5px] bg-gray-200"></span>
      <div className="flex items-start flex-col gap-2">
        {features.map((feature, i) => {
          return (
            <div key={i} className=" flex items-center gap-2 justify-center">
              {feature[0] ? (
                <Check className="text-green-500 w-[20px] h-[20px]" />
              ) : (
                <X className="text-red-500 w-[20px] h-[20px]" />
              )}
              <p className="text-gray-700">{feature[1]}</p>
            </div>
          );
        })}
      </div>
      <Link
        href="pricing"
        type="button"
        className="text-white w-full mt-6 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-md  px-5 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
      >
        Try it now
      </Link>
    </div>
  );
}

export default PricingPlan;
