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
      <div className="px-[60px] pt-[30px] pb-[50px] lg:py-[120px] rounded-b-[60px] lg:rounded-b-[200px] w-full bg-base">
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
            <div className="font-bold text-[6.4vw] lg:text-[46px] lg:leading-[69px] tracking-[.01em]">
              Product Designer
            </div>
          </div>
          <div className="pt-[2vw] lg:pt-0 lg:py-[30px] font-medium text-[4.6vw] lg:text-[36px] lg:leading-[54px] tracking-[.01em] text-[#222222] text-left">
            Solving problems with a global perspective to create intuitive and
            impactful user experiences.
          </div>
        </div>
      </div>
      {/* Resto */}
      <div id="work">
        <ProjectCard
          tags={["UX/UI design", "Mobile", "End-to-end"]}
          title="Resto"
          subtitle="Dining App in Japan"
          description="A mobile app that simplifies restaurant discovery and reservations for travelers in Japan"
          img="/home/resto.png"
          page="/projects/resto"
        />
      </div>
      {/* Korean Air */}
      <ProjectCard
        tags={["UX/UI design", "Website", "Add a feature"]}
        title="Korean Air"
        subtitle="Mileage Optimizer"
        description="A feature that enables effective utilization of mileage"
        img="/home/korean-air.png"
        page="/projects/korean-air"
        mirror
      />
      {/* Pibu */}
      <ProjectCard
        tags={["UX/UI design", "Responsive Website"]}
        title="Pibu"
        subtitle="Skincare Store Website"
        description="A website to introduce a local business and expand their business"
        img="/home/pibu.png"
        page="/projects/pibu"
      />
      {/* Footer */}
      <Bottom ref={footerRef} visible={isFooterVisible}>
        <Connect />
      </Bottom>
    </main>
  );
}
