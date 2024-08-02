import Text from "@/app/components/text";
import Image from "next/image";

export default function Persona({
  title,
  desc,
  img,
  className,
}: {
  title: string;
  desc: string;
  img: string;
  className: string;
}) {
  return (
    <div>
      <div
        className={`text-[28px] font-semibold tracking-[.02em] ${className}`}
      >
        {title}
      </div>
      <Text className="mt-8 mb-16">{desc}</Text>
      <Image
        src={img}
        alt={title}
        width={1040}
        height={1015}
        className="border border-[#D9D9D9] rounded-lg"
      />
    </div>
  );
}
