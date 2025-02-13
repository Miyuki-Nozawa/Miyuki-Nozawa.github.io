import Link from "next/link";
import Image from "next/image";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

export default function Figma({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="space-x-[8px] lg:space-x-[10px] flex items-center"
      onMouseEnter={handleCursorHoverStart}
      onMouseLeave={handleCursorHoverStop}
    >
      <Image
        src="/icons/figma.svg"
        alt="figma"
        width={20}
        height={27}
        className="w-[4vw] h-[5.4vw] lg:w-[20px] lg:h-[27px]"
      />
      <span className="text-[3.6vw] lg:text-[18px] text-blueLink tracking-[.01em] underline">
        <Link href={href} target="_blank">
          {children}
        </Link>
      </span>
    </div>
  );
}
