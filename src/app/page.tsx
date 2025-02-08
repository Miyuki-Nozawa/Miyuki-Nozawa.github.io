"use client";

import { useRef } from "react";
import Image from "next/image";

import ProjectCard from "@/app/components/project-card";
import Bottom from "@/app/components/bottom";
import Connect from "@/app/components/connect";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Home() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isFooterVisible = useIntersectionObserver(footerRef);

  return (
    <main className="bg-white">
      {/* Hero */}
      <div className="px-[60px] pt-[30px] pb-[120px] rounded-b-[60px] lg:rounded-b-[200px] w-full bg-base">
        <div className="space-y-[2.5vw] lg:space-y-[30px] text-center lg:max-w-[890px] mx-auto">
          <Image
            className="mx-auto w-[25vw] h-[25vw] lg:w-[210px] lg:h-[210px]"
            src="/home/profile.png"
            alt="me"
            width={210}
            height={210}
          />
          <div className="space-y-[1vw] lg:space-y-5">
            <div className="font-bold text-[8.3vw] tracking-[.01em] lg:text-[80px] lg:leading-[120px] lg:tracking-[.05em]">
              Miyuki Nozawa
            </div>
          </div>
          <div
            className={
              "pt-0 font-medium text-[4.6vw] lg:text-[36px] " +
              "tracking-[.01em] text-[#222222] text-center"
            }
          >
            I am a <span className="font-semibold">Product Designer</span> based
            in New York
          </div>
        </div>
      </div>
      <div id="work">
        {/* Pibu */}
        <ProjectCard
          tags={["E-commerce", "Responsive Design"]}
          title="Pibu"
          subtitle="Skincare Store Website"
          description="A website to introduce a local business and expand their business"
          img="/home/pibu.png"
          page="/projects/pibu"
        />
      </div>
      {/* Tochigami */}
      <ProjectCard
        tags={["Web App", "Add a feature", "Redesign"]}
        title="Tochigami"
        subtitle="Real Estate Agent Finder"
        description="A web app to match users with the right real estate agents and help them find their ideal home"
        img="/home/tochigami.png"
        page="/projects/tochigami"
        mirror
        disabled
      />
      {/* Resto */}
      <ProjectCard
        tags={["Mobile", "End-to-end", "Personal Project"]}
        title="Resto"
        subtitle="Dining App in Japan"
        description="A mobile app that simplifies restaurant discovery and reservations for travelers in Japan"
        img="/home/resto.png"
        page="/projects/resto"
      />
      {/* Korean Air */}
      <ProjectCard
        tags={["Web App", "Add a feature", "Personal Project"]}
        title="Korean Air"
        subtitle="Mileage Optimizer"
        description="A feature that enables effective utilization of mileage"
        img="/home/korean-air.png"
        page="/projects/korean-air"
        mirror
      />
      {/* Kama-Asa */}
      <ProjectCard
        tags={["E-commerce", "Redesign", "Responsive Design"]}
        title="KAMA-ASA"
        subtitle="New US Online Store"
        description="An e-commerce platform redesigned for the US market"
        img="/home/kama-asa.png"
        page="/projects/kama-asa"
        disabled
      />
      {/* Footer */}
      <Bottom ref={footerRef} visible={isFooterVisible}>
        <Connect />
      </Bottom>
    </main>
  );
}
