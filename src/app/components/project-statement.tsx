export default function ProjectStatement({
  statement,
  solution,
  underline,
  className = "",
}: {
  statement: string;
  solution: string;
  underline: string;
  className?: string;
}) {
  return (
    <div
      className={`px-64 py-28 text-2xl space-y-14 leading-relaxed tracking-[.02em] ${className}`}
    >
      <div>{statement}</div>
      <div className="space-y-9">
        <span className={`font-bold border-b-[3px] pb-1 px-2 ${underline}`}>
          Solution
        </span>
        <div className="font-semibold">{solution}</div>
      </div>
    </div>
  );
}
