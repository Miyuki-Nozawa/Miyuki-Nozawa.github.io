"use client";

// import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ProjectCard from "./components/project-card";

export default function Home() {
  // const footerRef = useRef<HTMLDivElement>(null);
  // const [isFooterVisible, setIsFooterVisible] = useState(false);
  // const [cancelScroll, setCancelScroll] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         if (footerRef.current) {

  //           const footerTop = footerRef.current.offsetTop;
  //           const footerHeight = footerRef.current.offsetHeight;
  //           const windowHeight = window.innerHeight;
  //           const scrollToY = footerTop + footerHeight / 2 - windowHeight / 2;

  //           window.scrollTo({
  //             top: scrollToY,
  //             behavior: "smooth",
  //           });
  //           setTimeout(() => setIsFooterVisible(true), 2000);
  //         }
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //     }
  //   );

  //   let ref = footerRef.current;

  //   if (ref) {
  //     observer.observe(ref);
  //   }

  //   return () => {
  //     if (ref) {
  //       observer.unobserve(ref);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!footerRef.current || !isFooterVisible) {
  //       return;
  //     }

  //     window.scrollBy({
  //       top: -window.innerHeight * 1.5 + 100,
  //       behavior: "smooth",
  //     });

  //     setIsFooterVisible(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isFooterVisible]);

  return (
    <main className="bg-white">
      {/* Hero */}
      <div className="px-[60px] py-[120px] rounded-b-[200px] w-full bg-light-ivory">
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
      <ProjectCard
        tags={["UX/UI design", "Mobile", "End-to-end"]}
        title="Resto"
        subtitle="Dining App in Japan"
        description="A mobile app that simplifies restaurant discovery and reservations for travelers in Japan"
        img="/home/resto.png"
      />
      {/* Korean Air */}
      <ProjectCard
        tags={["UX/UI design", "Website", "Add a feature"]}
        title="Korean Air"
        subtitle="Mileage Optimizer"
        description="A feature that enables effective utilization of mileage"
        img="/home/korean-air.png"
        mirror
      />
      {/* Pibu */}
      <ProjectCard
        tags={["UX/UI design", "Responsive Website"]}
        title="Pibu"
        subtitle="Skincare Store Website"
        description="A website to introduce a local business and expand their business"
        img="/home/pibu.png"
      />
      <div
        className="bg-green rounded-t-[200px] flex flex-col items-center justify-center"
        // ref={footerRef}
      >
        <div className="flex flex-col items-center space-y-[60px] h-[100vh] justify-center mt-[200px]">
          <div className="text-white font-bold text-[60.75px]">
            Let&apos;s connect!
          </div>
          <div className="font-semibold text-[22px] flex space-x-[30px]">
            <div className="flex items-center space-x-[20px] bg-beige rounded-[100px] px-[40px] py-[15px]">
              <Image
                src="/icons/email.svg"
                alt="email"
                width={37}
                height={33}
              />
              <span>Email</span>
            </div>
            <div className="flex items-center space-x-[20px] bg-beige rounded-[100px] px-[40px] py-[15px]">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={33}
                height={33}
              />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
