import Image from "next/image";
import Figma from "@/app/components/figma";

export default function AffinityMap({
  src,
  label,
  url,
  className,
}: {
  src: string;
  label: string;
  url: string;
  className: string;
}) {
  return (
    <div className="py-[5.13vw] lg:py-[20px] space-y-[5.1vw] lg:space-y-[50px]">
      <div
        className={
          "w-full px-[5.1vw] lg:px-[30px] py-[3.8vw] lg:py-[50px] space-y-[2.6vw] " +
          "lg:space-y-[30px] bg-white rounded-[10px] lg:rounded-[20px] "
        }
      >
        <div className="text-[3.1vw] px-[20px] lg:text-[22px] font-medium tracking-[.01em]">
          {label}
        </div>
        <div className="py-[2.56vw] lg:py-[20px] overflow-x-scroll">
          <div className={className}>
            <Image src={src} alt="affinity map" fill />
          </div>
        </div>
      </div>
      <Figma href={url}>View the Affinity Map</Figma>
    </div>
  );
}
