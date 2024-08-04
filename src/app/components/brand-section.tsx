export default function BrandSection({
  title,
  className,
  children,
  color,
}: {
  title: string;
  className: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className={className}>
      <div
        className={`font-manrope text-[28px] font-extrabold tracking-[.02em] underline ${color}`}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
