import Image from "next/image";

export default function List({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col space-y-[2.56vw] lg:space-y-[20px]">
      <div className="text-[3.64vw] lg:text-[22px] font-medium tracking-[.01em]">
        {title}
      </div>
      <div className="space-y-[2.05vw] lg:space-y-[10px]">
        {items.map((item, i) => (
          <div key={i} className="flex lg:items-center space-x-[0.8vw] lg:space-x-[10px]">
            <Image
              src="/icons/brown-star.svg"
              alt="star"
              width={27}
              height={27}
              className="w-[4.62vw] h-[4.62vw] lg:w-[27px] lg:h-[27px]"
            />
            <span className="text-[3.08vw] lg:text-[18px] tracking-[.01em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
