import Image from "next/image";

export default function TaskFlow({
  title,
  img,
  width,
  height,
}: {
  title: string;
  img: string;
  width: number;
  height: number;
}) {
  return (
    <div>
      <div className="text-2xl font-medium tracking-[.02em]">{title}</div>
      <div className="overflow-scroll">
        <div className="relative w-[2222px] h-[168px]">
          <Image src={img} alt="task flow" width={width} height={height} />
        </div>
      </div>
    </div>
  );
}
