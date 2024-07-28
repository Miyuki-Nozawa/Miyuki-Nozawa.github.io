import Image from "next/image";
import Text from "@/app/components/text";

export default function DiamondHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center space-x-7">
      <Image
        src="/icons/green-diamond.svg"
        width={30}
        height={30}
        alt="diamond"
      />
      <Text className="font-medium">{title}</Text>
    </div>
  );
}
