import Link from "next/link";

export default function NavLink({
  href,
  className,
  children,
  target,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link
      className={`text-2xl tracking-widest ${className}`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
