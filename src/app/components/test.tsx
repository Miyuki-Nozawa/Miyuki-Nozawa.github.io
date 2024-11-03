import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";
import Final, { Video } from "@/app/components/final";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

export type TestProps = {
  enhancing: {
    desc: React.ReactNode;
    taskFlows: React.ReactNode;
  };
  iterating: {
    desc: string;
    images: Image[];
  };
  final: {
    header: string;
    desc: string;
    demos: Demo[];
    url?: string;
    urls?: {
      desktop?: string;
      mobile?: string;
    };
    wideSpace?: boolean;
  };
};

type Image = {
  src: string;
  width: number;
  height: number;
};

type Demo = {
  video: Video;
  image?: Image;
  header: string;
  notes: string[];
  mirror?: boolean;
  wide?: boolean;
  vertical?: boolean;
};

export default forwardRef(function Test(
  { enhancing, iterating, final }: TestProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Test">
        <ProjectSubSection title="Enhancing Design for Better Usability">
          {enhancing.desc}
          {enhancing.taskFlows}
        </ProjectSubSection>
        <ProjectSubSection title="Iterating Designs for User-Centric Solutions">
          <Paragraph>{iterating.desc}</Paragraph>
          <div className="py-[20px] space-y-[100px]">
            {iterating.images.map(({ src, width, height }, i) => (
              <Image
                key={i}
                src={src}
                alt="iteration"
                width={width}
                height={height}
              />
            ))}
          </div>
        </ProjectSubSection>
        <ProjectSubSection title="Final Prototype">
          <div className="py-[20px]">
            <div className="bg-white rounded-[20px] px-[30px] py-[60px] space-y-[10px]">
              <div className="text-[22px] tracking-[.01em] font-medium">
                {final.header}
              </div>
              <div className="text-[18px] tracking-[.01em]">{final.desc}</div>
            </div>
          </div>
          <div
            className={`py-[20px] ${
              final.wideSpace ? "space-y-[100px]" : "space-y-[50px]"
            }`}
          >
            {final.demos.map(
              ({ video, image, header, notes, mirror, wide, vertical }, i) => (
                <Final
                  key={i}
                  video={video}
                  image={image}
                  header={header}
                  notes={notes}
                  mirror={mirror}
                  wide={wide}
                  vertical={vertical}
                />
              )
            )}
            <div>
              {final.url && (
                <Link
                  href={final.url}
                  target="_blank"
                  onMouseEnter={handleCursorHoverStart}
                  onMouseLeave={handleCursorHoverStop}
                >
                  <div
                    className={
                      "px-[60px] py-[15px] rounded-[75px] bg-brown3 text-[20px] font-semibold " +
                      "tracking-[.01em] inline-block "
                    }
                  >
                    View Hi-fi Prototype
                  </div>
                </Link>
              )}
              {final.urls && (
                <div className="flex justify-between">
                  {final.urls.desktop && (
                    <Link
                      href={final.urls.desktop}
                      target="_blank"
                      onMouseEnter={handleCursorHoverStart}
                      onMouseLeave={handleCursorHoverStop}
                    >
                      <div
                        className={
                          "px-[60px] py-[15px] rounded-[75px] bg-brown3 text-[20px] font-semibold " +
                          "tracking-[.01em] inline-block"
                        }
                      >
                        View Desktop Prototype
                      </div>
                    </Link>
                  )}
                  {final.urls.mobile && (
                    <Link
                      href={final.urls.mobile}
                      target="_blank"
                      onMouseEnter={handleCursorHoverStart}
                      onMouseLeave={handleCursorHoverStop}
                    >
                      <div
                        className={
                          "px-[60px] py-[15px] rounded-[75px] bg-brown3 text-[20px] font-semibold " +
                          "tracking-[.01em] inline-block "
                        }
                      >
                        View Mobile Prototype
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
