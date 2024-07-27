import Image from "next/image";
import Link from "next/link";

export default function ProjectHero({
  name,
  img,
  logo,
  header,
  projectType,
  role,
  projectDuration,
  tools,
}: {
  name: string;
  img: string;
  logo: string;
  header: string;
  projectType: string;
  role: string;
  projectDuration: string;
  tools: string;
}) {
  return (
    <div className="flex px-56 py-24 space-x-28">
      <div className="relative w-[291px] h-[590px]">
        <Image alt={name} src={img} fill={true} />
      </div>
      <div className="flex flex-col">
        <Image alt={name} src={logo} width={210} height={77} className="pb-6" />
        <div className="text-4xl font-bold tracking-.03em mb-24">{header}</div>
        <div className="space-y-4">
          <div className="text-2xl tracking-.03em">
            <b className="font-semibold">Project type:</b> {projectType}
          </div>
          <div className="text-2xl tracking-.03em">
            <b className="font-semibold">Role:</b> {role}
          </div>
          <div className="text-2xl tracking-.03em">
            <b className="font-semibold">Project duration:</b> {projectDuration}
          </div>
          <div className="text-2xl tracking-.03em">
            <b className="font-semibold">Tools:</b> {tools}
          </div>
        </div>
        <Link
          href=""
          className="w-fit mt-auto px-16 py-4 rounded-[4rem] bg-brown text-white text-xl tracking-.03em"
        >
          View hi-fi prototype
        </Link>
      </div>
    </div>
  );
}
