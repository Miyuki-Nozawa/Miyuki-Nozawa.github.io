"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NavLink from "./nav-link";
import { handleCursorHoverStart, handleCursorHoverStop } from "../cursor";

const PROJECTS = ["resto", "korean-air", "pibu"];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [mobileProjectsVisible, setMobileProjectsVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursorWrapper = document.getElementById("cursorWrapper");
      if (!cursorWrapper) return;

      if (!cursorVisible) {
        cursorWrapper.style.opacity = "1";
        setCursorVisible(true);
      }

      cursorWrapper.style.left = `${event.clientX}px`;
      cursorWrapper.style.top = `${event.clientY}px`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorVisible]);

  const isContact = pathname.startsWith("/contact");

  const openMobileNav = () => {
    document.body.style.overflow = "hidden";
    setMobileNavVisible(true);
  };

  const closeMobileNav = () => {
    document.body.style.overflow = "auto";
    setMobileNavVisible(false);
  };

  const toggleMobileProjects = () => {
    setMobileProjectsVisible(!mobileProjectsVisible);
  };

  const generateNavLink = (path: string, name: string) => (
    <div
      className="px-[30px] py-[10px] rounded-[55px] hover:bg-navHover"
      onMouseEnter={handleCursorHoverStart}
      onMouseLeave={handleCursorHoverStop}
    >
      <NavLink
        href={path}
        className={`${pathname === path ? "font-bold" : ""} cursor-default`}
      >
        {name}
      </NavLink>
    </div>
  );

  const handleMobileNavLink = (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    closeMobileNav();
    setMobileProjectsVisible(false);
    router.push(path);
  };

  const generateMobileNavLink = (path: string, name: string) => (
    <div
      onClick={(event) => handleMobileNavLink(event, path)}
      className={`${pathname === path ? "underline" : ""}`}
    >
      {name}
    </div>
  );

  const contactHoverClass = isContact
    ? "bg-transparent transition-all ease-in duration-700"
    : "bg-base";

  return (
    <div className="relative mt-[10px] lg:mt-0 lg:block">
      <div
        id="cursorWrapper"
        className={`cursor-wrapper fixed ${cursorVisible ? "" : "hidden"}`}
      ></div>
      <div
        className={
          "absolute top-0 right-0 left-0 flex justify-between items-center lg:p-16 lg:h-[192px] z-20 " +
          `${contactHoverClass} `
        }
      >
        <div className="mx-auto lg:mx-0 w-[75px] lg:w-[155px] h-[50px] lg:h-[105px]">
          <Link href="/">
            <Image
              src="/icons/nav.svg"
              alt="miyuki nozawa"
              width={150}
              height={100}
            />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-[20px] font-light">
          {generateNavLink("/", "Home")}
          {generateNavLink("/resume", "Work")}
          {generateNavLink("/about", "About")}
          {generateNavLink("/contact", "Contact")}
        </div>
      </div>
      {/* hamburger */}
      <div
        className="absolute left-[20px] w-[30px] h-[50px] flex justify-center items-center z-40 lg:hidden"
        onClick={openMobileNav}
      >
        <div className="w-full h-full relative">
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
          } transition-all duration-300 overflow-auto`
        }
      >
        {generateMobileNavLink("/", "Home")}
        {generateMobileNavLink("/about", "About")}
        <div onClick={toggleMobileProjects} className="space-y-4">
          <div>Projects</div>
          {mobileProjectsVisible && (
            <div className="space-y-[10px]">
              {PROJECTS.map((project) => (
                <Image
                  key={project}
                  src={`/${project}/logo-md.svg`}
                  alt={project}
                  width={390}
                  height={222}
                  onClick={(event) =>
                    handleMobileNavLink(event, `/projects/${project}`)
                  }
                />
              ))}
            </div>
          )}
        </div>
        {generateMobileNavLink("/resume", "Resume")}
        {generateMobileNavLink("/contact", "Contact")}
      </div>
    </div>
  );
}
