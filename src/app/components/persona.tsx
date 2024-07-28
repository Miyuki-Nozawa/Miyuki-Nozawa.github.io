import Text from "@/app/components/text";
import Image from "next/image";

export default function Persona({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div>
      <div className="text-[28px] text-dark-brown font-semibold tracking-[.02em]">
        {title}
      </div>
      <Text className="mt-8 mb-16">{desc}</Text>
      <Image src={img} alt={title} width={1040} height={1015} />
    </div>
  );
}
