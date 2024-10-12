import Image from "next/image";

export default function ResearchGoalCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex col-span-1">
      <div className="flex px-[30px] py-[60px] bg-white rounded-[20px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.10)]">
        <div className="space-x-[10px] flex">
          <Image
            src="/icons/loading.svg"
            alt="card"
            width={30}
            height={30}
            className="mb-auto"
          />
          <div className="text-[18px] inline tracking-[.01em]">{children}</div>
        </div>
      </div>
    </div>
  );
}
