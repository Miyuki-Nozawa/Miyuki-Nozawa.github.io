import Text from "@/app/components/text";

export default function TestCard({
  title,
  className,
  textAbove = "",
  children,
}: {
  title: string;
  className: string;
  textAbove?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-20">
      {textAbove && <Text>{textAbove}</Text>}
      <div className={`p-12 space-y-7 rounded-lg border-4 w-full ${className}`}>
        <div className="text-[26px] tracking-[.02em] font-medium underline">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
