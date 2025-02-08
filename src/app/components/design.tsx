import { forwardRef } from "react";
import Image from "next/image";

import Figma from "@/app/components/figma";
import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import Subsection from "@/app/components/subsection";

export type DesignProps = {
  exploring: {
    desc: string | React.ReactNode;
    alternateTitle?: string;
    lofi: Images;
    midfi?: Images;
  };
  adding?: {
    desc: string;
    images: string[];
    imagesSm: string[];
    url: string;
  };
  tests: {
    desc: string | React.ReactNode;
    images: {
      desktop: string[];
      mobile: string[];
    };
  };
  refining?: {
    title?: string;
    desc?: string;
    images: {
      desktop: string[];
      mobile: string[];
    };
  };
  building?: {
    title: string;
    desc?: string;
    content: React.ReactNode;
  };
  branding?: {
    title?: string;
    desc?: string;
    images: ImageT[];
    url: string;
  };
  final?: {
    desc: string;
    images: string[];
    url: string;
  };
};

type ImageT = {
  src: string;
  default: [number, number];
  desktop: string;
  mobile: string;
};

type Images = {
  images: string[];
  descs?: string[];
  descClass?: string;
  desktop: string;
  mobile: string;
  default: [number, number];
  url: string;
};

export default forwardRef(function Design(
  {
    exploring,
    adding,
    tests,
    refining,
    building,
    branding,
    final,
  }: DesignProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Design">
        {exploring && (
          <Subsection
            title={exploring.alternateTitle || "Exploring Ideas"}
          >
            <Paragraph>{exploring.desc}</Paragraph>
            <div className="pb-[2.6vw] lg:pb-[20px] space-y-[5.1vw] lg:space-y-[30px]">
              <div className="flex justify-between overflow-x-scroll space-x-[2.1vw] py-[2.6vw] lg:py-0 lg:space-x-0">
                {exploring.lofi.images.map((img, i) => (
                  <div key={i} className="space-y-[10px] flex-shrink-0">
                    <Image
                      src={img}
                      alt="lofi"
                      width={exploring.lofi.default[0]}
                      height={exploring.lofi.default[1]}
                      className={`rounded-[10px] ${exploring.lofi.mobile} ${exploring.lofi.desktop}`}
                    />
                    {exploring.lofi.descs && (
                      <div
                        className={`text-[2.6vw] lg:text-[18px] tracking-[.01em] ${exploring.lofi.descClass}`}
                      >
                        {exploring.lofi.descs[i]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {exploring.midfi && (
              <div className="pb-[2.6vw] lg:pb-[20px] space-y-[5.1vw] lg:space-y-[30px]">
                <div className="flex justify-between overflow-x-scroll space-x-[2.1vw] py-[2.6vw] lg:py-0 lg:space-x-0">
                  {exploring.midfi.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt="midfi"
                      width={exploring.midfi?.default[0]}
                      height={exploring.midfi?.default[1]}
                      className={`rounded-[6.25px] lg:rounded-[10px] ${exploring.midfi?.mobile} ${exploring.midfi?.desktop}`}
                    />
                  ))}
                </div>
                <Figma href={exploring.midfi.url}>
                  View the Mid-Fi Wireframes
                </Figma>
              </div>
            )}
          </Subsection>
        )}
        {adding && (
          <Subsection title="Adding Detail to the Layouts">
            <Paragraph>{adding.desc}</Paragraph>
            <div className="py-[20px] flex justify-between">
              <div className="flex space-x-[20px]">
                {adding.images.map((img, i) => (
                  <Image key={i} src={img} alt="add" width={316} height={616} />
                ))}
              </div>
              <div className="flex space-x-[20px]">
                {adding.imagesSm.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="add"
                    width={150}
                    height={489}
                    className="mt-auto"
                  />
                ))}
              </div>
            </div>
            <Figma href={adding.url}>View the Mid-Fi Wireframes</Figma>
          </Subsection>
        )}
        <Subsection title="Ensuring Users Understand the Design Layouts">
          <Paragraph>{tests.desc}</Paragraph>
          <div className="lg:hidden py-[2.6vw] space-y-[3.5vw]">
            {tests.images.mobile.map((img, i) => (
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
          <div className="hidden lg:block py-[20px] space-y-[50px]">
            {tests.images.desktop.map((img, i) => (
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
        </Subsection>
        {refining && (
          <Subsection
            title={
              refining.title ||
              "Refining Designs through Iterated Mid-Fi Wireframes"
            }
          >
            {refining.desc && <Paragraph>{refining.desc}</Paragraph>}
            <div className="lg:hidden py-[2.6vw] space-y-[3.5vw]">
              {refining.images.mobile.map((img, i) => (
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
            <div className="hidden lg:block py-[20px] space-y-[50px]">
              {refining.images.desktop.map((img, i) => (
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
          </Subsection>
        )}
        {building && (
          <Subsection title={building.title}>
            <Paragraph>{building.desc}</Paragraph>
            {building.content}
          </Subsection>
        )}
        {branding && (
          <Subsection title={branding.title || "Applying Branding in Hi-Fi Wireframes"}>
            {branding.desc && <Paragraph>{branding.desc}</Paragraph>}
            <div className="lg:py-[20px] space-y-[2.56vw] lg:space-y-[30px]">
              <div className="py-[2.56vw] lg:py-0 flex flex-wrap gap-y-[2.56vw] lg:flex-nowrap justify-between">
                {branding.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt="branding"
                    width={img.default[0]}
                    height={img.default[1]}
                    className={`mt-auto ${img.mobile} ${img.desktop}`}
                  />
                ))}
              </div>
              <Figma href={branding.url}>View the Hi-Fi Wireframes</Figma>
            </div>
          </Subsection>
        )}
        {final && (
          <Subsection title="Adding the Feature to Korean Air’s Website in Hi-Fi Wireframes">
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
          </Subsection>
        )}
      </ProjectSection>
    </div>
  );
});
