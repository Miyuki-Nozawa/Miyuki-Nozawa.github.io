export default function TestCard({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`p-12 space-y-7 rounded-lg border-4 w-full ${className}`}>
      <div className="text-[26px] tracking-[.02em] font-medium underline">
        {title}
      </div>
      {children}
    </div>
  );
}
