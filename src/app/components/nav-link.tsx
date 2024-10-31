import Link from "next/link";

export default function NavLink({
  href,
  className,
  children,
  target,
  onClick,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Link
      className={`text-2xl tracking-widest ${className}`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
