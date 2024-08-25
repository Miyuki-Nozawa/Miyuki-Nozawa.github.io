"use client";

import Image from "next/image";
import NavLink from "@/app/components/nav-link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [hovered, setHovered] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isContact = pathname.startsWith("/contact");

  const handleHoverOn = () => {
    document.body.style.overflow = "hidden";
    setHovered(true);
  };

  const handleHoverOff = () => {
    document.body.style.overflow = "auto";
    setHovered(false);
  };

  const openMobileNav = () => {
    document.body.style.overflow = "hidden";
    setMobileNavVisible(true);
  };

  const closeMobileNav = () => {
    document.body.style.overflow = "auto";
    setMobileNavVisible(false);
  };

  const handleMobileNavLink = (path: string) => {
    closeMobileNav();
    router.push(path);
  };

  const generateProjectLinks = (path: string, name: string) => (
    <div onMouseOver={handleHoverOff}>
      <NavLink
        href={path}
        className={`${pathname === path ? "font-bold" : ""}`}
      >
        {name}
      </NavLink>
    </div>
  );

  const generateProjectCard = (project: string) => (
    <Link key={project} href={`/projects/${project}`} onClick={handleHoverOff}>
      <Image
        src={`/${project}/logo-md.svg`}
        alt={project}
        width={338}
        height={200}
      />
    </Link>
  );

  const contactHoverClass =
    isContact && !hovered
      ? "bg-transparent transition-all ease-in duration-700"
      : "bg-base";

  return (
    <div className="relative mt-[10px] lg:mt-0 lg:block">
      <div
        className={
          "absolute top-0 right-0 left-0 flex justify-between items-center lg:p-16 lg:h-[192px] z-20 " +
          `${contactHoverClass} `
        }
      >
        <div className="mx-auto lg:mx-0 w-[75px] lg:w-[155px] h-[50px] lg:h-[105px] relative">
          <Link href="/">
            <Image src="/icons/nav.svg" alt="miyuki nozawa" fill />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-[4.5rem] font-light">
          {generateProjectLinks("/", "Home")}
          {generateProjectLinks("/about", "About")}
          <div
            onMouseOver={handleHoverOn}
            className="text-2xl tracking-widest hover:cursor-pointer"
          >
            Projects
          </div>
          {generateProjectLinks("/resume", "Resume")}
          {generateProjectLinks("/contact", "Contact")}
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
          {["resto", "korean-air", "pibu"].map(generateProjectCard)}
        </div>
      </div>
      {/* overlay */}
      <div
        className={`absolute lg:h-[2000px] lg:w-[1440px] z-10 transition-all duration-500 bg-black top-0 bottom-0 left-0 right-0 pointer-events-none ${
          hovered ? "opacity-20" : "opacity-0"
        }`}
        onMouseEnter={handleHoverOn}
      ></div>
      {/* hamburger */}
      <div
        className="absolute left-[20px] w-[30px] h-[50px] flex justify-center items-center z-40 lg:hidden"
        onClick={openMobileNav}
      >
        <div className="w-full h-full">
          <Image src="/icons/hamburger.svg" alt="menu" fill />
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`${
          mobileNavVisible
            ? "translate-x-0"
            : "-translate-x-full pointer-events-none"
        } fixed w-[100vw] h-[100vh] z-40 bg-black top-0 bottom-0 left-0 right-0 opacity-20`}
        onClick={closeMobileNav}
      ></div>
      <div
        className={
          `fixed w-[60vw] h-[100vh] z-50 bg-base top-0 bottom-0 left-0 right-0 text-[16px] tracking-[.02em] space-y-4 py-6 px-5 ` +
          `${
            mobileNavVisible
              ? "translate-x-0"
              : "-translate-x-full pointer-events-none"
          } transition-all duration-300`
        }
      >
        <div onClick={() => handleMobileNavLink("/")}>Home</div>
        <div onClick={() => handleMobileNavLink("/about")}>About</div>
        <div onClick={() => handleMobileNavLink("/projects")}>Projects</div>
        <div onClick={() => handleMobileNavLink("/resume")}>Resume</div>
        <div onClick={() => handleMobileNavLink("/contact")}>Contact</div>
      </div>
    </div>
  );
}
