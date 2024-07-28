export default function Text({
  className = "",
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`text-[1.6rem] tracking-[.02em] font-light leading-9 ${className}`}
    >
      {children}
    </div>
  );
}
