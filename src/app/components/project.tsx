"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";
import Hero, { HeroProps } from "@/app/components/hero";
import Introduction, { IntroductionProps } from "@/app/components/introduction";
import DesignProcess, {
  DesignProcessProps,
} from "@/app/components/design-process";
import Research, { ResearchProps } from "@/app/components/research";
import Define, { DefineProps } from "@/app/components/define";
import Ideate, { IdeateProps } from "@/app/components/ideate";
import Prototype, { PrototypeProps } from "@/app/components/prototype";
import Test, { TestProps } from "@/app/components/test";
import NextSteps, { NextStepsProps } from "@/app/components/next-steps";

export default function Project({
  hero,
  introduction,
  designProcess,
  research,
  define,
  ideate,
  prototype,
  test,
  nextSteps,
}: {
  hero: HeroProps;
  introduction: IntroductionProps;
  designProcess: DesignProcessProps;
  research: ResearchProps;
  define: DefineProps;
  ideate: IdeateProps;
  prototype: PrototypeProps;
  test: TestProps;
  nextSteps: NextStepsProps;
}) {
  const researchRef = useRef<HTMLDivElement>(null);
  const defineRef = useRef<HTMLDivElement>(null);
  const ideateRef = useRef<HTMLDivElement>(null);
  const prototypeRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const nextStepsRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const refs = useMemo(
    () => ({
      [Section.RESEARCH]: researchRef,
      [Section.DEFINE]: defineRef,
      [Section.IDEATE]: ideateRef,
      [Section.PROTOTYPE]: prototypeRef,
      [Section.TEST]: testRef,
      [Section.NEXTSTEPS]: nextStepsRef,
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

      setIsNavVisible(isVisible);
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, refs]);

  const handleNav = (section: Section) => {
    if (refs[section].current) {
      refs[section].current.scrollIntoView();
    }
  };

  return (
    <div className="relative">
      {/* nav bar */}
      <div
        className={`w-[150px] h-[500px] fixed top-20 right-0 transition-all duration-500 space-y-[20px] text-[18px] ${
          isNavVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[100%]"
        }`}
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
      <div className="space-y-[20px] tracking-[.01em]">
        <Hero {...hero}>{hero.children}</Hero>
        <Introduction {...introduction} />
        <DesignProcess {...designProcess} />
        <Research ref={researchRef} {...research} />
        <Define ref={defineRef} {...define} />
        <Ideate ref={ideateRef} {...ideate} />
        <Prototype ref={prototypeRef} {...prototype} />
        <Test ref={testRef} {...test} />
        <NextSteps ref={nextStepsRef} {...nextSteps} />
      </div>
    </div>
  );
}

enum Section {
  RESEARCH = "RESEARCH",
  DEFINE = "DEFINE",
  IDEATE = "IDEATE",
  PROTOTYPE = "PROTOTYPE",
  TEST = "TEST",
  NEXTSTEPS = "NEXT STEPS",
}

const SECTIONS = [
  Section.RESEARCH,
  Section.DEFINE,
  Section.IDEATE,
  Section.PROTOTYPE,
  Section.TEST,
  Section.NEXTSTEPS,
];
