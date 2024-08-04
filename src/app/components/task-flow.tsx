import Image from "next/image";

export default function TaskFlow({
  title,
  img,
  width,
  height,
  className,
}: {
  title: string;
  img: string;
  width: number;
  height: number;
  className: string;
}) {
  return (
    <div>
      <div className="text-2xl font-medium tracking-[.02em]">{title}</div>
      <div className="overflow-scroll">
        <div className={`relative h-[180px] flex items-center ${className}`}>
          <Image src={img} alt="task flow" width={width} height={height} />
        </div>
      </div>
    </div>
  );
}
