import Image from "next/image";

export default function Speech({ src }: { src: string }) {
  return (
    <div className="px-[1.4vw] lg:px-[20px] lg:space-x-[20px] flex justify-between">
      <Image
        src="/avatars/user-needs.svg"
        alt="avatar"
        width={100}
        height={100}
        className="mt-auto w-[12.8vw] h-[12.8vw] lg:w-[100px] lg:h-[100px]"
      />
      <Image
        src={src}
        alt="speech"
        width={0}
        height={0}
        className="w-[51.3vw] h-[37.7vw] lg:w-[325px] lg:h-[248px]"
      />
    </div>
  );
}
