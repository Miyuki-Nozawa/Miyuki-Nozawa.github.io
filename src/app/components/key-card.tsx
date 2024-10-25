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
    <div className="px-[40px] py-[50px] bg-pink rounded-[20px] space-y-[30px] w-1/3">
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
        <div
          className={`text-[22px] font-medium tracking-[.01em] ${
            centered ? "text-center" : ""
          }`}
        >
          {label}
        </div>
        {sublabel && (
          <div
            className={`text-[18px] tracking-[.01em] ${
              centered ? "text-center" : ""
            }`}
          >
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
