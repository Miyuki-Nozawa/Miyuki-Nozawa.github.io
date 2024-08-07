import Link from "next/link";

export default function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={`text-2xl tracking-widest ${className}`} href={href}>
      {children}
    </Link>
  );
}
