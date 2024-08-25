"use client";

import Image from "next/image";
import NavLink from "@/app/components/nav-link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const PROJECTS = ["resto", "korean-air", "pibu"];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const [projectsHovered, setProjectsHovered] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [mobileProjectsVisible, setMobileProjectsVisible] = useState(false);

  const isContact = pathname.startsWith("/contact");

  const handleHoverOn = () => {
    document.body.style.overflow = "hidden";
    setProjectsHovered(true);
  };

  const handleHoverOff = () => {
    document.body.style.overflow = "auto";
    setProjectsHovered(false);
  };

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

  const handleMobileNavLink = (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    closeMobileNav();
    setMobileProjectsVisible(false);
    router.push(path);
  };

  const generateProjectLink = (path: string, name: string) => (
    <div onMouseOver={handleHoverOff}>
      <NavLink
        href={path}
        className={`${pathname === path ? "font-bold" : ""}`}
      >
        {name}
      </NavLink>
    </div>
  );
  const generateMobileNavLink = (path: string, name: string) => (
    <div
      onClick={(event) => handleMobileNavLink(event, path)}
      className={`${pathname === path ? "underline" : ""}`}
    >
      {name}
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
    isContact && !projectsHovered
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
          {generateProjectLink("/", "Home")}
          {generateProjectLink("/about", "About")}
          <div
            onMouseOver={handleHoverOn}
            className="text-2xl tracking-widest hover:cursor-pointer"
          >
            Projects
          </div>
          {generateProjectLink("/resume", "Resume")}
          {generateProjectLink("/contact", "Contact")}
        </div>
      </div>
      <div
        className={
          "absolute top-[191px] left-0 right-0 z-20 bg-base transition-all overflow-hidden duration-500 " +
          `${projectsHovered ? "h-[300px]" : "h-0"}`
        }
        onMouseLeave={handleHoverOff}
      >
        <div className="flex items-center justify-around h-[252px]">
          {PROJECTS.map(generateProjectCard)}
        </div>
      </div>
      {/* overlay */}
      <div
        className={`absolute lg:h-[2000px] lg:w-[1440px] z-10 transition-all duration-500 bg-black top-0 bottom-0 left-0 right-0 pointer-events-none ${
          projectsHovered ? "opacity-20" : "opacity-0"
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
