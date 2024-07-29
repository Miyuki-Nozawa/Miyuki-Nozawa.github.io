export default function DesignSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-12 w-full">
      <div className="font-manrope text-[1.75rem] font-semibold tracking-[.02em] text-brown4 underline">
        {title}
      </div>
      {children}
    </div>
  );
}
