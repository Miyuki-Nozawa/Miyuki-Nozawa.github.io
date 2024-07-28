import Text from "@/app/components/text";

export default function ResearchGoalSummary({
  className = "",
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={`px-16 py-20 rounded-3xl space-y-5 ${className}`}>
      <div className="text-3xl font-medium tracking-.02em underline">
        Research Goal
      </div>
      <Text>{children}</Text>
    </div>
  );
}
