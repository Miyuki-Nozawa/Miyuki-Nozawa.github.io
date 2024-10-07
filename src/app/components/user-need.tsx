import Image from "next/image";

export default function UserNeed({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-center space-x-[10px]">
      <div className="p-[8px] bg-white rounded-[10px]">
        <Image src={icon} alt={title} width={27} height={27} />
      </div>
      <span className="text-[18px] tracking-[.01em]">{title}</span>
    </div>
  );
}
