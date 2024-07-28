export default function Text({
  className = "",
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`text-2xl tracking-.03em font-light leading-9 ${className}`}
    >
      {children}
    </div>
  );
}
