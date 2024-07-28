import Image from "next/image";
import Link from "next/link";

export default function FigmaLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="mr-auto">
      <div className="flex items-center space-x-6">
        <Image src="/icons/figma.svg" alt="Figma" width={32} height={42} />
        <div className="text-link text-2xl tracking-[.02em] underline">
          {children}
        </div>
      </div>
    </Link>
  );
}
