import Image from "next/image";
import Text from "@/app/components/text";

export default function Transition({ text }: { text: string }) {
  return (
    <div className="mx-64">
      <div className="flex items-center space-x-6 w-2/3 ml-auto my-9">
        <Image
          src="/icons/down-arrow.svg"
          alt="down arrow"
          width={75}
          height={100}
        />
        <Text>{text}</Text>
      </div>
    </div>
  );
}
