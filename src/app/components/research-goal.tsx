export default function ResearchGoal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full space-y-20">
      <div className="text-3xl tracking-[.02em] pl-2 font-medium">{title}</div>
      {children}
    </div>
  );
}
