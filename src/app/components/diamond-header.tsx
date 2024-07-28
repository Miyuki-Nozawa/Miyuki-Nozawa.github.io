import Image from "next/image";
import Text from "@/app/components/text";

export default function DiamondHeader({
  color,
  title,
  className = "",
}: {
  color: "green" | "brown" | "light-pink";
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={`/icons/${color}-diamond.svg`}
        width={30}
        height={30}
        alt="diamond"
      />
      <Text className="font-medium">{title}</Text>
    </div>
  );
}
