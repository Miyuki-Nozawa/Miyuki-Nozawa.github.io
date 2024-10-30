import Image from "next/image";

export default function KeyCard({
  label,
  icon,
  sublabel,
}: {
  label: string;
  icon?: string;
  sublabel?: string;
}) {
  return (
    <div className="p-[40px] bg-pink rounded-[20px] space-x-[30px] flex w-[485px]">
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={66}
          height={66}
          className="mb-auto"
        />
      )}
      <div className="space-y-[10px] my-auto">
        <div className="text-[22px] font-medium tracking-[.01em]">{label}</div>
        {sublabel && (
          <div className="text-[18px] tracking-[.01em]">{sublabel}</div>
        )}
      </div>
    </div>
  );
}
