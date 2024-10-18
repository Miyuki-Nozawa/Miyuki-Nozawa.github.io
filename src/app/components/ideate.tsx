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
  };
  refine: {
    desc: string;
    flows: Flow[];
    url: string;
  };
  map: {
    desc: string;
    label: string;
    img: React.ReactNode;
    url: string;
  };
};

type Flow = {
  label: string;
  img: string;
};

export default forwardRef(function Ideate(
  { brainstorm, sitemap, refine, map }: IdeateProps,
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
              <Image
                src={sitemap.img}
                alt="sitemap"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
              <Figma href={sitemap.url}>View the Sitemap</Figma>
            </div>
          </ProjectSubSection>
        )}
        <ProjectSubSection title="Refining Key Design Decisions">
          <Paragraph>{refine.desc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            <div className="space-y-[50px]">
              {refine.flows.map(({ label, img }, i) => (
                <div key={i} className="py-[20px] space-y-[30px]">
                  <div className="flex space-x-[10px]">
                    <Image
                      src="/icons/star-brown.svg"
                      alt="star"
                      width={33}
                      height={33}
                      className="mb-auto"
                    />
                    <span className="text-[22px] font-medium tracking-[.01em]">
                      {label}
                    </span>
                  </div>
                  <div className="py-[20px]">
                    <Image
                      src={img}
                      alt="user flow"
                      width={0}
                      height={0}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Figma href={refine.url}>View the Task Flows</Figma>
          </div>
        </ProjectSubSection>
        <ProjectSubSection title="Mapping out User Needs and Goals">
          <Paragraph>{map.desc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            <div className="py-[20px] space-y-[30px]">
              <div className="flex space-x-[10px]">
                <Image
                  src="/icons/star-brown.svg"
                  alt="star"
                  width={33}
                  height={33}
                  className="mb-auto"
                />
                <span className="text-[22px] font-medium tracking-[.01em]">
                  {map.label}
                </span>
              </div>
              <div className="pb-[30px] overflow-x-scroll">{map.img}</div>
            </div>
            <Figma href={map.url}>View the User Flow</Figma>
          </div>
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
