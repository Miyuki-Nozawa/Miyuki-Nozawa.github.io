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
    <div className="lg:row-span-1 lg:col-span-1 flex space-x-[2.5vw] lg:space-x-[20px] lg:p-[20px]">
      <div className="w-[7.5vw] h-[7.5vw] lg:w-[60px] lg:h-[60px] relative">
        <Image src={icon} alt={title} fill />
      </div>
      <div className="w-[60vw] lg:w-auto space-y-[2vw] lg:space-y-[20px]">
        <div
          className={
            "text-[4vw] lg:text-[27px] font-semibold py-[0.7vw] lg:py-[10px] flex items-center tracking-[.01em] "
          }
        >
          {title}
        </div>
        <div className="text-[2.6vw] tracking-[.01em] lg:hidden">
          {items.join(" / ")}
        </div>
        <div className="hidden lg:block lg:text-[18px] space-y-[10px] tracking-[.01em]">
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
