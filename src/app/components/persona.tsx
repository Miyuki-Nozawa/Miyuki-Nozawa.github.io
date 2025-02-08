import Image from "next/image";
import Figma from "./figma";

export default function Persona({ src, url }: { src: string; url: string }) {
  return (
    <>
      <div className="space-y-[2.6vw] lg:space-y-[20px]">
        <Image
          src={src}
          alt="persona"
          width={1000}
          height={984}
          className="rounded-[10px] lg:rounded-[20px]"
        />
      </div>
      <Figma href={url}>View the Personas</Figma>
    </>
  );
}
