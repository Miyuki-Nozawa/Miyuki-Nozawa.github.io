import Image from "next/image";
import SimpleSection from "@/app/components/simple-section";

export default function ParticpantResponses({
  img,
  alt,
  className
}: {
  img: string;
  alt: string;
  className: string;
}) {
  return (
    <SimpleSection title="Responses from participants" className={className}>
      <div className="relative w-full h-[532px]">
        <Image src={img} alt={alt} className="object-contain" fill />
      </div>
    </SimpleSection>
  );
}
