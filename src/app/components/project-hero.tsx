import Image from "next/image";
import Link from "next/link";

export default function ProjectHero({
  name,
  img,
  logo,
  logoWidth,
  logoHeight,
  subtitle,
  header,
  projectType,
  role,
  projectDuration,
  industry,
}: {
  name: string;
  img: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  subtitle?: string;
  header: string;
  projectType: string;
  role: string;
  projectDuration: string;
  industry: string;
}) {
  return (
    <div className="flex px-48 py-24">
      <div className="relative w-1/2 h-[590px]">
        <Image src={img} alt={name} className="object-contain" fill />
      </div>
      <div className="flex flex-col w-1/2 justify-between">
        <div className="flex items-center space-x-8">
          <Image
            src={logo}
            alt={name}
            width={logoWidth}
            height={logoHeight}
          />
          {subtitle && (
            <div className="text-[26px] tracking-[.02em]">{subtitle}</div>
          )}
        </div>
        <div className="text-3xl font-bold tracking-[.02em]">{header}</div>
        <div className="space-y-4">
          <div className="text-2xl tracking-[.02em]">
            <b className="font-semibold">Project type:</b> {projectType}
          </div>
          <div className="text-2xl tracking-[.02em]">
            <b className="font-semibold">Role:</b> {role}
          </div>
          <div className="text-2xl tracking-[.02em]">
            <b className="font-semibold">Project duration:</b> {projectDuration}
          </div>
          <div className="text-2xl tracking-[.02em]">
            <b className="font-semibold">Industry:</b> {industry}
          </div>
        </div>
        <Link
          href=""
          className="w-fit px-16 py-4 rounded-[4rem] bg-green3 text-white text-xl tracking-[.02em]"
        >
          View hi-fi prototype
        </Link>
      </div>
    </div>
  );
}
