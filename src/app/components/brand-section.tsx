export default function BrandSection({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="font-manrope text-[28px] font-extrabold tracking-[.02em] underline text-brown6">
        {title}
      </div>
      {children}
    </div>
  );
}
