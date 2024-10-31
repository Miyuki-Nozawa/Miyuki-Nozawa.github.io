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
      <div className="px-[60px] py-[120px] rounded-b-[200px] w-full bg-base">
        <div className="space-y-[30px] text-center max-w-[890px] mx-auto">
          <Image
            className="mx-auto"
            src="/home/profile.png"
            alt="me"
            width={210}
            height={210}
          />
          <div className="space-y-5">
            <div className="font-bold text-[80px] leading-[120px] tracking-[.05em]">
              Miyuki Nozawa
            </div>
            <div className="font-bold text-[46px] leading-[69px] tracking-[.01em]">
              UX/UI designer
            </div>
          </div>
          <div className="py-[30px] font-medium text-[36px] leading-[54px] tracking-[.01em] text-[#222222] text-left">
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
