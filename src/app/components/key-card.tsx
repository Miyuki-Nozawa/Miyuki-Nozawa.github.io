import Image from "next/image";

export default function KeyCard({
  label,
  icon,
  sublabel,
  centered,
}: {
  label: string;
  icon?: string;
  sublabel?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`p-[50px] bg-light-pink rounded-[20px] space-y-[30px] w-1/3 ${
        centered ? "text-center" : ""
      }`}
    >
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={50}
          height={50}
          className="mx-auto"
        />
      )}
      <div className="space-y-[10px]">
        <div className="text-[22px] font-medium tracking-[.01em]">{label}</div>
        {sublabel && (
          <div className="text-[18px] tracking-[.01em]">{sublabel}</div>
        )}
      </div>
    </div>
  );
}
