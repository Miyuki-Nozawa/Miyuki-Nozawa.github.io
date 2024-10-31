"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ProjectSection from "@/app/components/project-section";
import Paragraph from "@/app/components/paragraph";
import Bottom from "@/app/components/bottom";
import { handleCursorHoverStart, handleCursorHoverStop } from "../cursor";

const AboutSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-[30px]">
      <div className="text-[27px] font-semibold tracking-[.01em]">{title}</div>
      {children}
    </div>
  );
};

export default function About() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

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

  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="absolute top-0 space-y-[20px]">
      {/* Hero */}
      <div className="bg-[url('/about/hero.png')] bg-cover bg-center bg-no-repeat w-[1440px] h-[854px]">
        <div className="relative top-[192px] h-[calc(100%-192px)] flex items-center w-[1000px] mx-auto text-black text-[60px] font-bold tracking-[.01em]">
          About Me
        </div>
      </div>
      {/* Content */}
      <ProjectSection>
        <div className="text-[40px] font-bold tracking-[.01em]">
          Hello. My name is Miyuki Nozawa.
          <br />I am a UX/UI designer based in New York.
        </div>
        <AboutSection title="My Background">
          <Paragraph>
            With a background in international business law, I have lived in
            Asia, Europe, and America, and I’ve worked in multiple international
            companies. This experience has allowed me to interact with people
            from various countries and deepen my understanding of cultural
            differences.
          </Paragraph>
          <div className="py-[20px] flex items-center justify-between">
            {[
              {
                src: "/about/niigata.png",
                alt: "niigata",
                label: "Niigata, Japan",
              },
              {
                src: "/about/tokyo.png",
                alt: "tokyo",
                label: "Tokyo, Japan",
              },
              {
                src: "/about/strasbourg.png",
                alt: "strasbourg",
                label: "Strasbourg, France",
              },
              {
                src: "/about/newyork.png",
                alt: "newyork",
                label: "New York, USA",
              },
            ].map(({ src, alt, label }, i) => (
              <div className="text-center space-y-[20px]" key={i}>
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
                <div className="text-[18px] tracking-[.01em]">{label}</div>
              </div>
            ))}
          </div>
        </AboutSection>
        <AboutSection title="My Experiences">
          <Paragraph>
            Across the various industries that I’ve worked in, such as fashion,
            textiles, cosmetics, and art, my roles have always involved elements
            of design. I became motivated to improve the usability issues of a
            company&apos;s website, so I began studying web development. This
            led me to stumble upon the concepts of UX/UI for the first time. As
            I continued my studies in web development, I realized that I was
            actually more interested in the design aspect of building websites
            and applications, so I decided to pivot my focus completely to UX
            design. In the industries I&apos;ve worked in, I&apos;ve often
            engaged directly with consumers&apos; feedback and experimented to
            meet their needs. As a UX designer, conducting user tests is a
            significant part of problem-solving, and I believe my past
            experiences can be maximized in this role. Furthermore, I aim to
            leverage the knowledge I&apos;ve gained across various industries to
            assist in providing consumers with richer experiences through
            websites.
          </Paragraph>
        </AboutSection>
        <AboutSection title="My Goal">
          <Paragraph>
            We are now in an era where people around the world can access the
            same websites and applications from anywhere, and these have become
            an integral part of business. Leveraging my background, I aspire to
            become a UX/UI designer who can address the pain points of our users
            and play an integral role in improving their experience.
            Furthermore, I look forward to working as part of a team and
            collaborating with individuals from diverse backgrounds while
            offering my own unique perspective.
          </Paragraph>
        </AboutSection>
      </ProjectSection>
      <Bottom ref={footerRef} visible={isFooterVisible}>
        <div className="space-y-[10px] flex flex-col items-center">
          <div className="text-[60px] font-bold text-white tracking-[.01em]">
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
    </main>
  );
}
