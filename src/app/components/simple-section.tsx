export default function SimpleSection({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <div className="space-y-7">
      <div className="text-brown2 text-[26px] font-medium tracking-[.02em]">
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
