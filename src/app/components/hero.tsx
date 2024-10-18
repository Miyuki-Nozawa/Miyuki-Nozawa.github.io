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
    <div className="bg-base pt-[100px] pb-[130px] rounded-b-[200px]">
      <div className="max-w-default mx-auto">
        <div className="text-[40px] font-bold tracking-[.01em]">{title}</div>
        <div className="text-[60px] font-bold tracking-[.01em]">{subtitle}</div>
        <div className="text-[27px] font-semibold my-[30px] tracking-[.01em]">
          {desc}
        </div>
        {children}
        <div className="flex justify-between">
          <div className="space-y-[20px] text-[22px] font-medium tracking-[.01em]">
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
            >
              <div className="self-end flex bg-brown3 rounded-[75px] px-[60px] py-[15px] justify-center items-center text-black text-[20px] font-semibold tracking-[.01em]">
                View Hi-fi prototype
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
