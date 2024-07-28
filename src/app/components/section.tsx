export default function Section({
  title,
  underline,
  className = "",
  children,
}: Readonly<{
  title: string;
  underline: string;
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex flex-col items-center space-y-24 pt-24 bg-white ${className}`}
    >
      <div className="mx-auto inline-block">
        <div className="text-3xl tracking-.02em px-2 mb-2">{title}</div>
        <div className={`h-[5px] w-full rounded-xl ${underline}`}></div>
      </div>
      {children}
    </div>
  );
}
