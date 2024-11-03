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
      className={
        "px-[5vw] py-[3.8vw] lg:px-[50px] lg:py-[50px] bg-pink rounded-[10px] lg:rounded-[20px] " +
        "space-x-[2vw] lg:space-x-[30px] flex w-[70vw] lg:w-[485px] " +
        (centered ? "items-center" : "")
      }
    >
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={21}
          height={21}
          className={"lg:w-[66px] lg:h-[66px] " + (centered ? "" : "mb-auto")}
        />
      )}
      <div className="space-y-[2vw] lg:space-y-[10px] my-auto">
        <div className="text-[3.6vw] lg:text-[22px] font-medium tracking-[.01em]">
          {label}
        </div>
        {sublabel && (
          <div className="text-[3.1vw] lg:text-[18px] tracking-[.01em]">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
