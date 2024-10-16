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
  {
    desc,
    affinityMaps,
    affinityMapUrl,
    affinityMapKeyFindings,
    personaDesc,
    personas,
    personasUrl,
    exploringDesc1,
    povStatement,
    hmwQuestion,
    exploringDesc2,
    projectGoalsDesc,
    projectGoals,
    projectGoalsUrl,
  }: {
    desc: string;
    affinityMaps: AffinityMap[];
    affinityMapUrl: string;
    affinityMapKeyFindings: KeyCardT;
    personaDesc: string;
    personas: Persona[];
    personasUrl: string;
    exploringDesc1: string;
    povStatement: string;
    hmwQuestion: string;
    exploringDesc2: string;
    projectGoalsDesc: string;
    projectGoals: string;
    projectGoalsUrl: string;
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Define">
        <ProjectSubSection title="Gaining a Deeper Understanding of User Needs and Pain Points">
          <Paragraph>{desc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            {affinityMaps.map(({ label, map }, i) => (
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
            <Figma href={affinityMapUrl}>View the Affinity Map</Figma>
          </div>
          <KeySection title="Key Findings" cards={affinityMapKeyFindings} />
        </ProjectSubSection>
        <ProjectSubSection title="Transforming Insights into Personas">
          <Paragraph>{personaDesc}</Paragraph>
          <div className="space-y-[20px]">
            {personas.map(({ name, desc, image }, i) => (
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
          <Figma href={personasUrl}>View the Personas</Figma>
        </ProjectSubSection>
        <ProjectSubSection title="Exploring and Clarifying Solutions for User Needs">
          <Paragraph>{exploringDesc1}</Paragraph>
          <OutlinedCard title="POV (Point Of View) statement">
            {povStatement}
          </OutlinedCard>
          <Down />
          <Paragraph>{exploringDesc2}</Paragraph>
          <OutlinedCard title="HMW (How Might We) question">
            {hmwQuestion}
          </OutlinedCard>
        </ProjectSubSection>
        <ProjectSubSection title="Establishing Balanced Goals for Project Success">
          <Paragraph>{projectGoalsDesc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            <Image
              src={projectGoals}
              alt="project goals"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
            <Figma href={projectGoalsUrl}>View the Project Goals</Figma>
          </div>
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
