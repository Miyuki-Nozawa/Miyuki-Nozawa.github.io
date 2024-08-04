export default function ResearchGoal({
  title,
  children,
  start,
}: {
  title: string;
  start: number;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full space-y-20">
      <div className="text-3xl tracking-[.02em] pl-2 font-medium">
        <ol start={start} className="list-decimal list-outside ml-5">
          <li>{title}</li>
        </ol>
      </div>
      {children}
    </div>
  );
}
