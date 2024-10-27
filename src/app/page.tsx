"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ProjectCard from "@/app/components/project-card";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";
import Bottom from "@/app/components/bottom";

export default function Home() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.75,
      }
    );

    let ref = footerRef.current;

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

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
        <>
          <div className="text-white font-bold text-[60.75px]">
            Let&apos;s connect!
          </div>
          <div className="font-semibold text-[22px] flex space-x-[30px]">
            <Link
              href="mailto:nozawa.myk@gmail.com"
              target="_blank"
              onMouseEnter={handleCursorHoverStart}
              onMouseLeave={handleCursorHoverStop}
            >
              <div className="flex items-center space-x-[20px] bg-beige rounded-[100px] px-[40px] py-[15px]">
                <Image
                  src="/icons/email.svg"
                  alt="email"
                  width={37}
                  height={33}
                />
                <span>Email</span>
              </div>
            </Link>
            <Link
              href="https://linkedin.com/in/miyuki-nozawa"
              target="_blank"
              onMouseEnter={handleCursorHoverStart}
              onMouseLeave={handleCursorHoverStop}
            >
              <div className="flex items-center space-x-[20px] bg-beige rounded-[100px] px-[40px] py-[15px]">
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  width={33}
                  height={33}
                />
                <span>LinkedIn</span>
              </div>
            </Link>
          </div>
        </>
      </Bottom>
    </main>
  );
}
