import Image from "next/image";
import DownArrow from "@/app/components/down-arrow";
import Text from "@/app/components/text";

export default function Transition({ text }: { text: string }) {
  return (
    <div>
      <div className="flex items-center space-x-12 w-2/3 ml-auto my-9">
        <DownArrow />
        <Text>{text}</Text>
      </div>
    </div>
  );
}
