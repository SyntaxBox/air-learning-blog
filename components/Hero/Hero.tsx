import React from "react";
import Image from "next/image";
import Title from "../Title/Title";
import Container from "@/UI/Container";
import P from "@/UI/P";
import Link from "next/link";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col item-center justify-center gap-7 mt-[72px] ">
        <Title text="Best Solutions For Your Business" />
        <P>
          We offer the best solutions for your business startup, tailored to
          your specific needs. our team of experts will help you launch your
          business successfully
        </P>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="get started"
            type="button"
            className="text-white min-w-[150px] bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-md  px-5 py-3 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
          >
            Get Started
          </Link>
          <Link
            href="let's talk"
            type="button"
            className="text-gray-600 min-w-[150px] bg-white shadow focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded text-md hover:shadow-md px-5 py-3 text-center mr-3 md:mr-0"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
