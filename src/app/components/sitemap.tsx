import Image from "next/image";
import Figma from "@/app/components/figma";

export default function Sitemap({
  src,
  url,
  className,
}: {
  src: string;
  url: string;
  className: string;
}) {
  return (
    <div className="space-y-[30px]">
      <div className="overflow-x-scroll scrollbar-always-visible">
        <div className={className}>
          <Image src={src} alt="sitemap" fill />
        </div>
      </div>
      <Figma href={url}>View the Sitemap</Figma>
    </div>
  );
}
