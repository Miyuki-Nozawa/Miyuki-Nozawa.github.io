import { forwardRef } from "react";
import Image from "next/image";

import Figma from "@/app/components/figma";
import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";
import KeySection from "@/app/components/key-section";
import OutlinedCard from "@/app/components/outlined-card";
import Down from "@/app/components/down";
import { KeyCardT } from "@/types";

export type DefineProps = {
  affinity: {
    desc: string;
    maps: AffinityMap[];
    url: string;
    findings: KeyCardT;
  };
  personas: {
    desc: string;
    personas: Persona[];
    url: string;
  };
  exploring: {
    desc: string;
    povStatement: string;
    hmwQuestion: string;
    summary: string;
  };
  goals: {
    desc: string;
    img: string;
    url: string;
  };
};

type AffinityMap = {
  label: string;
  map: React.ReactNode;
};

type Persona = {
  name: string;
  desc: React.ReactNode;
  image: string;
};

export default forwardRef(function Define(
  { affinity, personas, exploring, goals }: DefineProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Define">
        <ProjectSubSection title="Gaining a Deeper Understanding of User Needs and Pain Points">
          <Paragraph>{affinity.desc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            {affinity.maps.map(({ label, map }, i) => (
              <div
                key={i}
                className="w-full h-[700px] px-[30px] py-[50px] space-y-[30px] bg-white rounded-[20px]"
              >
                <div className="text-[22px] font-medium tracking-[.01em]">
                  {label}
                </div>
                {map}
              </div>
            ))}
            <Figma href={affinity.url}>View the Affinity Map</Figma>
          </div>
          <KeySection title="Key Findings" cards={affinity.findings} />
        </ProjectSubSection>
        <ProjectSubSection title="Transforming Insights into Personas">
          <Paragraph>{personas.desc}</Paragraph>
          <div className="space-y-[20px]">
            {personas.personas.map(({ name, desc, image }, i) => (
              <div key={i} className="space-y-[30px] pb-[20px]">
                <div className="space-y-[10px]">
                  <div className="text-[22px] font-medium tracking-[.01em]">
                    {name}
                  </div>
                  {desc}
                </div>
                <Image
                  src={image}
                  alt="persona"
                  width={1000}
                  height={984}
                  className="rounded-[20px]"
                />
              </div>
            ))}
          </div>
          <Figma href={personas.url}>View the Personas</Figma>
        </ProjectSubSection>
        <ProjectSubSection title="Exploring and Clarifying Solutions for User Needs">
          <Paragraph>{exploring.desc}</Paragraph>
          <OutlinedCard title="POV (Point Of View) statement">
            {exploring.povStatement}
          </OutlinedCard>
          <Down />
          <Paragraph>{exploring.summary}</Paragraph>
          <OutlinedCard title="HMW (How Might We) question">
            {exploring.hmwQuestion}
          </OutlinedCard>
        </ProjectSubSection>
        <ProjectSubSection title="Establishing Balanced Goals for Project Success">
          <Paragraph>{goals.desc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            <Image
              src={goals.img}
              alt="project goals"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
            <Figma href={goals.url}>View the Project Goals</Figma>
          </div>
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
