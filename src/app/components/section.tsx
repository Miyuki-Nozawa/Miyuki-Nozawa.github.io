export default function Section({
  title,
  className = "",
  children,
}: Readonly<{
  title: string;
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col items-center space-y-20 py-24 bg-white ${className}`}>
      <div className="mx-auto inline-block">
        <div className="text-3xl tracking-.03em px-2 mb-2">{title}</div>
        <div className="h-[5px] w-full rounded-xl bg-green2"></div>
      </div>
      {children}
    </div>
  );
}
