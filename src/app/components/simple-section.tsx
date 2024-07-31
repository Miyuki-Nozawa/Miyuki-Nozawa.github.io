export default function SimpleSection({
  title,
  className,
  children,
}: Readonly<{ title: string; className: string; children: React.ReactNode }>) {
  return (
    <div className="space-y-7">
      <div className={`text-[26px] font-medium tracking-[.02em] ${className}`}>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
