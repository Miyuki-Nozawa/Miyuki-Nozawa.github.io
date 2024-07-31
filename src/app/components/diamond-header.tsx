import Image from "next/image";
import Text from "@/app/components/text";
import { DiamondColor } from "@/types";

export default function DiamondHeader({
  color,
  title,
  className = "",
}: {
  color: DiamondColor;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center space-x-5 ${className}`}>
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
