import Image from "next/image";

export default function Down({ sm }: { sm?: boolean }) {
  const [width, height] = sm ? [30, 30] : [50, 50];
  return (
    <Image
      src="/icons/down.svg"
      alt="down"
      width={width}
      height={height}
      className="mx-auto"
    />
  );
}
