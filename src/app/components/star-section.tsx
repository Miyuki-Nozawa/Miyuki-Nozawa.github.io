import Image from "next/image";

export default function StarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-[20px]">
      <div className="space-x-[10px] flex items-center">
        <Image src="/icons/star.svg" alt="star" width={33} height={33} />
        <span className="text-[22px] font-medium tracking-[.01em]">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
