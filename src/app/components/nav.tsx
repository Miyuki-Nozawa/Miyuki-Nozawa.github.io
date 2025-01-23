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
  const isAboutPage = pathname === "/about";
  const router = useRouter();

  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [mobileProjectsVisible, setMobileProjectsVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursorWrapper = document.getElementById("cursorWrapper");
      if (!cursorWrapper) {
        return;
      }
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

  const generateNavLink = (path: string, name: string, newTab?: boolean) => {
    const handleClick = (e: React.MouseEvent) => {
      if (path === "/#work" && pathname === "/") {
        e.preventDefault();
        const workSection = document.getElementById("work");
        if (workSection) {
          const offset = workSection.offsetTop - 20;
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      }
    };

    return (
      <div
        className={
          "px-[25px] py-[10px] rounded-[55px] " +
          (isAboutPage ? "hover:bg-black/10" : "hover:bg-navHover")
        }
        onMouseEnter={handleCursorHoverStart}
        onMouseLeave={handleCursorHoverStop}
      >
        <NavLink
          href={path}
          className={`${pathname === path ? "font-bold" : ""} cursor-default`}
          target={newTab ? "_blank" : "_self"}
          onClick={handleClick}
        >
          {name}
        </NavLink>
      </div>
    );
  };

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

  return (
    <div className="relative mt-0 lg:block">
      <div
        id="cursorWrapper"
        className={`cursor-wrapper fixed ${
          cursorVisible ? "lg:visible" : "hidden"
        }`}
      ></div>
      <div
        className={
          "absolute top-0 right-0 left-0 flex justify-between items-center p-[5vw] " +
          "lg:p-16 h-[19.2vw] lg:h-[192px] z-20 " +
          (isAboutPage ? "bg-transparent" : "bg-base")
        }
      >
        <div className="mx-auto lg:mx-0 w-[13.3vw] lg:w-[155px] h-[9vw] lg:h-[105px]">
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
          {generateNavLink("/#work", "Work")}
          {generateNavLink("/about", "About")}
          {generateNavLink(
            "https://drive.google.com/file/d/1yQAmS53BZt76VrnzwTMF22o4CABhC1IJ/view",
            "Resume",
            true
          )}
        </div>
      </div>
      {/* hamburger */}
      <div
        className={
          "absolute left-[5vw] top-[5vw] w-[9vw] h-[9vw] flex justify-center " +
          "items-center z-40 lg:hidden "
        }
        onClick={openMobileNav}
      >
        <div className="w-full h-full relative">
          <Image src="/icons/hamburger.svg" alt="menu" fill />
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={
          (mobileNavVisible
            ? "translate-x-0"
            : "-translate-x-full pointer-events-none") +
          " fixed w-[100vw] h-[100vh] z-40 bg-black top-0 bottom-0 left-0 right-0 opacity-20"
        }
        onClick={closeMobileNav}
      ></div>
      <div
        className={
          "fixed w-[60vw] h-[100vh] z-50 bg-base top-0 bottom-0 left-0 right-0 " +
          "text-[16px] tracking-[.02em] space-y-4 py-6 px-5 " +
          (mobileNavVisible
            ? "translate-x-0"
            : "-translate-x-full pointer-events-none") +
          " transition-all duration-300 overflow-auto"
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
      </div>
    </div>
  );
}
