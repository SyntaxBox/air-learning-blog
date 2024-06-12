import Container from "@/UI/layout/Container";
import React from "react";
import Logo from "../Logo/Logo";
import P from "@/UI/typography/P";
import H4 from "@/UI/typography/H4";
import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Tiktok,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-black">
      <Container>
        <div className="w-full max-w-[1200px] flex flex-col gap-6 py-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center w-full  justify-between">
            <p className="font-bold text-2xl">
              Welcome to your new digital reality, now. Wow.
            </p>
            <div className="flex md:gap-3 text-gray-400 items-center justify-between text-2xl ">
              <Github className="hover:text-green-500 cursor-pointer" />
              <Facebook className="hover:text-green-500 cursor-pointer" />
              <Linkedin className="hover:text-green-500 cursor-pointer" />
              <Tiktok className="hover:text-green-500 cursor-pointer" />
              <Instagram className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>
          <span className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-700 block"></span>
          <div className="ml-6 sm:ml-0 flex flex-col lg:flex-row md:items-center justify-between gap-10">
            <div className=" lg:w-[30%] h-full flex flex-col items-start justify-between gap-6">
              <Logo />
              <p className="text-gray-400  font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                itaque incidunt nulla voluptatem. Quas laboriosam tempore.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 w-full lg:w-[70%] justify-between gap-6 md:gap-0 items-start">
              <div className="flex flex-col items-start  gap-3">
                <H4>About Us</H4>
                <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-2">
                  <p>Who we are</p>
                  <p>What we Do</p>
                  <p>Channels</p>
                  <p>Watch a demo</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <H4>Resources</H4>
                <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-2">
                  <p>Features</p>
                  <p>Community</p>
                  <p>Channels</p>
                  <p>Solutions</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <H4>Features</H4>
                <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-2">
                  <p>Features</p>
                  <p>Community</p>
                  <p>Channels</p>
                  <p>Solutions</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <H4>Community</H4>
                <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-2">
                  <p>Features</p>
                  <p>Community</p>
                  <p>Channels</p>
                  <p>Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-700 block"></span>
          <p className="text-center">
            &#169;{new Date().getFullYear()}{" "}
            <a href="#" className="text-green-500 underline">
              {" "}
              Abdelhamid Boudjit
            </a>{" "}
            Full stack developer
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
