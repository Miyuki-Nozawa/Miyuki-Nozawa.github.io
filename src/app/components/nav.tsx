"use client";

import Image from "next/image";
import NavLink from "@/app/components/nav-link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const isContact = pathname.startsWith("/contact");

  const handleHoverOn = () => {
    setHovered(true);
  };

  const handleHoverOff = () => {
    setHovered(false);
  };

  return (
    <div className="relative mt-[10px] lg:mt-0 lg:block">
      <div
        className={
          "absolute top-0 right-0 left-0 flex justify-between items-center lg:p-16 lg:h-[192px] z-20 " +
          `${
            isContact
              ? hovered
                ? "bg-base"
                : "bg-transparent transition-all ease-in duration-700"
              : "bg-base"
          } `
        }
      >
        <div className="mx-auto lg:mx-0 w-[75px] lg:w-[155px] h-[50px] lg:h-[105px] relative">
          <Link href="/">
            <Image src="/icons/nav.svg" alt="miyuki nozawa" fill />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-[4.5rem] font-light">
          <div onMouseOver={handleHoverOff}>
            <NavLink
              href="/"
              className={`${pathname === "/" ? "font-bold" : ""}`}
            >
              Home
            </NavLink>
          </div>
          <div onMouseOver={handleHoverOff}>
            <NavLink
              href="/about"
              className={`${pathname === "/about" ? "font-bold" : ""}`}
            >
              About
            </NavLink>
          </div>
          <div
            onMouseOver={handleHoverOn}
            className="text-2xl tracking-widest hover:cursor-pointer"
          >
            Projects
          </div>
          <div onMouseOver={handleHoverOff}>
            <NavLink
              href="/resume"
              className={`${pathname === "/resume" ? "font-bold" : ""}`}
            >
              Resume
            </NavLink>
          </div>
          <div onMouseOver={handleHoverOff}>
            <NavLink
              href="/contact"
              className={`${pathname === "/contact" ? "font-bold" : ""}`}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute top-[191px] left-0 right-0 z-20 bg-base transition-all overflow-hidden duration-500 " +
          `${hovered ? "h-[300px]" : "h-0"}`
        }
        onMouseLeave={handleHoverOff}
      >
        <div className="flex items-center justify-around h-[252px]">
          <Link href="/projects/resto" onClick={handleHoverOff}>
            <Image
              src="/resto/logo-md.svg"
              alt="Resto"
              width={338}
              height={200}
            />
          </Link>
          <Link href="/projects/korean-air" onClick={handleHoverOff}>
            <Image
              src="/korean-air/logo-md.svg"
              alt="Korean Air"
              width={338}
              height={200}
            />
          </Link>
          <Link href="/projects/pibu" onClick={handleHoverOff}>
            <Image
              src="/pibu/logo-md.svg"
              alt="Pibu"
              width={338}
              height={200}
            />
          </Link>
        </div>
      </div>
      {/* overlay */}
      <div
        className={
          "absolute lg:h-[2000px] lg:w-[1440px] z-10 transition-all duration-500 bg-black top-0 bottom-0 left-0 right-0 pointer-events-none " +
          `${hovered ? "opacity-50" : "opacity-0"}`
        }
        onMouseEnter={handleHoverOn}
      ></div>
      {/* mobile nav */}
      <div className="absolute left-[20px] w-[30px] h-[50px] flex justify-center items-center z-40 lg:hidden">
        <div className="w-full h-full">
        <Image src="/icons/hamburger.svg" alt="menu" fill />
        </div>
      </div>
    </div>
  );
}
