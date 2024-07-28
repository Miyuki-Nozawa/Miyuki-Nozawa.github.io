export default function ProjectStatement({
  statement,
  solution,
}: {
  statement: string;
  solution: string;
}) {
  return (
    <div className="px-64 py-28 bg-olive text-2xl space-y-14 leading-relaxed">
      <div>{statement}</div>
      <div className="font-bold space-y-9">
        <span className="border-b-[3px] border-black pb-1 px-2">Solution</span>
        <div>{solution}</div>
      </div>
    </div>
  );
}
