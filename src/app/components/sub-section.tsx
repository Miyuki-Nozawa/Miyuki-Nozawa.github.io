export default function SubSection({
  title,
  color,
  children,
  relaxed,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  relaxed?: boolean;
}) {
  const spacing = relaxed ? "space-y-24" : "space-y-12";
  return (
    <div className={`${spacing} w-full`}>
      <div
        className={`font-manrope text-[1.75rem] font-semibold tracking-[.02em] underline ${color}`}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
