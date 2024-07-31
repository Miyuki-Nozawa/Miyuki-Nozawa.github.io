import DiamondHeader from "@/app/components/diamond-header";

export default function DiamondHeadedList({
  color,
  title,
  items,
}: {
  color: "green" | "brown";
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-5">
      <DiamondHeader color={color} title={title} className="space-x-3" />
      <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-8 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
