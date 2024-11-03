import Link from "next/link";

import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

export type HeroProps = {
  title: string;
  subtitle: string;
  desc: string;
  role: string;
  type: string;
  timeline: string;
  url: string;
  children: React.ReactNode;
};

export default function Hero({
  title,
  subtitle,
  desc,
  role,
  type,
  timeline,
  url,
  children,
}: HeroProps) {
  return (
    <div
      className={
        "bg-base pt-[7.5vw] lg:pt-[100px] pb-[12.8vw] lg:pb-[130px] " +
        "rounded-b-[54px] lg:rounded-b-[200px] "
      }
    >
      <div className="max-w-[70vw] lg:max-w-default mx-auto space-y-[5vw] lg:space-y-[30px]">
        <div className="space-y-[5vw] lg:space-y-[30px]">
          <div className="space-y-[10px]">
            <div className="text-[5vw] lg:text-[40px] font-semibold lg:font-bold tracking-[.01em]">
              {title}
            </div>
            <div className="text-[6.5vw] lg:text-[60px] font-bold tracking-[.01em]">
              {subtitle}
            </div>
          </div>
          <div className="text-[4.6vw] lg:text-[27px] font-semibold tracking-[.01em]">
            {desc}
          </div>
        </div>
        {children}
        <div className="flex flex-col lg:flex-row justify-between space-y-[30px]">
          <div
            className={
              "space-y-[10px] lg:space-y-[20px] text-[4vw] lg:text-[22px] lg:font-medium tracking-[.01em]"
            }
          >
            <div>Role: {role}</div>
            <div>Type: {type}</div>
            <div>Timeline: {timeline}</div>
          </div>
          <div className="flex items-end">
            <Link
              href={url}
              target="_blank"
              onMouseEnter={handleCursorHoverStart}
              onMouseLeave={handleCursorHoverStop}
              className="w-full"
            >
              <div
                className={
                  "self-end flex bg-brown3 rounded-[22px] lg:rounded-[75px] px-[10px] " +
                  "py-[10px] lg:px-[60px] lg:py-[15px] justify-center items-center text-black " +
                  "text-[4vw] lg:text-[20px] font-medium lg:font-semibold tracking-[.01em]"
                }
              >
                View Hi-fi prototype
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
