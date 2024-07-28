import DiamondHeader from "@/app/components/diamond-header";

export default function ResearchSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-12">
      <DiamondHeader title={title} />
      {children}
    </div>
  );
}
