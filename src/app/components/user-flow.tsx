import Image from "next/image";

export default function UserFlow({
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
        <div className={`relative ${className} flex items-center`}>
          <Image src={img} alt="user flow" width={width} height={height} />
        </div>
      </div>
    </div>
  );
}
