import DiamondHeader from "@/app/components/diamond-header";
import Text from "@/app/components/text";

export default function ResearchMethod({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-20">
      <div className="space-y-7">
        <DiamondHeader color="green" title={title} className="space-x-7" />
        <Text>{desc}</Text>
      </div>
      {children}
    </div>
  );
}
