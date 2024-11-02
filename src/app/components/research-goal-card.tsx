import Image from "next/image";

export default function ResearchGoalCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex lg:col-span-1">
      <div className="flex px-[5vw] lg:px-[30px] py-[3.8vw] lg:py-[60px] bg-white rounded-[10px] lg:rounded-[20px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.10)]">
        <div className="space-x-[2vw] lg:space-x-[10px] flex">
          <Image
            src="/icons/loading.svg"
            alt="card"
            width={30}
            height={30}
            className="w-[5.6vw] h-[5.6vw] lg:w-[30px] lg:h-[30px] mb-auto"
          />
          <div className="w-[51.5vw] lg:w-auto text-[3.6vw] lg:text-[18px] inline tracking-[.01em]">{children}</div>
        </div>
      </div>
    </div>
  );
}
