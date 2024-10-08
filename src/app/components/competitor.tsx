import Image from "next/image";

export default function Competitor({
  icon,
  name,
  desc,
  pros,
  cons,
}: {
  icon: string;
  name: string;
  desc: string;
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="p-[20px] space-y-[20px] max-w-[316px] bg-white rounded-[20px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
      <div className="flex space-x-[10px]">
        <Image src={icon} alt={name} width={100} height={100} />
        <div className="flex flex-col justify-evenly">
          <div className="text-[18px] font-semibold tracking-[.01em]">
            {name}
          </div>
          <div className="text-[14px] tracking-[.01em]">{desc}</div>
        </div>
      </div>
      <div className="space-y-[20px]">
        {pros.map((pro) => (
          <div key={pro} className="flex space-x-[10px]">
            <Image
              src="/icons/check.svg"
              alt="check"
              width={24}
              height={24}
              className="mb-auto"
            />
            <div className="text-[16px] tracking-[.01em]">{pro}</div>
          </div>
        ))}
        {cons.map((con) => (
          <div key={con} className="flex space-x-[10px]">
            <Image
              src="/icons/warning.svg"
              alt="warning"
              width={24}
              height={24}
              className="mb-auto"
            />
            <div className="text-[16px] tracking-[.01em]">{con}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
