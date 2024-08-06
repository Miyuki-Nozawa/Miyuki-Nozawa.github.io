"use client";

import Image from "next/image";
import NavLink from "@/app/components/nav-link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

export default function Footer() {
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
    <div className="relative">
      <div
        className={
          "absolute top-0 right-0 left-0 flex justify-between items-center p-16 " +
          "h-[192px] z-20 " +
          `${
            isContact
              ? hovered
                ? "bg-base"
                : "bg-transparent transition-all ease-in duration-700"
              : "bg-base"
          } `
        }
      >
        <Link href="/">
          <Image
            src="/icons/nav.svg"
            alt="miyuki nozawa"
            width={155}
            height={105}
          />
        </Link>
        <div className="flex space-x-[4.5rem] font-light">
          <div onMouseOver={handleHoverOff}>
            <NavLink href="/">Home</NavLink>
          </div>
          <div onMouseOver={handleHoverOff}>
            <NavLink href="/about">About</NavLink>
          </div>
          <div
            onMouseOver={handleHoverOn}
            className="text-2xl tracking-widest hover:cursor-pointer"
          >
            Projects
          </div>
          <div onMouseOver={handleHoverOff}>
            <NavLink href="/resume">Resume</NavLink>
          </div>
          <div onMouseOver={handleHoverOff}>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute top-[191px] left-0 right-0 z-20 bg-base transition-all " +
          "overflow-hidden duration-500 " +
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
          "absolute h-[2000px] w-[1440px] z-10 transition-all duration-500 bg-black " +
          "top-0 bottom-0 left-0 right-0 pointer-events-none " +
          `${hovered ? "opacity-50" : "opacity-0"}`
        }
        onMouseEnter={handleHoverOn}
      ></div>
    </div>
  );
}
