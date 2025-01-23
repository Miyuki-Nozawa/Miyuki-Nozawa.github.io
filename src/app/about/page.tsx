"use client";

import Image from "next/image";
import { useRef } from "react";

import ProjectSection from "@/app/components/project-section";
import Paragraph from "@/app/components/paragraph";
import Bottom from "@/app/components/bottom";
import Connect from "@/app/components/connect";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-[5vw] lg:space-y-[30px]">
      <div className="text-[5.8vw] lg:text-[27px] font-semibold tracking-[.01em]">
        {title}
      </div>
      {children}
    </div>
  );
};

export default function About() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isFooterVisible = useIntersectionObserver(footerRef);

  return (
    <main className="absolute top-0 space-y-[20px]">
      {/* Hero */}
      <div className="bg-[url('/about/hero.png')] bg-cover bg-center bg-no-repeat w-[100vw] h-[75vw] lg:w-[1440px] lg:h-[854px] rounded-b-[54px] lg:rounded-b-[200px]">
        <div className="relative top-[19vw] lg:top-[192px] h-[56vw] lg:h-[calc(100%-192px)] flex items-center w-[69vw] lg:w-[1000px] mx-auto text-black text-[7.4vw] lg:text-[60px] font-bold tracking-[.01em]">
          About Me
        </div>
      </div>
      {/* Content */}
      <ProjectSection>
        <div className="text-[5.8vw] lg:text-[40px] font-semibold lg:font-bold tracking-[.01em]">
          Hello.
          <br />
          My name is Miyuki Nozawa.
          <br />I am a Product Designer based in New York.
        </div>
        <AboutSection title="My Background">
          <Paragraph>
            With a background in international business law, I have lived in
            Asia, Europe, and America, and I’ve worked in multiple international
            companies. This experience has allowed me to interact with people
            from various countries and deepen my understanding of cultural
            differences.
          </Paragraph>
          <div className="py-[5vw] lg:py-[20px] flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-[5vw]">
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
              <div
                className="text-center space-y-[2vw] lg:space-y-[20px]"
                key={i}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-[31vw] h-[31vw] lg:w-[200px] lg:h-[200px]"
                />
                <div className="text-[3.6vw] lg:text-[18px] tracking-[.01em]">
                  {label}
                </div>
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
            led me to stumble upon the concepts of <b>UX/UI</b> for the first
            time. As I continued my studies in web development, I realized that
            I was actually more interested in{" "}
            <b>the design aspect of building websites and applications</b>, so I
            decided to pivot my focus completely to UX design. In the industries
            I&apos;ve worked in, I&apos;ve often engaged directly with
            consumers&apos; feedback and experimented to meet their needs. As a
            UX designer, conducting user tests is a significant part of
            problem-solving, and I believe my past experiences can be maximized
            in this role. Furthermore, I aim to leverage the knowledge I&apos;ve
            gained across various industries to
            <b>
              assist in providing consumers with richer experiences through
              websites
            </b>
            .
          </Paragraph>
        </AboutSection>
        <AboutSection title="My Goal">
          <Paragraph>
            We are now in an era where people around the world can access the
            same websites and applications from anywhere, and these have become
            an integral part of business. Leveraging my background, I aspire to
            become a UX/UI designer who can{" "}
            <b>address the pain points of our users</b>
            and play an integral role in improving their experience.
            Furthermore, I look forward to working as part of a team and
            collaborating with individuals from <b>diverse backgrounds</b> while
            offering my own unique perspective.
          </Paragraph>
        </AboutSection>
        <AboutSection title="Outside of Design">
          <Paragraph>
            In my free time, I enjoy activities that keep me inspired and
            focused. Climbing helps me develop creative problem-solving skills,
            exploring new places and playing with my dog spark fresh ideas, and
            baking bread teaches me patience and mindfulness.
          </Paragraph>
          <div className="py-[5vw] lg:py-[20px] flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-[5vw]">
            {[
              {
                src: "/about/climbing.png",
                alt: "climbing",
                label: "Climbing",
              },
              {
                src: "/about/azuki.png",
                alt: "Azuki",
                label: "Playing with my Shiba Inu",
              },
              {
                src: "/about/anpan.png",
                alt: "Baking bread",
                label: "Baking bread",
              },
            ].map(({ src, alt, label }, i) => (
              <div
                className="text-center space-y-[2vw] lg:space-y-[20px]"
                key={i}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-[31vw] h-[31vw] lg:w-[200px] lg:h-[200px]"
                />
                <div className="text-[3.6vw] lg:text-[18px] tracking-[.01em]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </AboutSection>
      </ProjectSection>
      <Bottom ref={footerRef} visible={isFooterVisible}>
        <Connect />
      </Bottom>
    </main>
  );
}
