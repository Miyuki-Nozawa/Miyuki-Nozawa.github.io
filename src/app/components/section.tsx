export default function Section({
  title,
  underline,
  className = "",
  bg = "",
  children,
}: Readonly<{
  title: string;
  underline: string;
  className?: string;
  bg?: string;
  children: React.ReactNode;
}>) {
  const bgColor = bg || "bg-white";
  return (
    <div
      className={`flex flex-col items-center space-y-24 pt-24 ${bgColor} ${className}`}
    >
      <div className="mx-auto inline-block text-center">
        <div className="text-3xl tracking-.02em px-2 mb-2">{title}</div>
        <div className={`h-[5px] w-[200px] rounded-xl ${underline}`}></div>
      </div>
      {children}
    </div>
  );
}
