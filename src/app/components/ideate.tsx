import React, { forwardRef } from "react";
import Image from "next/image";

import Figma from "@/app/components/figma";
import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";

export type IdeateProps = {
  brainstorm: {
    desc: string;
    content: React.ReactNode;
  };
  sitemap?: {
    desc: string;
    img: string;
    url: string;
    className: string;
  };
  refine?: {
    desc: string;
    flows: Flow[];
    url: string;
  };
  map?: {
    desc: string;
    label: string;
    img: string;
    url: string;
    className: string;
  };
  taskFlow?: {
    desc: string;
    label: string;
    img: string;
    url: string;
  };
  userFlow?: {
    desc: string;
    label: string;
    img: string;
    url: string;
  };
};

type Flow = {
  label: string;
  img: string;
  className: string;
};

export default forwardRef(function Ideate(
  { brainstorm, sitemap, refine, map, taskFlow, userFlow }: IdeateProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Ideate">
        <ProjectSubSection title="Prioritizing Features that Align Business and User Needs">
          <Paragraph>{brainstorm.desc}</Paragraph>
          {brainstorm.content}
        </ProjectSubSection>
        {sitemap && (
          <ProjectSubSection title="Designing the App Structure with a Sitemap">
            <Paragraph>{sitemap.desc}</Paragraph>
            <div className="space-y-[30px]">
              <div className="overflow-x-scroll scrollbar-always-visible">
                <div className={sitemap.className}>
                  <Image src={sitemap.img} alt="sitemap" fill />
                </div>
              </div>
              <Figma href={sitemap.url}>View the Sitemap</Figma>
            </div>
          </ProjectSubSection>
        )}
        {refine && (
          <ProjectSubSection title="Refining Key Design Decisions">
            <Paragraph>{refine.desc}</Paragraph>
            <div className="py-[2.6vw] lg:py-[20px] space-y-[5.1vw] lg:space-y-[30px]">
              <div className="space-y-[5.1vw] lg:space-y-[50px]">
                {refine.flows.map(({ label, img, className }, i) => (
                  <div
                    key={i}
                    className="py-[2.6vw] lg:py-[20px] space-y-[2.6vw] lg:space-y-[30px]"
                  >
                    <div className="flex space-x-[2vw] lg:space-x-[10px]">
                      <Image
                        src="/icons/star-brown.svg"
                        alt="star"
                        width={33}
                        height={33}
                        className="mb-auto w-[6.2vw] h-[6.2vw] lg:w-[33px] lg:h-[33px]"
                      />
                      <span className="text-[4.1vw] lg:text-[22px] font-medium tracking-[.01em]">
                        {label}
                      </span>
                    </div>
                    <div className="py-[5.13vw] lg:py-[20px] overflow-x-scroll scrollbar-always-visible">
                      <div className={className}>
                        <Image src={img} alt="user flow" fill />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Figma href={refine.url}>View the Task Flows</Figma>
            </div>
          </ProjectSubSection>
        )}
        {map && (
          <ProjectSubSection title="Mapping out User Needs and Goals">
            <Paragraph>{map.desc}</Paragraph>
            <div className="py-[2.6vw] lg:py-[20px] space-y-[5.1vw] lg:space-y-[30px]">
              <div className="py-[2.6vw] lg:py-[20px] space-y-[5.1vw] lg:space-y-[30px]">
                <div className="flex space-x-[2.1vw] lg:space-x-[10px]">
                  <Image
                    src="/icons/star-brown.svg"
                    alt="star"
                    width={33}
                    height={33}
                    className="mb-auto w-[6.2vw] h-[6.2vw] lg:w-[33px] lg:h-[33px]"
                  />
                  <span className="text-[4.1vw] lg:text-[22px] font-medium tracking-[.01em]">
                    {map.label}
                  </span>
                </div>
                <div className="pb-[5.1vw] lg:pb-[30px] overflow-x-scroll scrollbar-always-visible">
                  <div className={map.className}>
                    <Image src={map.img} alt="user flow" fill />
                  </div>
                </div>
              </div>
              <Figma href={map.url}>View the User Flow</Figma>
            </div>
          </ProjectSubSection>
        )}
        {taskFlow && (
          <ProjectSubSection title="Task Flow: Refining Key Design Decisions">
            <Paragraph>{taskFlow.desc}</Paragraph>
            <div className="py-[20px] space-y-[30px]">
              <div className="flex space-x-[10px]">
                <Image
                  src="/icons/star-brown.svg"
                  alt="star"
                  width={33}
                  height={33}
                  className="w-[6.2vw] h-[6.2vw] lg:w-[33px] lg:h-[33px]"
                />
                <span className="text-[4.1vw] lg:text-[22px] font-medium tracking-[.01em]">
                  {taskFlow.label}
                </span>
              </div>
              <div className="py-[2.6vw] lg:py-[20px]">
                <Image
                  src={taskFlow.img}
                  alt="task flow"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Figma href={taskFlow.url}>View the Task Flow</Figma>
            </div>
          </ProjectSubSection>
        )}
        {userFlow && (
          <ProjectSubSection title="User Flow: Mapping Out User Needs and Goals">
            <Paragraph>{userFlow.desc}</Paragraph>
            <div className="py-[2.6vw] lg:py-[20px] space-y-[5.1vw] lg:space-y-[30px]">
              <div className="flex space-x-[2.1vw] lg:space-x-[10px]">
                <Image
                  src="/icons/star-brown.svg"
                  alt="star"
                  width={33}
                  height={33}
                />
                <span className="text-[4.1vw] lg:text-[22px] font-medium tracking-[.01em]">
                  {userFlow.label}
                </span>
              </div>
              <div className="pt-[2.6vw] pb-[5.1vw] lg:pt-[20px] lg:pb-[30px] overflow-x-scroll scrollbar-always-visible">
                <div className="w-[2346px] h-[625px]">
                  <Image
                    src={userFlow.img}
                    alt="user flow"
                    width={2346}
                    height={625}
                  />
                </div>
              </div>
              <Figma href={userFlow.url}>View the User Flow</Figma>
            </div>
          </ProjectSubSection>
        )}
      </ProjectSection>
    </div>
  );
});
