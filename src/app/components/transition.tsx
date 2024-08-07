import DownArrow from "@/app/components/down-arrow";
import Text from "@/app/components/text";

export default function Transition({
  text,
  noPadding = false,
  className,
}: {
  text: string;
  noPadding?: boolean;
  className?: string;
}) {
  const padding = noPadding ? "" : "py-9";
  return (
    <div>
      <div
        className={`flex items-center space-x-12 w-2/3 ml-auto ${padding} ${className}`}
      >
        <DownArrow />
        <Text>{text}</Text>
      </div>
    </div>
  );
}
