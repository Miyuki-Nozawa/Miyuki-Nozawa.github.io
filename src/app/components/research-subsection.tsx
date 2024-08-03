import DiamondHeader from "@/app/components/diamond-header";
import { DiamondColor } from "@/types";

export default function ResearchSubsection({
  title,
  children,
  color,
}: {
  title: string;
  children: React.ReactNode;
  color: DiamondColor;
}) {
  return (
    <div className="space-y-12">
      <DiamondHeader color={color} title={title} className="space-x-7" />
      {children}
    </div>
  );
}
