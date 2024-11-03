export default function Button({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "font-manrope font-medium flex items-center justify-center " +
        "w-full h-[10vw] rounded-[10px] py-[10px] text-[2.56vw] " +
        "lg:w-[190px] lg:h-[43px] lg:rounded-[10px] lg:py-[10px] lg:text-[15.2px] " +
        className
      }
    >
      {children}
    </div>
  );
}
