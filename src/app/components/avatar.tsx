import Image from "next/image";

export default function Avatar({
  name,
  desc,
  age,
  pronouns,
}: {
  name: string;
  desc: string;
  age?: string;
  pronouns?: string;
}) {
  return (
    <div className="font-inter text-[18px] tracking-tight w-[270px] space-y-4">
      <div className="relative w-[100px] h-[120px] mx-auto">
        <Image src={`/avatars/${name.toLowerCase()}.svg`} alt={name} fill />
      </div>
      <div className="text-center">
        {name}{age && `, age ${age}`}{pronouns && ` (${pronouns})`}
      </div>
      <div>{desc}</div>
    </div>
  );
}
