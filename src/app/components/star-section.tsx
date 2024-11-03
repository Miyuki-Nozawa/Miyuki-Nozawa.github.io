import Image from "next/image";

export default function StarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-[2.5vw] lg:py-[20px]">
      <div className="space-x-[2vw] lg:space-x-[10px] flex items-center">
        <Image
          src="/icons/star.svg"
          alt="star"
          width={24}
          height={24}
          className="w-[24px] h-[24px] lg:w-[33px] lg:h-[33px]"
        />
        <span
          className={
            "text-[4.1vw] lg:text-[22px] font-semibold lg:font-medium tracking-[.01em]"
          }
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
