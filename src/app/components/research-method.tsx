import DiamondHeader from "@/app/components/diamond-header";
import Text from "@/app/components/text";
import { DiamondColor } from "@/types";

export default function ResearchMethod({
  title,
  desc,
  children,
  color,
}: {
  title: string;
  desc: string;
  color: DiamondColor;
  children: React.ReactNode;
}) {
  return (
    <div className="p-12 space-y-20 border border-border rounded-2xl">
      <div className="space-y-7">
        <DiamondHeader color={color} title={title} className="space-x-7" />
        <Text>{desc}</Text>
      </div>
      {children}
    </div>
  );
}
