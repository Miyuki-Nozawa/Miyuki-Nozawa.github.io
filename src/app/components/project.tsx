"use client";

import Bottom from "@/app/components/bottom";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { createContext, useEffect, useMemo, useRef, useState } from "react";

interface ProjectRefs {
  research: React.RefObject<HTMLDivElement>;
  define: React.RefObject<HTMLDivElement>;
  ideate: React.RefObject<HTMLDivElement>;
  design: React.RefObject<HTMLDivElement>;
  test: React.RefObject<HTMLDivElement>;
  nextSteps: React.RefObject<HTMLDivElement>;
}
export const ProjectRefsContext = createContext<ProjectRefs | null>(null);

export default function Project({ children }: { children: React.ReactNode }) {
  const research = useRef<HTMLDivElement>(null);
  const define = useRef<HTMLDivElement>(null);
  const ideate = useRef<HTMLDivElement>(null);
  const design = useRef<HTMLDivElement>(null);
  const test = useRef<HTMLDivElement>(null);
  const nextSteps = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const isFooterVisible = useIntersectionObserver(
    footer,
    { threshold: 0.25 },
    (isIntersecting) => {
      setIsNavVisible(isNavVisible && !isIntersecting);
    }
  );

  const refs = useMemo(
    () => ({
      [Category.RESEARCH]: research,
      [Category.DEFINE]: define,
      [Category.IDEATE]: ideate,
      [Category.DESIGN]: design,
      [Category.TEST]: test,
      [Category.NEXTSTEPS]: nextSteps,
    }),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      let current = activeSection;
      let isVisible = false;

      for (const [name, ref] of Object.entries(refs)) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const middleOfViewport = viewportHeight / 2;

          if (rect.bottom < middleOfViewport) {
            isVisible = true;
            current = name;
          }
        }
      }

      setIsNavVisible(isVisible && !isFooterVisible);
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, refs, isFooterVisible]);

  const handleNav = (section: Category) => {
    if (refs[section].current) {
      refs[section].current.scrollIntoView();
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="relative">
      {/* nav bar */}
      <div
        className={
          "hidden lg:block w-[150px] h-[500px] fixed top-20 right-0 transition-all duration-500 " +
          "space-y-[20px] text-[18px] " +
          (isNavVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[100%]")
        }
      >
        {SECTIONS.map((section) => (
          <div
            key={section}
            className={`${
              activeSection === section ? "text-green2" : "text-[#A9A497]"
            }`}
            onClick={() => handleNav(section)}
            onMouseEnter={handleCursorHoverStart}
            onMouseLeave={handleCursorHoverStop}
          >
            {section}
          </div>
        ))}
      </div>
      <ProjectRefsContext.Provider
        value={{
          research,
          define,
          ideate,
          design,
          test,
          nextSteps,
        }}
      >
        <div className="space-y-[8px] lg:space-y-[20px] tracking-[.01em]">
          {children}
        </div>
      </ProjectRefsContext.Provider>
      <Bottom ref={footer} visible={isFooterVisible}>
        <div className="space-y-[0.69vw] lg:space-y-[10px] flex flex-col items-center">
          <div className="text-[7.25vw] lg:text-[60px] font-bold text-white tracking-[.01em]">
            Back to Top
          </div>
          <Image
            src={
              isArrowHovered
                ? "/icons/top-arrow-hover.svg"
                : "/icons/top-arrow.svg"
            }
            alt="top"
            width={70}
            height={70}
            className="w-[8.75vw] h-[8.75vw] lg:w-[70px] lg:h-[70px]"
            onMouseEnter={() => {
              setIsArrowHovered(true);
              handleCursorHoverStart();
            }}
            onMouseLeave={() => {
              setIsArrowHovered(false);
              handleCursorHoverStop();
            }}
            onClick={goToTop}
          />
        </div>
      </Bottom>
    </div>
  );
}

enum Category {
  RESEARCH = "RESEARCH",
  DEFINE = "DEFINE",
  IDEATE = "IDEATE",
  DESIGN = "DESIGN",
  TEST = "TEST",
  NEXTSTEPS = "NEXT STEPS",
}

const SECTIONS = [
  Category.RESEARCH,
  Category.DEFINE,
  Category.IDEATE,
  Category.DESIGN,
  Category.TEST,
  Category.NEXTSTEPS,
];
