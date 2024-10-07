import Link from "next/link";
import Image from "next/image";

export default function Figma({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-x-[20px] flex items-center">
      <Image src="/icons/figma.svg" alt="figma" width={20} height={27} />
      <span className="text-[18px] text-blueLink tracking-[.01em] underline">
        <Link href={href}>{children}</Link>
      </span>
    </div>
  );
}
