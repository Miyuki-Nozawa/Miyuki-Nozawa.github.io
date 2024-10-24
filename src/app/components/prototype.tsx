import { forwardRef } from "react";
import Image from "next/image";

import Figma from "@/app/components/figma";
import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";

export type PrototypeProps = {
  exploring: {
    desc: string;
    lofi: Images;
    midfi: Images;
  };
  tests: {
    desc: React.ReactNode;
    images: string[];
  };
  refining: {
    desc: string;
    images: string[];
  };
  building?: {
    desc: string;
    content: React.ReactNode;
  };
  branding?: {
    desc: string;
    images: string[];
    url: string;
  };
  final?: {
    desc: string;
    images: string[];
    url: string;
  };
};

type Images = {
  images: string[];
  descs?: string[];
  descClass?: string;
  width: number;
  height: number;
  url: string;
};

export default forwardRef(function Prototype(
  { exploring, tests, refining, building, branding, final }: PrototypeProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Prototype">
        <ProjectSubSection title="Exploring Ideas from Low-Fi to Mid-Fi">
          <Paragraph>{exploring.desc}</Paragraph>
          <div className="py-[20px] space-y-[30px]">
            <div className="flex justify-between">
              {exploring.lofi.images.map((img, i) => (
                <div key={i} className="space-y-[10px] flex-1">
                  <Image
                    src={img}
                    alt="lofi"
                    width={exploring.lofi.width}
                    height={exploring.lofi.height}
                    className="rounded-[10px]"
                  />
                  {exploring.lofi.descs && (
                    <div
                      className={`text-[18px] tracking-[.01em] ${exploring.lofi.descClass}`}
                    >
                      {exploring.lofi.descs[i]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Figma href={exploring.lofi.url}>View the Low-Fi Wireframes</Figma>
          </div>
          <div className="py-[20px] space-y-[30px]">
            <div className="flex justify-between">
              {exploring.midfi.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="midfi"
                  width={exploring.midfi.width}
                  height={exploring.midfi.height}
                />
              ))}
            </div>
            <Figma href={exploring.midfi.url}>View the Mid-Fi Wireframes</Figma>
          </div>
        </ProjectSubSection>
        <ProjectSubSection title="Ensuring Users Understand the Design Layouts">
          {tests.desc}
          <div className="py-[20px] space-y-[50px]">
            {tests.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="test"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </ProjectSubSection>
        <ProjectSubSection title="Refining Designs through Iterated Mid-Fi Wireframes">
          <Paragraph>{refining.desc}</Paragraph>
          <div className="py-[20px] space-y-[50px]">
            {refining.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="refine"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </ProjectSubSection>
        {building && (
          <ProjectSubSection title="Building a Strong Brand">
            <Paragraph>{building.desc}</Paragraph>
            {building.content}
          </ProjectSubSection>
        )}
        {branding && (
          <ProjectSubSection title="Applying Branding in Hi-Fi Wireframes">
            <Paragraph>{branding.desc}</Paragraph>
            <div className="py-[20px] space-y-[30px]">
              <div className="flex justify-between">
                {branding.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="branding"
                    width={220}
                    height={476}
                  />
                ))}
              </div>
              <Figma href={branding.url}>View the Hi-Fi Wireframes</Figma>
            </div>
          </ProjectSubSection>
        )}
        {final && (
          <ProjectSubSection title="Adding the Feature to Korean Air’s Website in Hi-Fi Wireframes">
            <Paragraph>{final.desc}</Paragraph>
            <div className="py-[20px] space-y-[30px]">
              <div className="flex flex-wrap justify-between gap-[30px]">
                {final.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="final"
                    width={480}
                    height={280}
                  />
                ))}
              </div>
              <Figma href={final.url}>View the Hi-Fi Wireframes</Figma>
            </div>
          </ProjectSubSection>
        )}
      </ProjectSection>
    </div>
  );
});
