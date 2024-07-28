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
      <ul className="list-disc list-outside text-[1.6rem] tracing-[0.02em] pl-8 space-y-1 font-light">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
