export default function Text({
  className = "",
  sm = false,
  children,
}: Readonly<{
  className?: string;
  sm?: boolean;
  children: React.ReactNode;
}>) {
  const fontSize = sm ? "text-[24px]" : "text-[26px]";
  return (
    <div className={`${fontSize} tracking-[.02em] font-light ${className}`}>
      {children}
    </div>
  );
}
