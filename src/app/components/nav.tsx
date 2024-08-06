"use client";

import Image from "next/image";
import NavLink from "@/app/components/nav-link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  // const [panelHovered, setPanelHovered] = useState(false);
  const pathname = usePathname();
  // const isProject = pathname.startsWith("/projects");
  const isContact = pathname.startsWith("/contact");
  // const background = isProject ? "bg-white" : "bg-base";
  const background = "bg-base";
  const extras = isContact
    ? "absolute top-0 z-10 right-0 left-0 bg-transparent"
    : "";

  const handleProjectHover = () => {
    setHovered(true);
  };

  const handleProjectClose = () => {
    setHovered(false);
  };

  const handlePanelMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setHovered(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center p-16 h-[192px] ${background} ${extras}`}
      >
        <Image
          src="/icons/nav.svg"
          alt="miyuki nozawa"
          width={155}
          height={105}
        />
        <div className="flex space-x-[4.5rem] font-light">
          <div onMouseOver={handleProjectClose}>
            <NavLink href="/">Home</NavLink>
          </div>
          <div onMouseOver={handleProjectClose}>
            <NavLink href="/about">About</NavLink>
          </div>
          <div onMouseOver={handleProjectHover}>
            <NavLink href="/projects">Projects</NavLink>
          </div>
          <div onMouseOver={handleProjectClose}>
            <NavLink href="/resume">Resume</NavLink>
          </div>
          <div onMouseOver={handleProjectClose}>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute top-[192px] left-0 right-0 z-20 bg-base transition-all " +
          `duration-300 ${hovered ? "h-[300px]" : "h-0 invisible"}`
        }
        onMouseLeave={handlePanelMouseLeave}
      >
        {hovered && (
          <div className="flex items-center justify-around h-full">
            <Link href="/projects/resto" onClick={handleClick}>
              <Image
                src="/resto/logo-md.svg"
                alt="Resto"
                width={338}
                height={200}
              />
            </Link>
            <Link href="/projects/korean-air" onClick={handleClick}>
              <Image
                src="/korean-air/logo-md.svg"
                alt="Korean Air"
                width={338}
                height={200}
              />
            </Link>
            <Link href="/projects/pibu" onClick={handleClick}>
              <Image
                src="/pibu/logo-md.svg"
                alt="Pibu"
                width={338}
                height={200}
              />
            </Link>
          </div>
        )}
      </div>
      <div
        className={
          "absolute h-screen w-screen z-30 transition-all duration-300 " +
          "bottom-0 left-0 right-0 bg-black opacity-50 pointer-events-none " +
          `${hovered ? "top-[492px]" : "top-[192px] invisible transition-none"}`
        }
      ></div>
    </div>
  );
}
