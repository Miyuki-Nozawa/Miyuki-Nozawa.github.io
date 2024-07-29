import Image from "next/image";

export default function UserFlow({
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
        <div className="relative w-[4096px] h-[950px]">
          <Image src={img} alt="task flow" width={width} height={height} />
        </div>
      </div>
    </div>
  );
}
