import Image from "next/image";

export default function DesignCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="row-span-1 col-span-1 flex space-x-[20px] p-[20px]">
      <div>
        <Image src={icon} alt={title} width={60} height={60} />
      </div>
      <div className="space-y-[20px]">
        <div className="text-[27px] font-semibold h-[60px] flex items-center tracking-[.01em]">
          {title}
        </div>
        <div className="text-[18px] space-y-[10px] tracking-[.01em]">
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
