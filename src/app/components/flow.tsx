import Image from "next/image";
import Figma from "./figma";

export default function Flow({
  label,
  src,
  url,
  className,
}: {
  label: string;
  src: string;
  url: string;
  className: string;
}) {
  return (
    <div className="py-[2.56vw] lg:py-[20px] space-y-[5.13vw] lg:space-y-[30px]">
      <div className="flex space-x-[2.1vw] lg:space-x-[10px]">
        <Image
          src="/icons/star-brown.svg"
          alt="star"
          width={33}
          height={33}
          className="w-[6.2vw] h-[6.2vw] lg:w-[33px] lg:h-[33px]"
        />
        <span className="text-[4.1vw] lg:text-[22px] font-medium tracking-[.01em]">
          {label}
        </span>
      </div>
      <div className="py-[5.13vw] lg:py-[20px] overflow-x-scroll scrollbar-always-visible">
        <div className={className}>
          <Image src={src} alt="user flow" fill />
        </div>
      </div>
      <Figma href={url}>View the User Flow</Figma>
    </div>
  );
}
