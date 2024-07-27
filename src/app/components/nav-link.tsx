import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-2xl tracking-widest" href={href}>
      {children}
    </Link>
  );
}
