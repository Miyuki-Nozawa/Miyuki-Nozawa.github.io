export default function ProjectSubSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-[30px]">
      <div className="text-[40px] font-bold tracking-[.01em]">{title}</div>
      {children}
    </div>
  );
}
