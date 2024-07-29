import Image from "next/image";

export default function DownArrow() {
  return (
    <Image
      src="/icons/down-arrow.svg"
      alt="down arrow"
      width={75}
      height={100}
      className="mx-auto"
    />
  );
}
