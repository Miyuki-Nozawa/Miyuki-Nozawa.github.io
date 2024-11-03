import Image from "next/image";

export default function UserNeed({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-center space-x-[0.7vw] lg:space-x-[10px]">
      <div className="p-[1vw] lg:p-[8px] bg-white rounded-[5px] lg:rounded-[10px]">
        <Image
          src={icon}
          alt={title}
          width={27}
          height={27}
          className="w-[3.4vw] h-[3.4vw] lg:w-[27px] lg:h-[27px]"
        />
      </div>
      <span className="text-[3.1vw] lg:text-[18px] tracking-[.01em]">
        {title}
      </span>
    </div>
  );
}
