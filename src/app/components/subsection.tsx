export default function Subsection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-[5.1vw] lg:space-y-[30px]">
      <div className="text-[5vw] lg:text-[40px] font-semibold lg:font-bold tracking-[.01em]">
        {title}
      </div>
      {children}
    </div>
  );
}
