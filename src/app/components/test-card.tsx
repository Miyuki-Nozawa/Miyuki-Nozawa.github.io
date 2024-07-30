export default function TestCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-12 space-y-7 rounded-lg border-4 border-brown5 w-full">
      <div className="text-[26px] tracking-[.02em] font-medium underline">
        {title}
      </div>
      {children}
    </div>
  );
}
