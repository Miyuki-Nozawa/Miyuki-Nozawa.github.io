export default function Button({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-[190px] h-[43px] rounded-[10px] py-[10px] text-[15.2px] font-manrope font-medium flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
