import Text from "@/app/components/text";

export default function SubSection({
  title,
  color,
  children,
  spacing = "space-y-12",
  textAbove = "",
  subtitle = "",
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  spacing?: string;
  textAbove?: string;
  subtitle?: string;
}) {
  return (
    <div className={`${spacing} w-full`}>
      {textAbove && <Text className="mb-[80px]">{textAbove}</Text>}
      <div className="space-y-[30px]">
        <div
          className={`font-manrope text-[1.75rem] font-semibold tracking-[.02em] underline ${color}`}
        >
          {title}
        </div>
        {subtitle && <Text>{subtitle}</Text>}
      </div>
      {children}
    </div>
  );
}
