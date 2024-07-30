import Image from "next/image";

export default function Avatar({
  name,
  age,
  desc,
}: {
  name: string;
  age: string;
  desc: string;
}) {
  return (
    <div className="font-inter text-[18px] tracking-tight w-[270px] space-y-4">
      <div className="relative w-[100px] h-[120px] mx-auto">
      <Image
        src={`/avatars/${name.toLowerCase()}.svg`}
        alt={name}
        fill
      />
      </div>
      <div className="text-center">{name}, age {age}</div>
      <div>{desc}</div>
    </div>
  );
}
