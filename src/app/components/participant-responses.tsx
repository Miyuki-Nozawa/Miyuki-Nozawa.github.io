import Image from "next/image";
import SimpleSection from "@/app/components/simple-section";

export default function ParticpantResponses({
  img,
  alt,
}: {
  img: string;
  alt: string;
}) {
  return (
    <SimpleSection title="Responses from participants">
      <div className="relative w-full h-[532px]">
        <Image src={img} alt={alt} fill={true} className="object-contain" />
      </div>
    </SimpleSection>
  );
}
