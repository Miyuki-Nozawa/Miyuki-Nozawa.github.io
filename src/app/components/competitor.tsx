import Image from "next/image";

export default function Competitor({
  icon,
  name,
  desc,
  pros,
  cons,
  wide,
  pibu,
}: {
  icon: string;
  name: string;
  desc?: string;
  pros: string[];
  cons: string[];
  wide?: boolean;
  pibu?: boolean;
}) {
  const width = wide ? "lg:max-w-[485px]" : "lg:max-w-[316px]";
  const [logoW, logoH] = wide ? [222, 50] : pibu ? [163, 30] : [100, 100];
  const padding = wide ? "px-[20px] py-[30px]" : "p-[20px]";

  return (
    <div
      className={`space-y-[5vw] lg:space-y-[20px] bg-white rounded-[10px] lg:rounded-[20px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] ${width} ${padding}`}
    >
      <div
        className={`flex space-x-[8px] lg:space-x-[10px] ${
          wide || pibu ? "justify-center" : ""
        } ${pibu ? "lg:py-[20px]" : ""}`}
      >
        <Image
          src={icon}
          alt={name}
          width={logoW}
          height={logoH}
          className={`${wide ? "lg:w-[222px] lg:h-[50px]" : pibu ? "lg:w-[163px] lg:h-[30px]" : "w-[12.8vw] h-[12.8vw] lg:w-[100px] lg:h-[100px]"}`}
        />
        {desc && (
          <div className="flex flex-col justify-evenly">
            <div className="text-[4.1vw] lg:text-[18px] font-medium lg:font-semibold tracking-[.01em]">
              {name}
            </div>
            <div className="text-[3vw] lg:text-[14px] tracking-[.01em]">
              {desc}
            </div>
          </div>
        )}
      </div>
      <div className="space-y-[2.5vw] lg:space-y-[20px]">
        {pros.map((pro) => (
          <div key={pro} className="flex space-x-[8px] lg:space-x-[10px]">
            <Image
              src="/icons/check.svg"
              alt="check"
              width={18}
              height={18}
              className="mb-auto lg:w-[24px] lg:h-[24px]"
            />
            <div className="text-[3.1vw] lg:text-[16px] tracking-[.01em]">
              {pro}
            </div>
          </div>
        ))}
        {cons.map((con) => (
          <div key={con} className="flex space-x-[8px] lg:space-x-[10px]">
            <Image
              src="/icons/warning.svg"
              alt="warning"
              width={18}
              height={18}
              className="mb-auto lg:w-[24px] lg:h-[24px]"
            />
            <div className="text-[3.1vw] lg:text-[16px] tracking-[.01em]">
              {con}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
